/* =========================================================
   SƠ ĐỒ TƯ DUY – vẽ bằng SVG + HTML, không dùng thư viện ngoài
   Bản cập nhật: Hỗ trợ hình ảnh minh hoạ Infographic và Gallery
   ========================================================= */
(function () {
  'use strict';

  const SVGNS = 'http://www.w3.org/2000/svg';
  const $ = (id) => document.getElementById(id);

  const viewport = $('mapViewport');
  const stage = $('mapStage');
  const svg = $('mapLinks');
  const zoomLabel = $('zoomLabel');
  const panel = $('detailPanel');

  /* ---------- Thông số bố cục ---------- */
  const HGAP = [96, 64, 46, 38];   // khoảng cách ngang từ nút cha (theo cấp cha)
  const VGAP = [0, 24, 10, 8];     // khoảng cách dọc giữa các nút anh em (theo cấp con)
  const SIDE_GAP = 32;             // khoảng cách giữa các chủ đề lớn
  const STROKE = [0, 6.5, 3.5, 2]; // độ dày đường nối
  const DURATION = 420;
  const MIN_K = 0.2, MAX_K = 2.5;

  /* ---------- Dựng cây dữ liệu ---------- */
  const all = [];
  function build(raw, parent, depth) {
    if (Array.isArray(raw)) raw = { i: raw[0], t: raw[1], d: raw[2], img: raw[3] };
    const n = {
      i: raw.i, t: raw.t, sub: raw.sub, d: raw.d, img: raw.img, depth, parent,
      color: raw.color || (parent ? parent.color : '#0b4f86'),
      dir: depth === 1 ? (raw.side === 'left' ? -1 : 1) : (parent ? parent.dir : 1),
      open: depth === 0 || !!raw.open,
      children: [], el: null, path: null, badge: null, cur: null,
      w: 0, h: 0, tx: 0, ty: 0, to: 1
    };
    n.initOpen = n.open;
    all.push(n);
    n.children = (raw.c || []).map((c) => build(c, n, depth + 1));
    return n;
  }
  const root = build(window.MINDMAP_DATA, null, 0);

  /* ---------- Tạo phần tử DOM cho nút ---------- */
  function createEl(n) {
    const el = document.createElement('div');
    el.className = 'node l' + Math.min(n.depth, 3) +
      (n.dir < 0 ? ' dir-left' : '') +
      (n.children.length ? '' : ' leaf') +
      (n.d ? ' has-detail' : '') +
      (n.img ? ' has-art' : '');
    el.style.setProperty('--c', n.color);

    const inner = document.createElement('div');
    inner.className = 'node-inner';

    if (n.depth === 0) {
      const wrap = document.createElement('span');
      wrap.className = 'root-logo-wrap';
      const img = document.createElement('img');
      img.src = 'assets/images/logo-hcmue.png';
      img.alt = 'HCMUE';
      img.className = 'root-logo';
      wrap.appendChild(img);

      if (n.img) {
        const artCenter = document.createElement('img');
        artCenter.src = n.img;
        artCenter.alt = 'KHTN 8';
        artCenter.className = 'root-art-img';
        wrap.appendChild(artCenter);
      }

      const txt = document.createElement('div');
      const t1 = document.createElement('div'); t1.className = 'root-title'; t1.textContent = n.t;
      const t2 = document.createElement('div'); t2.className = 'root-sub'; t2.textContent = n.sub || '';
      txt.append(t1, t2);
      inner.append(wrap, txt);
      inner.title = 'Bấm để đưa sơ đồ về giữa';
    } else {
      // Nếu có hình minh hoạ từ Infographic
      if (n.img) {
        const art = document.createElement('span');
        art.className = 'node-art-badge';
        const img = document.createElement('img');
        img.src = n.img;
        img.alt = n.t;
        img.className = 'node-art-img';
        img.loading = 'lazy';
        art.appendChild(img);
        inner.appendChild(art);
      }

      const ic = document.createElement('span'); ic.className = 'node-icon'; ic.textContent = n.i || '•';
      const tx = document.createElement('span'); tx.className = 'node-text'; tx.textContent = n.t;
      inner.append(ic, tx);

      if (n.children.length) {
        n.badge = document.createElement('span');
        n.badge.className = 'node-badge';
        inner.appendChild(n.badge);
      }
    }

    inner.addEventListener('click', (e) => {
      e.stopPropagation();
      if (suppressClick) return;
      onNodeClick(n);
    });

    el.appendChild(inner);
    el.style.opacity = '0';
    stage.appendChild(el);
    n.el = el;
    n.w = el.offsetWidth;
    n.h = el.offsetHeight;

    if (n.parent) {
      const p = document.createElementNS(SVGNS, 'path');
      p.setAttribute('stroke', n.color);
      p.setAttribute('stroke-width', STROKE[Math.min(n.depth, 3)]);
      svg.appendChild(p);
      n.path = p;
    }
  }

  function destroyEl(n) {
    if (n.el) n.el.remove();
    if (n.path) n.path.remove();
    n.el = null; n.path = null; n.badge = null; n.cur = null;
  }

  /* ---------- Bố cục cây hai phía ---------- */
  function collectVisible() {
    const out = [];
    (function walk(n) { out.push(n); if (n.open) n.children.forEach(walk); })(root);
    return out;
  }

  function measureSub(n) {
    if (!n.open || !n.children.length) return (n.sh = n.h);
    const g = VGAP[Math.min(n.depth + 1, 3)];
    let s = -g;
    n.children.forEach((c) => { s += measureSub(c) + g; });
    return (n.sh = Math.max(n.h, s));
  }

  function placeKids(n) {
    if (!n.open || !n.children.length) return;
    const g = VGAP[Math.min(n.depth + 1, 3)];
    let total = -g;
    n.children.forEach((c) => { total += c.sh + g; });
    let y = n.ty - total / 2;
    const edge = n.tx + n.dir * (n.w / 2 + HGAP[Math.min(n.depth, 3)]);
    n.children.forEach((c) => {
      c.tx = edge + n.dir * c.w / 2;
      c.ty = y + c.sh / 2;
      y += c.sh + g;
      placeKids(c);
    });
  }

  function layout() {
    root.tx = 0; root.ty = 0;
    [1, -1].forEach((dir) => {
      const kids = root.children.filter((c) => c.dir === dir);
      let total = -SIDE_GAP;
      kids.forEach((c) => { total += measureSub(c) + SIDE_GAP; });
      let y = -total / 2;
      kids.forEach((c) => {
        c.tx = dir * (root.w / 2 + HGAP[0] + c.w / 2);
        c.ty = y + c.sh / 2;
        y += c.sh + SIDE_GAP;
        placeKids(c);
      });
    });
  }

  /* ---------- Vẽ đường nối ---------- */
  function linkPath(p, c) {
    const dir = c.dir;
    const x1 = p.cur.x + dir * (p.w / 2 - (p.depth === 0 ? 12 : 0));
    const y1 = p.cur.y;
    const x2 = c.cur.x - dir * c.w / 2;
    const y2 = c.cur.y;
    const mx = (x1 + x2) / 2;
    return `M${x1.toFixed(1)},${y1.toFixed(1)} C${mx.toFixed(1)},${y1.toFixed(1)} ${mx.toFixed(1)},${y2.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
  }

  function render(nodes) {
    nodes.forEach((n) => {
      if (!n.el) return;
      n.el.style.transform = `translate(${(n.cur.x - n.w / 2).toFixed(1)}px, ${(n.cur.y - n.h / 2).toFixed(1)}px)`;
      n.el.style.opacity = n.cur.o.toFixed(3);
      n.el.style.pointerEvents = n.to === 0 ? 'none' : '';
      if (n.path && n.parent && n.parent.cur) {
        n.path.setAttribute('d', linkPath(n.parent, n));
        n.path.setAttribute('opacity', (n.cur.o * 0.9).toFixed(3));
      }
    });
  }

  function refreshBadges(nodes) {
    nodes.forEach((n) => {
      if (!n.badge) return;
      n.badge.textContent = n.open ? '−' : String(n.children.length);
      n.badge.title = n.open ? 'Thu gọn nhánh' : `Mở ${n.children.length} ý`;
    });
  }

  /* ---------- Cập nhật có hiệu ứng ---------- */
  let animId = 0;
  function update(opts = {}) {
    const next = collectVisible();
    const nextSet = new Set(next);
    next.forEach((n) => { if (!n.el) createEl(n); });
    layout();

    const leaving = all.filter((n) => n.el && !nextSet.has(n));
    leaving.forEach((n) => {
      let a = n.parent;
      while (a && !nextSet.has(a)) a = a.parent;
      n.tx = a ? a.tx : 0; n.ty = a ? a.ty : 0; n.to = 0;
    });

    next.forEach((n) => {
      n.to = 1;
      if (!n.cur) {
        let a = n.parent;
        while (a && !a.cur) a = a.parent;
        n.cur = opts.instant || !a
          ? { x: n.tx, y: n.ty, o: 0 }
          : { x: a.cur.x, y: a.cur.y, o: 0 };
      }
    });

    refreshBadges(next);
    const movers = next.concat(leaving);
    movers.forEach((n) => { n.from = { x: n.cur.x, y: n.cur.y, o: n.cur.o }; });

    // Giữ nút vừa bấm đứng yên trên màn hình
    const a = opts.anchor;
    if (a && a.from) {
      setView(view.x + (a.from.x - a.tx) * view.k, view.y + (a.from.y - a.ty) * view.k, view.k, true);
    }

    cancelAnimationFrame(animId);
    const t0 = performance.now();
    const step = (now) => {
      const p = opts.instant ? 1 : Math.min(1, (now - t0) / DURATION);
      const e = 1 - Math.pow(1 - p, 3);
      movers.forEach((n) => {
        n.cur.x = n.from.x + (n.tx - n.from.x) * e;
        n.cur.y = n.from.y + (n.ty - n.from.y) * e;
        n.cur.o = n.from.o + (n.to - n.from.o) * e;
      });
      render(movers);
      if (p < 1) animId = requestAnimationFrame(step);
      else leaving.forEach(destroyEl);
    };
    if (opts.instant) step(t0); else animId = requestAnimationFrame(step);
  }

  /* ---------- Khung nhìn: kéo / phóng to ---------- */
  const view = { x: 0, y: 0, k: 1 };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function setView(x, y, k, smooth) {
    view.x = x; view.y = y; view.k = k;
    stage.classList.toggle('smooth', !!smooth);
    stage.style.transform = `translate(${x}px, ${y}px) scale(${k})`;
    zoomLabel.textContent = Math.round(k * 100) + '%';
  }

  function zoomAt(cx, cy, factor, smooth) {
    const k = clamp(view.k * factor, MIN_K, MAX_K);
    const f = k / view.k;
    setView(cx - (cx - view.x) * f, cy - (cy - view.y) * f, k, smooth);
  }

  function fit(smooth = true) {
    const vis = collectVisible();
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    vis.forEach((n) => {
      minX = Math.min(minX, n.tx - n.w / 2); maxX = Math.max(maxX, n.tx + n.w / 2);
      minY = Math.min(minY, n.ty - n.h / 2); maxY = Math.max(maxY, n.ty + n.h / 2);
    });
    const r = viewport.getBoundingClientRect();
    const pad = r.width < 640 ? 16 : 40;
    const k = clamp(Math.min((r.width - pad * 2) / (maxX - minX), (r.height - pad * 2) / (maxY - minY)), 0.22, 1.15);
    setView(r.width / 2 - ((minX + maxX) / 2) * k, r.height / 2 - ((minY + maxY) / 2) * k, k, smooth);
  }

  const pointers = new Map();
  let drag = null, pinch = null, suppressClick = false, hadPinch = false;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.zoom-controls, .detail-panel, .gallery-modal')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      drag = { sx: e.clientX, sy: e.clientY, vx: view.x, vy: view.y, moved: false };
      hadPinch = false;
    } else if (pointers.size === 2) {
      const [p1, p2] = [...pointers.values()];
      pinch = { d: dist(p1, p2) || 1, k: view.k };
      drag = null; hadPinch = true;
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointers.size >= 2) {
      const [p1, p2] = [...pointers.values()];
      const r = viewport.getBoundingClientRect();
      const k = clamp(pinch.k * dist(p1, p2) / pinch.d, MIN_K, MAX_K);
      zoomAt((p1.x + p2.x) / 2 - r.left, (p1.y + p2.y) / 2 - r.top, k / view.k);
      return;
    }
    if (drag) {
      const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.moved && Math.hypot(dx, dy) > 5) {
        drag.moved = true;
        viewport.classList.add('grabbing');
      }
      if (drag.moved) setView(drag.vx + dx, drag.vy + dy, view.k);
    }
  });

  function endPointer(e) {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) {
      if ((drag && drag.moved) || hadPinch) {
        suppressClick = true;
        setTimeout(() => { suppressClick = false; }, 0);
      }
      drag = null;
      viewport.classList.remove('grabbing');
    }
  }
  window.addEventListener('pointerup', endPointer);
  window.addEventListener('pointercancel', endPointer);

  viewport.addEventListener('wheel', (e) => {
    if (e.target.closest('.detail-panel, .gallery-modal')) return;
    e.preventDefault();
    const r = viewport.getBoundingClientRect();
    const dy = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
    zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-dy * 0.0015));
  }, { passive: false });

  viewport.addEventListener('click', (e) => {
    if (suppressClick) return;
    if (!e.target.closest('.node, .detail-panel, .zoom-controls, .gallery-modal')) closeDetail();
  });

  function zoomCenter(f) {
    const r = viewport.getBoundingClientRect();
    zoomAt(r.width / 2, r.height / 2, f, true);
  }
  $('zoomIn').addEventListener('click', () => zoomCenter(1.25));
  $('zoomOut').addEventListener('click', () => zoomCenter(0.8));

  /* ---------- Khung chi tiết ---------- */
  let selected = null;
  let panelNode = null;

  function select(n) {
    if (selected && selected.el) selected.el.classList.remove('selected');
    selected = n;
    if (n && n.el) n.el.classList.add('selected');
  }

  function fullName(n) {
    return typeof n.d === 'string' ? n.d : n.t;
  }

  /* ---------- Định dạng công thức, PTHH và chống lỗi font ---------- */
  function formatDetailItem(rawText) {
    let text = rawText.replace(/^[\s\-–]+/, '');

    // Phát hiện tiền tố đề mục (ví dụ: Khái niệm:, Ví dụ:, 1. Acid..., v.v.)
    const colonIdx = text.indexOf(':');
    let prefix = '';
    let body = text;

    if (colonIdx > 0 && colonIdx <= 55) {
      prefix = text.substring(0, colonIdx + 1);
      body = text.substring(colonIdx + 1).trim();
    }

    function processFormulas(str) {
      if (!str) return '';
      // 1. Phản ứng có điều kiện nhiệt độ
      str = str.replace(/--t°-->/g, ' <span class="chem-arrow"><span class="chem-cond">t°</span>→</span> ');
      str = str.replace(/-->/g, ' <span class="chem-arrow">→</span> ');
      str = str.replace(/->/g, ' <span class="chem-arrow">→</span> ');
      
      // 2. Ký hiệu khí bay hơi và chất kết tủa
      str = str.replace(/↑/g, '<span class="chem-gas" title="Khí bay hơi">↑</span>');
      str = str.replace(/↓/g, '<span class="chem-precipitate" title="Chất kết tủa">↓</span>');

      // 3. Chỉ số dưới công thức hoá học (sau tên nguyên tố hoặc dấu đóng ngoặc)
      // Ví dụ: H2O -> H₂O, Fe2O3 -> Fe₂O₃, Ca(OH)2 -> Ca(OH)₂, Al2(SO4)3 -> Al₂(SO₄)₃
      str = str.replace(/([A-Z][a-z]?|\))(\d+)/g, '$1<sub>$2</sub>');

      return str;
    }

    const isFormula = /→|->|--|↑|↓|\b(H2|O2|H2O|CO2|CaCO3|HCl|NaOH|BaCl2|Fe2O3|Al2O3|SO2|SO3|H2SO4|FeCl2|ZnCl2|CuSO4|Na2SO4|BaSO4)\b|n\s*=|D\s*=|p\s*=|C%|C_M|F_A/.test(text);

    let html = '';
    if (prefix) {
      html += `<strong class="detail-term">${processFormulas(prefix)}</strong> `;
    }
    html += processFormulas(body);

    return { html, isFormula };
  }

  function showDetail(n) {
    panelNode = n;
    panel.style.setProperty('--c', n.color);
    $('detailIcon').textContent = n.i || '•';
    $('detailTitle').textContent = n.t;

    const crumbs = [];
    for (let a = n.parent; a && a.depth > 0; a = a.parent) crumbs.unshift(a.t);
    $('detailCrumb').textContent = crumbs.length ? crumbs.join('  ›  ') : root.t;

    const body = $('detailBody');
    body.innerHTML = '';

    // Ảnh minh hoạ lớn từ Infographic
    if (n.img) {
      const artWrap = document.createElement('div');
      artWrap.className = 'detail-art-card';
      const artImg = document.createElement('img');
      artImg.src = n.img;
      artImg.alt = n.t;
      artImg.className = 'detail-art-image';
      artWrap.appendChild(artImg);
      body.appendChild(artWrap);
    }

    let items;
    if (n.d) items = Array.isArray(n.d) ? n.d : [n.d];
    else items = [n.parent && n.parent.depth > 0 ? `${n.t} (${fullName(n.parent)})` : n.t];

    const lab = document.createElement('div');
    lab.className = 'detail-label';
    lab.textContent = items.length > 2 ? 'Nội dung & yêu cầu cần đạt' : 'Nội dung';
    const ul = document.createElement('ul');
    ul.className = 'detail-list';
    items.forEach((t) => {
      const li = document.createElement('li');
      const { html, isFormula } = formatDetailItem(t);
      li.innerHTML = html;
      if (isFormula) li.classList.add('is-formula-card');
      ul.appendChild(li);
    });
    body.append(lab, ul);

    if (n.children.length) {
      const lab2 = document.createElement('div');
      lab2.className = 'detail-label';
      lab2.textContent = 'Gồm các nhánh con';
      const chips = document.createElement('div');
      chips.className = 'detail-chips';
      n.children.forEach((c) => {
        const chip = document.createElement('span');
        chip.className = 'detail-chip';
        if (c.img) {
          const cImg = document.createElement('img');
          cImg.src = c.img;
          cImg.alt = c.t;
          cImg.className = 'detail-chip-img';
          chip.appendChild(cImg);
        } else {
          const ic = document.createElement('span');
          ic.textContent = c.i || '•';
          chip.appendChild(ic);
        }
        chip.appendChild(document.createTextNode(c.t));
        chips.appendChild(chip);
      });
      body.append(lab2, chips);
    }

    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    select(n);
  }

  function closeDetail() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    panelNode = null;
    select(null);
  }
  $('detailClose').addEventListener('click', closeDetail);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetail();
      closeGallery();
    }
  });

  function isDescendantOrSelf(x, n) {
    for (let a = x; a; a = a.parent) if (a === n) return true;
    return false;
  }

  /* ---------- Bấm vào nút ---------- */
  function onNodeClick(n) {
    if (n.depth === 0) { fit(); return; }
    if (n.children.length) {
      n.open = !n.open;
      if (!n.open && panelNode && isDescendantOrSelf(panelNode, n) && panelNode !== n) closeDetail();
      update({ anchor: n });
      if (n.open && n.d) showDetail(n);
      else if (!n.open && panelNode === n) closeDetail();
      else select(n);
    } else {
      showDetail(n);
    }
  }

  /* ---------- Thanh công cụ ---------- */
  $('btnExpand').addEventListener('click', () => {
    all.forEach((n) => { if (n.children.length) n.open = true; });
    update();
    fit();
  });
  $('btnCollapse').addEventListener('click', () => {
    all.forEach((n) => { n.open = n.depth === 0; });
    closeDetail();
    update();
    fit();
  });
  $('btnCenter').addEventListener('click', () => fit());

  /* ---------- Gallery 4 Infographics ---------- */
  const INFOGRAPHICS = [
    { title: "Bản vẽ 1: Tổng quan chương trình môn KHTN 8", src: "assets/images/infographics/tong_quan.png" },
    { title: "Bản vẽ 2: Chủ đề 1 — Chất và sự biến đổi chất", src: "assets/images/infographics/chat.png" },
    { title: "Bản vẽ 3: Chủ đề 2 — Vật sống", src: "assets/images/infographics/vat_song.jpg" },
    { title: "Bản vẽ 4: Chủ đề 3 — Năng lượng và sự biến đổi", src: "assets/images/infographics/nang_luong.png" }
  ];
  let currentGalleryIndex = 0;
  const galleryModal = $('galleryModal');
  const galleryImg = $('galleryImg');
  const galleryCaption = $('galleryCaption');
  const galleryDownload = $('galleryDownload');
  const galleryTabs = document.querySelectorAll('.gallery-tab');

  function openGallery(index = 0) {
    currentGalleryIndex = index;
    renderGallery();
    if (galleryModal) {
      galleryModal.classList.add('open');
      galleryModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeGallery() {
    if (galleryModal) {
      galleryModal.classList.remove('open');
      galleryModal.setAttribute('aria-hidden', 'true');
    }
  }

  function renderGallery() {
    if (!galleryImg) return;
    const item = INFOGRAPHICS[currentGalleryIndex];
    galleryImg.src = item.src;
    if (galleryCaption) galleryCaption.textContent = item.title;
    if (galleryDownload) {
      galleryDownload.href = item.src;
      galleryDownload.download = item.src.split('/').pop();
    }
    galleryTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentGalleryIndex);
    });
  }

  $('btnGallery')?.addEventListener('click', () => openGallery(0));
  $('galleryClose')?.addEventListener('click', closeGallery);
  $('galleryOverlay')?.addEventListener('click', closeGallery);
  $('galleryPrev')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + INFOGRAPHICS.length) % INFOGRAPHICS.length;
    renderGallery();
  });
  $('galleryNext')?.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % INFOGRAPHICS.length;
    renderGallery();
  });
  galleryTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      currentGalleryIndex = idx;
      renderGallery();
    });
  });

  /* ---------- Chế độ sáng / tối ---------- */
  $('themeToggle').addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') !== 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });

  /* ---------- Khởi tạo ---------- */
  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => fit(), 200);
  });

  function init() {
    update({ instant: true });
    fit(false);
  }
  const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(init);
})();
