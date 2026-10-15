/* =========================================================
   DỮ LIỆU SƠ ĐỒ TƯ DUY – KHOA HỌC TỰ NHIÊN 8
   Cấu trúc nút:
     { i: icon, t: từ khoá ngắn, d: nội dung gốc (chuỗi hoặc mảng),
       c: [nút con], open: mở sẵn, side: 'left' | 'right' (chỉ cấp 1) }
   Nút lá viết gọn: [icon, từ khoá, nội dung gốc?]
   ========================================================= */
window.MINDMAP_DATA = {
  t: "KHTN 8",
  sub: "Sơ đồ tư duy",
  c: [
    /* ==================== MỞ ĐẦU (bổ sung) ==================== */
    {
      i: "🧰", t: "Mở đầu", color: "#0891b2", side: "right", open: true,
      d: [
        "Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm.",
        "(Nội dung nhánh này được bổ sung theo Chương trình GDPT 2018 – KHTN 8 vì tài liệu gốc chưa có chi tiết.)"
      ],
      c: [
        { i: "🧪", t: "Hoá chất", c: [
          ["🔎", "Nhận biết", "Nhận biết một số hoá chất thường dùng trong phòng thí nghiệm."],
          ["🥄", "Cách lấy", "Cách lấy hoá chất rắn, lỏng đúng quy tắc."],
          ["🔒", "Bảo quản", "Cách bảo quản hoá chất an toàn."]
        ]},
        { i: "⚗️", t: "Dụng cụ", c: [
          ["🧫", "Thuỷ tinh", "Ống nghiệm, cốc thuỷ tinh, bình tam giác, ống hút nhỏ giọt…"],
          ["⚖️", "Đo lường", "Cân, ống đong, nhiệt kế, đồng hồ bấm giây."],
          ["🔥", "Đun nóng", "Đèn cồn, giá đỡ, kẹp ống nghiệm."]
        ]},
        { i: "🔌", t: "Thiết bị điện", c: [
          ["🔋", "Nguồn điện", "Biến áp nguồn, pin."],
          ["🎚️", "Điện trở – biến trở", "Sử dụng điện trở, biến trở."],
          ["📟", "Đồng hồ đo", "Ampe kế, vôn kế, joulemeter."]
        ]},
        { i: "🦺", t: "An toàn PTN", c: [
          ["📜", "Nội quy", "Quy tắc an toàn trong phòng thí nghiệm."],
          ["⚠️", "Kí hiệu cảnh báo", "Nhận biết biển báo, kí hiệu nguy hiểm."],
          ["🩹", "Xử lí sự cố", "Xử lí khi gặp sự cố: bỏng, đổ vỡ, dính hoá chất."]
        ]}
      ]
    },

    /* ==================== CHẤT VÀ SỰ BIẾN ĐỔI CHẤT ==================== */
    {
      i: "⚗️", t: "Chất & biến đổi", color: "#ea580c", side: "right", open: true,
      d: "CHẤT VÀ SỰ BIẾN ĐỔI CHẤT",
      c: [
        { i: "💥", t: "Phản ứng hoá học", open: true, c: [
          { i: "🔄", t: "Biến đổi lí – hoá", d: "Biến đổi vật lí và biến đổi hoá học", c: [
            ["💡", "Khái niệm"], ["🔍", "Phân biệt"], ["📝", "Ví dụ", "Lấy ví dụ"]
          ]},
          { i: "🎆", t: "Phản ứng HH", d: "Phản ứng hoá học", c: [
            ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm."], ["💡", "Khái niệm"], ["👀", "Dấu hiệu"]
          ]},
          { i: "⚡", t: "Năng lượng PƯ", d: "Năng lượng trong các phản ứng hoá học", c: [
            ["💡", "Khái niệm"], ["📝", "Ví dụ"], ["🏭", "Ứng dụng"]
          ]},
          { i: "⚖️", t: "Bảo toàn khối lượng", d: "Định luật bảo toàn khối lượng", c: [
            ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm"], ["📢", "Định luật", "Phát biểu định luật"]
          ]},
          { i: "✍️", t: "Phương trình HH", d: "Phương trình hoá học", c: [
            ["💡", "Khái niệm"], ["📋", "Lập sơ đồ", "Các bước lập sơ đồ phản ứng."],
            ["🎯", "Ý nghĩa"], ["✏️", "Viết PTHH", "Viết phương trình hoá học."]
          ]},
          { i: "🧮", t: "Mol & tỉ khối", d: "Mol và tỉ khối của chất khí", c: [
            ["💡", "Khái niệm"], ["📐", "Công thức", "Công thức tính"]
          ]},
          { i: "📊", t: "Tính theo PTHH", d: "Tính theo phương trình hoá học", c: [
            ["🔢", "Lượng chất", "Tính lượng chất trong phương trình hoá học."],
            ["📈", "Hiệu suất", "Khái niệm hiệu suất"],
            ["🧾", "Tính H%", "Tính hiệu suất phản ứng"]
          ]},
          { i: "💧", t: "Nồng độ dung dịch", c: [
            ["💡", "Khái niệm"], ["🧂", "Độ tan"], ["💯", "C%", "Nồng độ phần trăm"],
            ["🧴", "CM", "Nồng độ mol"], ["🧪", "Pha dung dịch", "Thí nghiệm pha dung dịch"]
          ]},
          { i: "🚀", t: "Tốc độ & xúc tác", d: "Tốc độ phản ứng và chất xúc tác", c: [
            ["⏱️", "Tốc độ PƯ", "Khái niệm tốc độ phản ứng"],
            ["🎛️", "Yếu tố ảnh hưởng", "Các yếu tố ảnh hưởng"],
            ["🧲", "Chất xúc tác", "Khái niệm chất xúc tác"],
            ["🧪", "Thí nghiệm", "Tiến hành được thí nghiệm và nhận xét."]
          ]}
        ]},
        { i: "🌈", t: "Acid – Base – Muối", open: true, d: "Acid - Base - pH - Oxide - Muối", c: [
          { i: "🍋", t: "Acid", c: [
            ["💡", "Khái niệm"], ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."],
            ["✏️", "PTHH", "Viết phương trình hoá học."], ["⚙️", "Tính chất"], ["🏭", "Ứng dụng"]
          ]},
          { i: "🧼", t: "Base", c: [
            ["💡", "Khái niệm"], ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."],
            ["✏️", "PTHH", "Viết phương trình hoá học"], ["⚙️", "Tính chất"]
          ]},
          { i: "🎨", t: "Thang pH", d: "Thang đo pH", c: [
            ["💡", "Khái niệm"], ["📏", "Đo pH", "Đo pH (bằng giấy chỉ thị)"], ["🌍", "Thực tiễn", "Liên hệ trong thực tiễn."]
          ]},
          { i: "🌫️", t: "Oxide", c: [
            ["💡", "Khái niệm"], ["✏️", "PTHH", "Viết phương trình hoá học"], ["🗂️", "Phân loại"],
            ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."]
          ]},
          { i: "🧂", t: "Muối", c: [
            ["💡", "Khái niệm"], ["🏷️", "Gọi tên"], ["💎", "Tính chất vật lí"], ["⚗️", "Tính chất hoá học"],
            ["🏭", "Điều chế", "Phương pháp điều chế muối."],
            ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."]
          ]},
          { i: "🌾", t: "Phân bón hoá học", c: [
            ["🌱", "Vai trò", "Vai trò của phân bón."],
            ["🧬", "Thành phần – tác dụng", "Thành phần và tác dụng của một số loại phân bón."],
            ["⚠️", "Ảnh hưởng", "Ảnh hưởng của việc sử dụng phân bón."],
            ["♻️", "Giảm ô nhiễm", "Biện pháp giảm thiểu ô nhiễm phân bón."]
          ]}
        ]}
      ]
    },

    /* ==================== NĂNG LƯỢNG VÀ SỰ BIẾN ĐỔI ==================== */
    {
      i: "⚡", t: "Năng lượng", color: "#7c3aed", side: "left", open: true,
      d: "NĂNG LƯỢNG VÀ SỰ BIẾN ĐỔI",
      c: [
        { i: "🧱", t: "KLR & áp suất", d: "Khối lượng riêng và áp suất", c: [
          ["⚖️", "D = m/V", [
            "Khái niệm khối lượng riêng.",
            "Nêu được định nghĩa khối lượng riêng, xác định được khối lượng riêng qua khối lượng và thể tích tương ứng, khối lượng riêng = khối lượng/thể tích.",
            "Liệt kê được một số đơn vị đo khối lượng riêng thường dùng."
          ]],
          ["📏", "Đo KLR", [
            "Đo khối lượng riêng.",
            "Thực hiện thí nghiệm để xác định được khối lượng riêng của một khối hộp chữ nhật, của một vật có hình dạng bất kì, của một lượng chất lỏng."
          ]],
          ["👇", "p = F/S", [
            "Áp suất trên một bề mặt.",
            "Dùng dụng cụ thực hành, khẳng định được: áp suất sinh ra khi có áp lực tác dụng lên một diện tích bề mặt, áp suất = áp lực/diện tích bề mặt.",
            "Liệt kê được một số đơn vị đo áp suất thông dụng."
          ]],
          ["↕️", "Tăng – giảm p", [
            "Tăng, giảm áp suất.",
            "Thảo luận được công dụng của việc tăng, giảm áp suất qua một số hiện tượng thực tế."
          ]],
          ["🌊", "Áp suất lỏng – khí", [
            "Áp suất trong chất lỏng, trong chất khí.",
            "Thực hiện thí nghiệm khảo sát tác dụng của chất lỏng lên vật đặt trong chất lỏng, rút ra được: Điều kiện định tính về vật nổi, vật chìm; định luật Archimedes (Acsimet).",
            "Nêu được: Áp suất tác dụng vào chất lỏng sẽ được chất lỏng truyền đi nguyên vẹn theo mọi hướng; lấy được ví dụ minh hoạ.",
            "Thực hiện được thí nghiệm để chứng tỏ tồn tại áp suất khí quyển và áp suất này tác dụng theo mọi phương.",
            "Mô tả được sự tạo thành tiếng động trong tai khi tai chịu sự thay đổi áp suất đột ngột.",
            "Giải thích được một số ứng dụng về áp suất không khí trong đời sống (ví dụ như: giác mút, bình xịt, tàu đệm khí)."
          ]]
        ]},
        { i: "🎡", t: "Lực làm quay", d: "Tác dụng làm quay của lực", c: [
          ["🔄", "Lực quay vật", [
            "Lực có thể làm quay vật.",
            "Thực hiện thí nghiệm để mô tả được tác dụng làm quay của lực."
          ]],
          ["🏗️", "Đòn bẩy – moment", [
            "Đòn bẩy và moment lực.",
            "Dùng dụng cụ đơn giản, minh họa được đòn bẩy có thể làm thay đổi hướng tác dụng của lực.",
            "Lấy được ví dụ về một số loại đòn bẩy khác nhau trong thực tiễn.",
            "Nêu được: tác dụng làm quay của lực lên một vật quanh một điểm hoặc một trục được đặc trưng bằng moment lực.",
            "Sử dụng kiến thức, kĩ năng về đòn bẩy để giải quyết được một số vấn đề thực tiễn."
          ]]
        ]},
        { i: "💡", t: "Điện", c: [
          ["✨", "Nhiễm điện", [
            "Hiện tượng nhiễm điện.",
            "Giải thích được sơ lược nguyên nhân một vật cách điện nhiễm điện do cọ xát.",
            "Giải thích được một vài hiện tượng thực tế liên quan đến sự nhiễm điện do cọ xát."
          ]],
          ["➡️", "Dòng điện", [
            "Dòng điện.",
            "Định nghĩa được dòng điện là dòng chuyển dời có hướng của các hạt mang điện.",
            "Phân loại được vật dẫn điện, vật không dẫn điện."
          ]],
          ["🔥", "Tác dụng dòng điện", [
            "Tác dụng của dòng điện.",
            "Thực hiện thí nghiệm để minh hoạ được các tác dụng cơ bản của dòng điện: nhiệt, phát sáng, hoá học, sinh lí."
          ]],
          ["🔋", "Nguồn điện", [
            "Nguồn điện.",
            "Nêu được nguồn điện có khả năng cung cấp năng lượng điện và liệt kê được một số nguồn điện thông dụng trong đời sống."
          ]],
          ["🔌", "Mạch điện", [
            "Mạch điện đơn giản.",
            "Vẽ được sơ đồ mạch điện với kí hiệu mô tả: điện trở, biến trở, chuông, ampe kế (ammeter), vôn kế (voltmeter), đi ốt (diode) và đi ốt phát quang.",
            "Mắc được mạch điện đơn giản với: pin, công tắc, dây nối, bóng đèn.",
            "Mô tả được sơ lược công dụng của cầu chì, rơ le (relay), cầu dao tự động, chuông điện."
          ]],
          ["📟", "Đo I và U", [
            "Đo cường độ dòng điện và hiệu điện thế.",
            "Thực hiện thí nghiệm để nêu được số chỉ của ampe kế là giá trị của cường độ dòng điện.",
            "Thực hiện thí nghiệm để nêu được khả năng sinh ra dòng điện của pin (hay ắc quy) được đo bằng hiệu điện thế (còn gọi là điện áp) giữa hai cực của nó.",
            "Nêu được đơn vị đo cường độ dòng điện và đơn vị đo hiệu điện thế.",
            "Đo được cường độ dòng điện và hiệu điện thế bằng dụng cụ thực hành."
          ]]
        ]},
        { i: "🌡️", t: "Nhiệt", c: [
          ["♨️", "Năng lượng nhiệt", [
            "Năng lượng nhiệt.",
            "Nêu được khái niệm năng lượng nhiệt, khái niệm nội năng.",
            "Nêu được: Khi một vật được làm nóng, các phân tử của vật chuyển động nhanh hơn và nội năng của vật tăng."
          ]],
          ["⏲️", "Đo NL nhiệt", [
            "Đo năng lượng nhiệt.",
            "Đo được năng lượng nhiệt mà vật nhận được khi bị đun nóng (có thể sử dụng joulemeter hay oát kế (wattmeter))."
          ]],
          ["🌬️", "Truyền nhiệt", [
            "Dẫn nhiệt, đối lưu, bức xạ nhiệt.",
            "Lấy được ví dụ về hiện tượng dẫn nhiệt, đối lưu, bức xạ nhiệt và mô tả sơ lược được sự truyền năng lượng trong mỗi hiện tượng đó.",
            "Mô tả được sơ lược sự truyền năng lượng trong hiệu ứng nhà kính.",
            "Phân tích được một số ví dụ về công dụng của vật dẫn nhiệt tốt, công dụng của vật cách nhiệt tốt."
          ]],
          ["🚆", "Nở vì nhiệt", [
            "Sự nở vì nhiệt.",
            "Thực hiện thí nghiệm để chứng tỏ được các chất khác nhau nở vì nhiệt khác nhau.",
            "Lấy được một số ví dụ về công dụng và tác hại của sự nở vì nhiệt.",
            "Vận dụng kiến thức về sự truyền nhiệt, sự nở vì nhiệt, giải thích được một số hiện tượng đơn giản thường gặp trong thực tế."
          ]]
        ]}
      ]
    },

    /* ==================== VẬT SỐNG ==================== */
    {
      i: "🌿", t: "Vật sống", color: "#16a34a", side: "left", open: true,
      d: "VẬT SỐNG",
      c: [
        ["🧍", "Cơ thể người", "Khái quát về cơ thể người."],
        { i: "🦴", t: "Hệ vận động", d: "Hệ vận động ở người.", c: [
          ["⚙️", "Cấu tạo – chức năng", "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ vận động (hệ cơ xương)."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ vận động."],
          ["🏃", "Thể dục thể thao", "Vai trò của tập thể dục, thể thao."],
          ["🏫", "Sức khoẻ học đường"]
        ]},
        { i: "🍎", t: "Tiêu hoá", d: "Dinh dưỡng và tiêu hoá ở người.", c: [
          ["⚙️", "Cấu tạo – chức năng", "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ tiêu hoá."],
          ["🥗", "Dinh dưỡng", "Chế độ dinh dưỡng của con người."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ tiêu hoá."],
          ["🧼", "ATVSTP", "An toàn vệ sinh thực phẩm."]
        ]},
        { i: "🩸", t: "Máu – tuần hoàn", d: "Máu và hệ tuần hoàn của cơ thể người.", c: [
          ["❤️", "Cấu tạo – chức năng", "Chức năng, sự phù hợp giữa cấu tạo với chức năng của máu và hệ tuần hoàn."],
          ["🛡️", "Bảo vệ & bệnh", "Bảo vệ hệ tuần hoàn và một số bệnh phổ biến về máu và hệ tuần hoàn."],
          ["💉", "Miễn dịch – vaccine", "Miễn dịch: kháng nguyên, kháng thể; vaccine."]
        ]},
        { i: "💨", t: "Hô hấp", d: "Hệ hô hấp ở người.", c: [
          ["⚙️", "Cấu tạo – chức năng", "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ hô hấp."],
          ["😷", "Bảo vệ", "Bảo vệ hệ hô hấp."]
        ]},
        { i: "💧", t: "Bài tiết", d: "Hệ bài tiết ở người.", c: [
          ["🧩", "Cơ quan", "Các cơ quan của hệ bài tiết."],
          ["⚙️", "Chức năng", "Chức năng của hệ bài tiết."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ bài tiết."]
        ]},
        { i: "🔁", t: "Môi trường trong", d: "Điều hoà môi trường trong của cơ thể.", c: [
          ["💡", "Khái niệm", "Khái niệm môi trường trong của cơ thể."],
          ["⚖️", "Cân bằng", "Duy trì sự ổn định môi trường trong của cơ thể."]
        ]},
        { i: "🧠", t: "Thần kinh – giác quan", d: "Hệ thần kinh và các giác quan ở người.", c: [
          ["⚙️", "Cấu tạo – chức năng", "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ thần kinh và các giác quan."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ thần kinh và các giác quan."],
          ["🏫", "Sức khoẻ học đường", "Sức khoẻ học đường có liên quan tới hệ thần kinh và giác quan."]
        ]},
        { i: "🧬", t: "Nội tiết", d: "Hệ nội tiết ở người.", c: [
          ["🧪", "Tuyến nội tiết", "Chức năng của các tuyến nội tiết."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ nội tiết."]
        ]},
        { i: "✋", t: "Da – thân nhiệt", d: "Da và điều hoà thân nhiệt ở người.", c: [
          ["⚙️", "Cấu tạo – chức năng", "Chức năng và cấu tạo da người."],
          ["🧴", "Chăm sóc da", "Chăm sóc và bảo vệ da."],
          ["🌡️", "Thân nhiệt"]
        ]},
        { i: "👶", t: "Sinh sản", c: [
          ["⚙️", "Hệ sinh dục", "Chức năng, cấu tạo của hệ sinh dục."],
          ["🛡️", "Bảo vệ", "Bảo vệ hệ sinh dục."],
          ["💗", "SK sinh sản", "Bảo vệ sức khoẻ sinh sản."]
        ]},
        { i: "🌍", t: "Nhân tố sinh thái", d: "Môi trường và các nhân tố sinh thái.", c: [
          ["🏞️", "Môi trường sống", "Khái niệm môi trường sống, các loại môi trường."],
          ["☀️", "Vô sinh – hữu sinh", "Nhân tố sinh thái vô sinh, hữu sinh."]
        ]},
        { i: "🌳", t: "Hệ sinh thái", c: [
          ["🦌", "Quần thể", "Quần thể: khái niệm, đặc trưng, ví dụ, biện pháp bảo vệ."],
          ["🐾", "Quần xã", "Quần xã: khái niệm, ví dụ, đặc trưng, biện pháp bảo vệ đa dạng sinh học trong quần xã."],
          ["🏝️", "Hệ sinh thái", "Hệ sinh thái: khái niệm, các kiểu hệ sinh thái, bảo vệ hệ sinh thái."],
          ["🔗", "Chuỗi – lưới thức ăn", "Trao đổi chất và chuyển hoá năng lượng trong hệ sinh thái: chuỗi, lưới thức ăn, tháp sinh thái."],
          ["🌐", "Sinh quyển"]
        ]},
        { i: "☯️", t: "Cân bằng tự nhiên", c: [
          ["⚠️", "Mất cân bằng", "Khái niệm, nguyên nhân gây mất cân bằng tự nhiên."],
          ["🤝", "Duy trì", "Biện pháp duy trì cân bằng tự nhiên."]
        ]},
        { i: "♻️", t: "Bảo vệ môi trường", c: [
          ["👷", "Tác động con người", "Tác động của con người đối với môi trường."],
          ["🏭", "Ô nhiễm", "Ô nhiễm môi trường."],
          ["🌡️", "Biến đổi khí hậu"],
          ["🌲", "Bảo vệ thiên nhiên"],
          ["🚯", "Hạn chế ô nhiễm", "Hạn chế ô nhiễm môi trường."]
        ]}
      ]
    }
  ]
};
