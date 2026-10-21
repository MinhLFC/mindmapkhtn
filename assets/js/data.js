/* =========================================================
   DỮ LIỆU SƠ ĐỒ TƯ DUY – KHOA HỌC TỰ NHIÊN 8
   Thống nhất chuẩn hoá theo 4 bản đồ Infographics môn KHTN 8
   Mỗi nút hỗ trợ:
     - t: Từ khoá hiển thị ngắn gọn
     - i: Emoji biểu trưng
     - img: Hình vẽ minh hoạ trích xuất từ Infographic
     - d: Nội dung chi tiết / yêu cầu cần đạt (hiển thị khi click)
     - c: Danh sách các nhánh con
     - side: 'left' | 'right' (ở cấp 1)
   ========================================================= */
window.MINDMAP_DATA = {
  t: "KHTN 8",
  sub: "Chương trình môn KHTN 8",
  img: "assets/images/icons/atom_center.png",
  c: [
    /* ==================== 1. MỞ ĐẦU ==================== */
    {
      i: "🧰",
      t: "Mở đầu",
      color: "#0891b2",
      side: "right",
      open: true,
      d: [
        "Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm.",
        "Quy tắc an toàn trong thực hành Khoa học tự nhiên 8."
      ],
      c: [
        {
          i: "🧪",
          t: "Hoá chất",
          img: "assets/images/icons/chem_phan_ung.png",
          c: [
            ["🔎", "Nhận biết", "Nhận biết một số hoá chất thường dùng trong phòng thí nghiệm."],
            ["🥄", "Cách lấy", "Cách lấy hoá chất rắn, hoá chất lỏng đúng quy tắc an toàn."],
            ["🔒", "Bảo quản", "Cách bảo quản hoá chất an toàn, đúng tiêu chuẩn."]
          ]
        },
        {
          i: "⚗️",
          t: "Dụng cụ",
          img: "assets/images/icons/chem_bien_doi.png",
          c: [
            ["🧫", "Thuỷ tinh", "Ống nghiệm, cốc thuỷ tinh, bình tam giác, ống hút nhỏ giọt..."],
            ["⚖️", "Đo lường", "Cân điện tử, ống đong, nhiệt kế, đồng hồ bấm giây."],
            ["🔥", "Đun nóng", "Đèn cồn, giá đỡ, lưới amiang, kẹp ống nghiệm."]
          ]
        },
        {
          i: "🔌",
          t: "Thiết bị điện",
          img: "assets/images/icons/phys_ac_quy.png",
          c: [
            ["🔋", "Nguồn điện", "Biến áp nguồn, pin điện hoá, ắc quy."],
            ["🎚️", "Điện trở – biến trở", "Sử dụng điện trở, biến trở trong mạch điện."],
            ["📟", "Đồng hồ đo", "Ampe kế, vôn kế, joulemeter đo năng lượng điện."]
          ]
        },
        {
          i: "🦺",
          t: "An toàn PTN",
          c: [
            ["📜", "Nội quy", "Quy tắc an toàn chung trong phòng thực hành."],
            ["⚠️", "Biển cảnh báo", "Nhận biết các kí hiệu cảnh báo nguy hiểm."],
            ["🩹", "Xử lí sự cố", "Cách sơ cứu khi bị bỏng nhiệt, dính axit hoặc đổ vỡ thuỷ tinh."]
          ]
        }
      ]
    },

    /* ==================== 2. CHẤT VÀ SỰ BIẾN ĐỔI CHẤT ==================== */
    {
      i: "⚗️",
      t: "Chất & biến đổi",
      color: "#ea580c",
      side: "right",
      open: true,
      img: "assets/images/icons/chat_banner.png",
      d: "CHẤT VÀ SỰ BIẾN ĐỔI CHẤT",
      c: [
        /* 1. Phản ứng hoá học (8 bài) */
        {
          i: "💥",
          t: "Phản ứng hoá học",
          img: "assets/images/icons/chem_phan_ung.png",
          open: true,
          c: [
            {
              i: "🔄",
              t: "Biến đổi lí – hoá",
              img: "assets/images/icons/chem_bien_doi.png",
              d: [
                "Khái niệm sự biến đổi vật lí và biến đổi hoá học.",
                "Phân biệt giữa hiện tượng vật lí và hiện tượng hoá học.",
                "Lấy ví dụ thực tế về biến đổi vật lí và biến đổi hoá học."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm biến đổi vật lí và biến đổi hoá học."],
                ["🔍", "Phân biệt", "Phân biệt hiện tượng vật lí và hoá học."],
                ["📝", "Ví dụ", "Lấy ví dụ thực tiễn trong đời sống."]
              ]
            },
            {
              i: "🎆",
              t: "Phản ứng HH",
              img: "assets/images/icons/chem_phan_ung.png",
              d: [
                "Tiến hành thí nghiệm phản ứng hoá học.",
                "Khái niệm phản ứng hoá học, chất phản ứng và sản phẩm.",
                "Dấu hiệu nhận biết có phản ứng hoá học xảy ra (kết tủa, đổi màu, sinh khí, toả nhiệt...)."
              ],
              c: [
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm phản ứng hoá học."],
                ["💡", "Khái niệm", "Khái niệm phản ứng hoá học."],
                ["👀", "Dấu hiệu", "Dấu hiệu nhận biết phản ứng hoá học xảy ra."]
              ]
            },
            {
              i: "⚡",
              t: "Năng lượng PƯ",
              img: "assets/images/icons/chem_nang_luong.png",
              d: [
                "Khái niệm phản ứng toả nhiệt và phản ứng thu nhiệt.",
                "Ví dụ về phản ứng toả nhiệt, thu nhiệt trong thực tiễn.",
                "Ứng dụng cung cấp năng lượng của các phản ứng hoá học."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm phản ứng toả nhiệt và thu nhiệt."],
                ["📝", "Ví dụ", "Ví dụ về phản ứng toả nhiệt, thu nhiệt."],
                ["🏭", "Ứng dụng", "Ứng dụng năng lượng phản ứng trong đời sống."]
              ]
            },
            {
              i: "⚖️",
              t: "Bảo toàn khối lượng",
              img: "assets/images/icons/chem_can.png",
              d: [
                "Tiến hành thí nghiệm định luật bảo toàn khối lượng (phản ứng BaCl2 + Na2SO4).",
                "Phát biểu định luật bảo toàn khối lượng: Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm tạo thành."
              ],
              c: [
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm bảo toàn khối lượng."],
                ["📢", "Định luật", "Phát biểu định luật bảo toàn khối lượng."]
              ]
            },
            {
              i: "✍️",
              t: "Phương trình HH",
              img: "assets/images/icons/chem_but_chi.png",
              d: [
                "Khái niệm phương trình hoá học.",
                "Các bước lập sơ đồ phản ứng và cân bằng số nguyên tử mỗi nguyên tố.",
                "Ý nghĩa của phương trình hoá học (tỉ lệ số nguyên tử, phân tử giữa các chất).",
                "Viết và cân bằng phương trình hoá học thành thạo."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm phương trình hoá học."],
                ["📋", "Lập sơ đồ", "Các bước lập sơ đồ phản ứng hoá học."],
                ["🎯", "Ý nghĩa", "Ý nghĩa của phương trình hoá học."],
                ["✏️", "Viết PTHH", "Viết và cân bằng phương trình hoá học."]
              ]
            },
            {
              i: "🧮",
              t: "Mol & tỉ khối",
              img: "assets/images/icons/chem_mol.png",
              d: [
                "Khái niệm mol, khối lượng mol (M), thể tích mol của chất khí ở đktc/đkc (24,79 L).",
                "Công thức tính số mol n = m/M = V/24,79.",
                "Tỉ khối của chất khí: dA/B = MA / MB, dA/kk = MA / 29."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm mol, khối lượng mol, thể tích mol chất khí."],
                ["📐", "Công thức", "Công thức tính số mol và tỉ khối của chất khí."]
              ]
            },
            {
              i: "📊",
              t: "Tính theo PTHH",
              img: "assets/images/icons/chem_tinh_toan.png",
              d: [
                "Tính lượng chất tham gia hoặc sản phẩm theo phương trình hoá học.",
                "Khái niệm hiệu suất phản ứng (H%).",
                "Công thức tính hiệu suất phản ứng: H = (m_thực tế / m_lí thuyết) * 100%."
              ],
              c: [
                ["🔢", "Lượng chất", "Tính lượng chất trong phương trình hoá học."],
                ["📈", "Hiệu suất", "Khái niệm hiệu suất phản ứng."],
                ["🧾", "Tính H%", "Công thức và cách tính hiệu suất phản ứng."]
              ]
            },
            {
              i: "💧",
              t: "Nồng độ dung dịch",
              img: "assets/images/icons/chem_nong_do.png",
              d: [
                "Khái niệm dung dịch, chất tan, dung môi.",
                "Độ tan (S) của một chất trong nước.",
                "Nồng độ phần trăm C% = (m_ct / m_dd) * 100%.",
                "Nồng độ mol C_M = n / V_dd.",
                "Thí nghiệm thực hành pha chế dung dịch theo nồng độ cho trước."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm dung dịch, chất tan, dung môi."],
                ["🧂", "Độ tan", "Độ tan của chất trong nước."],
                ["💯", "C%", "Nồng độ phần trăm của dung dịch."],
                ["🧴", "CM", "Nồng độ mol của dung dịch."],
                ["🧪", "Pha dung dịch", "Thí nghiệm pha chế dung dịch theo nồng độ."]
              ]
            }
          ]
        },

        /* 2. Tốc độ phản ứng và chất xúc tác */
        {
          i: "🚀",
          t: "Tốc độ & xúc tác",
          img: "assets/images/icons/chem_toc_do.png",
          open: true,
          d: [
            "Khái niệm tốc độ phản ứng (nhanh hay chậm của biến đổi hoá học).",
            "Các yếu tố ảnh hưởng đến tốc độ phản ứng: nồng độ, nhiệt độ, diện tích tiếp xúc, áp suất, chất xúc tác.",
            "Khái niệm chất xúc tác (làm tăng tốc độ phản ứng nhưng không bị biến đổi sau phản ứng).",
            "Tiến hành được thí nghiệm và nhận xét các yếu tố ảnh hưởng đến tốc độ phản ứng."
          ],
          c: [
            ["⏱️", "Tốc độ PƯ", "Khái niệm tốc độ phản ứng hoá học."],
            ["🎛️", "Yếu tố ảnh hưởng", "Nhiệt độ, nồng độ, diện tích tiếp xúc, áp suất, xúc tác."],
            ["🧲", "Chất xúc tác", "Khái niệm và vai trò của chất xúc tác."],
            ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và rút ra nhận xét."]
          ]
        },

        /* 3. Acid - Base - pH - Oxide - Muối */
        {
          i: "🌈",
          t: "Acid – Base – Muối",
          img: "assets/images/icons/chem_acid.png",
          open: true,
          d: "Acid - Base - pH - Oxide - Muối",
          c: [
            {
              i: "🍋",
              t: "Acid",
              img: "assets/images/icons/chem_acid.png",
              d: [
                "Khái niệm acid (chứa ion H+).",
                "Tiến hành thí nghiệm và giải thích hiện tượng (làm đỏ quỳ tím, tác dụng kim loại giải phóng H2).",
                "Viết phương trình hoá học đặc trưng của acid.",
                "Tính chất hoá học của acid.",
                "Ứng dụng quan trọng của HCl, H2SO4, CH3COOH trong công nghiệp và đời sống."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm phân tử acid."],
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."],
                ["✏️", "PTHH", "Viết phương trình hoá học của acid."],
                ["⚙️", "Tính chất", "Tính chất hoá học của acid."],
                ["🏭", "Ứng dụng", "Ứng dụng của một số acid thông dụng."]
              ]
            },
            {
              i: "🧼",
              t: "Base",
              img: "assets/images/icons/chem_base.png",
              d: [
                "Khái niệm base (chứa nhóm hydroxide OH-).",
                "Tiến hành thí nghiệm và giải thích hiện tượng (quỳ tím hoá xanh, phenolphtalein hoá hồng).",
                "Viết phương trình hoá học đặc trưng của base.",
                "Tính chất hoá học của base (tác dụng với acid, oxide acid)."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm phân tử base."],
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."],
                ["✏️", "PTHH", "Viết phương trình hoá học của base."],
                ["⚙️", "Tính chất", "Tính chất hoá học của base tan và không tan."]
              ]
            },
            {
              i: "🎨",
              t: "Thang pH",
              img: "assets/images/icons/chem_ph.png",
              d: [
                "Khái niệm chỉ số pH biểu thị độ acid hay base của dung dịch (thang 0-14).",
                "Đo pH bằng giấy chỉ thị màu hoặc pH kế.",
                "Liên hệ pH trong thực tiễn (đất trồng, nước sinh hoạt, môi trường tiêu hoá trong cơ thể)."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm thang đo pH từ 0 đến 14."],
                ["📏", "Đo pH", "Đo pH bằng giấy chỉ thị màu hoặc bút đo."],
                ["🌍", "Thực tiễn", "Ý nghĩa pH trong nông nghiệp, y học, môi trường."]
              ]
            },
            {
              i: "🌫️",
              t: "Oxide",
              img: "assets/images/icons/chem_oxide.png",
              d: [
                "Khái niệm oxide (hợp chất của nguyên tố với oxygen).",
                "Viết phương trình hoá học tạo thành và phản ứng của oxide.",
                "Phân loại oxide: oxide acid, oxide base, oxide lưỡng tính, oxide trung tính.",
                "Tiến hành thí nghiệm và giải thích hiện tượng."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm hợp chất oxide."],
                ["✏️", "PTHH", "Viết phương trình hoá học tạo thành oxide."],
                ["🗂️", "Phân loại", "Oxide acid, oxide base, oxide lưỡng tính, trung tính."],
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và giải thích hiện tượng."]
              ]
            },
            {
              i: "🧂",
              t: "Muối",
              d: [
                "Khái niệm muối (gồm kim loại liên kết gốc acid).",
                "Gọi tên muối thông dụng theo danh pháp chuẩn.",
                "Tính chất vật lí (độ tan, trạng thái tinh thể).",
                "Tính chất hoá học của muối (tác dụng kim loại, acid, base, muối).",
                "Phương pháp điều chế muối.",
                "Tiến hành thí nghiệm và giải thích hiện tượng."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm muối."],
                ["🏷️", "Gọi tên", "Quy tắc gọi tên muối."],
                ["💎", "Tính chất vật lí", "Trạng thái, độ tan trong nước của muối."],
                ["⚗️", "Tính chất hoá học", "Các phản ứng hoá học của muối."],
                ["🏭", "Điều chế", "Các phương pháp điều chế muối trong PTN và công nghiệp."],
                ["🧪", "Thí nghiệm", "Tiến hành thí nghiệm và nhận xét hiện tượng."]
              ]
            }
          ]
        },

        /* 4. Phân bón hoá học */
        {
          i: "🌾",
          t: "Phân bón hoá học",
          img: "assets/images/icons/chem_phan_bon.png",
          open: true,
          d: [
            "Vai trò thiết yếu của phân bón đối với sự sinh trưởng và năng suất cây trồng.",
            "Thành phần và tác dụng của một số loại phân bón phổ biến (phân đạm N, phân lân P, phân kali K, phân NPK, vi lượng).",
            "Ảnh hưởng tiêu cực của việc lạm dụng phân bón hoá học đến đất, nguồn nước và sức khoẻ con người.",
            "Biện pháp giảm thiểu ô nhiễm phân bón (bón đúng liều lượng, đúng thời điểm, sử dụng phân bón hữu cơ)."
          ],
          c: [
            ["🌱", "Vai trò", "Vai trò của phân bón đối với cây trồng."],
            ["🧬", "Thành phần & tác dụng", "Đặc điểm của phân đạm N, lân P, kali K, phân hỗn hợp NPK."],
            ["⚠️", "Ảnh hưởng", "Tác hại của việc lạm dụng phân bón vô cơ."],
            ["♻️", "Giảm ô nhiễm", "Các biện pháp bón phân hợp lí, thân thiện môi trường."]
          ]
        }
      ]
    },

    /* ==================== 3. VẬT SỐNG ==================== */
    {
      i: "🌿",
      t: "Vật sống",
      color: "#16a34a",
      side: "left",
      open: true,
      img: "assets/images/icons/vat_song_banner.png",
      d: "VẬT SỐNG – SINH HỌC CƠ THỂ NGƯỜI & SINH THÁI HỌC",
      c: [
        {
          i: "🧍",
          t: "Cơ thể người",
          img: "assets/images/icons/bio_co_the.png",
          d: [
            "Khái quát về cơ thể người.",
            "Cấu tạo cơ thể người: các khoang cơ thể, các hệ cơ quan.",
            "Các cơ quan và hệ cơ quan chính trong cơ thể người.",
            "Sự thống nhất giữa các cơ quan tạo nên chỉnh thể sống hoàn chỉnh."
          ],
          c: [
            ["🧩", "Cấu tạo", "Cấu tạo các khoang và thành phần cơ thể người."],
            ["🫀", "Hệ cơ quan", "Các hệ cơ quan chính trong cơ thể."],
            ["🔄", "Sự thống nhất", "Sự phối hợp hoạt động thống nhất giữa các hệ cơ quan."]
          ]
        },
        {
          i: "🦴",
          t: "Hệ vận động",
          img: "assets/images/icons/bio_van_dong.png",
          d: [
            "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ vận động (hệ cơ xương).",
            "Bảo vệ hệ vận động (phòng chống loãng xương, gãy xương, cong vẹo cột sống).",
            "Vai trò của tập thể dục, thể thao đối với sự phát triển cơ xương.",
            "Sức khoẻ học đường: tư thế ngồi học đúng, mang vác ba lô hợp lí."
          ],
          c: [
            ["⚙️", "Cấu tạo & chức năng", "Cấu tạo bộ xương và hệ cơ, chức năng nâng đỡ, vận động."],
            ["🛡️", "Bảo vệ", "Phòng chống cong vẹo cột sống và tổn thương xương khớp."],
            ["🏃", "Thể dục thể thao", "Tác dụng rèn luyện thể chất tăng cường cơ bắp."],
            ["🏫", "Sức khoẻ học đường", "Tư thế ngồi học chuẩn và thói quen bảo vệ xương."]
          ]
        },
        {
          i: "🍎",
          t: "Dinh dưỡng & tiêu hoá",
          img: "assets/images/icons/bio_tieu_hoa.png",
          d: [
            "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ tiêu hoá.",
            "Chế độ dinh dưỡng cân đối và hợp lí của con người.",
            "Bảo vệ hệ tiêu hoá (phòng tránh đau dạ dày, sâu răng, rối loạn tiêu hoá).",
            "An toàn vệ sinh thực phẩm và phòng ngừa ngộ độc thực phẩm."
          ],
          c: [
            ["⚙️", "Cấu tạo & chức năng", "Ống tiêu hoá và các tuyến tiêu hoá biến đổi thức ăn."],
            ["🥗", "Chế độ dinh dưỡng", "Khẩu phần ăn cân bằng 4 nhóm chất dinh dưỡng."],
            ["🛡️", "Bảo vệ hệ tiêu hoá", "Ăn uống khoa học và bảo vệ dạ dày, đường ruột."],
            ["🧼", "ATVSTP", "Nguyên tắc chọn thực phẩm sạch và an toàn vệ sinh."]
          ]
        },
        {
          i: "🩸",
          t: "Máu & tuần hoàn",
          img: "assets/images/icons/bio_tuan_hoan.png",
          d: [
            "Chức năng, sự phù hợp giữa cấu tạo với chức năng của máu và hệ tuần hoàn (tim, mạch máu).",
            "Bảo vệ hệ tuần hoàn và một số bệnh phổ biến (tăng huyết áp, xơ vữa động mạch, thiếu máu).",
            "Miễn dịch: kháng nguyên, kháng thể; cơ chế miễn dịch và vai trò của vaccine trong phòng bệnh."
          ],
          c: [
            ["❤️", "Tim & mạch máu", "Cấu tạo tim 4 ngăn, vòng tuần hoàn lớn và nhỏ."],
            ["🛡️", "Bảo vệ & bệnh lý", "Phòng tránh huyết áp cao, đột quỵ và bệnh tim mạch."],
            ["💉", "Kháng nguyên – thể", "Cơ chế miễn dịch đặc hiệu và không đặc hiệu."],
            ["🩹", "Vaccine", "Ý nghĩa tiêm chủng vaccine tạo miễn dịch chủ động."]
          ]
        },
        {
          i: "💨",
          t: "Hệ hô hấp",
          img: "assets/images/icons/bio_ho_hap.png",
          d: [
            "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ hô hấp (đường dẫn khí và phổi).",
            "Cơ chế trao đổi khí ở phổi và ở tế bào.",
            "Bảo vệ hệ hô hấp (phòng tránh viêm họng, viêm phổi, hen suyễn, tác hại thuốc lá và bụi mịn)."
          ],
          c: [
            ["⚙️", "Cấu tạo & chức năng", "Đường dẫn khí và phế nang thực hiện trao đổi khí."],
            ["🛡️", "Bảo vệ hô hấp", "Phòng tránh ô nhiễm không khí và khói thuốc lá."]
          ]
        },
        {
          i: "💧",
          t: "Hệ bài tiết",
          img: "assets/images/icons/bio_bai_tiet.png",
          d: [
            "Các cơ quan của hệ bài tiết nước tiểu (thận, ống dẫn nước tiểu, bóng đái, ống đái).",
            "Chức năng bài tiết, quá trình lọc máu tạo nước tiểu ở nephron của thận.",
            "Bảo vệ hệ bài tiết (uống đủ nước, hạn chế ăn quá mặn, phòng tránh sỏi thận, suy thận)."
          ],
          c: [
            ["🧩", "Cơ quan", "Thận, ống dẫn, bóng đái và ống đái."],
            ["⚙️", "Chức năng", "Lọc máu, cân bằng nội môi và đào thải độc tố."],
            ["🛡️", "Bảo vệ thận", "Thói quen uống nước đúng cách và phòng tránh sỏi thận."]
          ]
        },
        {
          i: "🔁",
          t: "Môi trường trong",
          img: "assets/images/icons/bio_moi_truong_trong.png",
          d: [
            "Khái niệm môi trường trong của cơ thể (máu, nước mô, bạch huyết).",
            "Duy trì sự ổn định môi trường trong (cân bằng nội môi: nhiệt độ, huyết áp, đường huyết, pH)."
          ],
          c: [
            ["💡", "Khái niệm", "Thành phần môi trường trong cơ thể."],
            ["⚖️", "Cân bằng nội môi", "Cơ chế duy trì ổn định nồng độ các chất trong máu."]
          ]
        },
        {
          i: "🧠",
          t: "Thần kinh & giác quan",
          img: "assets/images/icons/bio_than_kinh.png",
          d: [
            "Chức năng, sự phù hợp giữa cấu tạo với chức năng của hệ thần kinh (não, tuỷ sống) và các giác quan (thị giác, thính giác).",
            "Bảo vệ hệ thần kinh và các giác quan (ngủ đủ giấc, tránh chất kích thích, giữ khoảng cách mắt).",
            "Sức khoẻ học đường: phòng chống cận thị học đường, tật cong vẹo cột sống do tư thế xấu."
          ],
          c: [
            ["⚙️", "Cấu tạo thần kinh", "Não bộ, tuỷ sống, dây thần kinh và các giác quan."],
            ["🛡️", "Bảo vệ", "Chăm sóc giấc ngủ, tránh căng thẳng thần kinh."],
            ["🏫", "Sức khoẻ học đường", "Phòng ngừa tật khúc xạ (cận thị) và bảo vệ thính giác."]
          ]
        },
        {
          i: "🧬",
          t: "Hệ nội tiết",
          img: "assets/images/icons/bio_noi_tiet.png",
          d: [
            "Chức năng của các tuyến nội tiết chính: tuyến yên, tuyến giáp, tuyến thượng thận, tuyến tuỵ, tuyến sinh dục.",
            "Vai trò điều hoà các quá trình sinh lí cơ thể của hormone.",
            "Bảo vệ hệ nội tiết (phòng tránh bệnh bướu cổ do thiếu iod, tiểu đường...)."
          ],
          c: [
            ["🧪", "Tuyến nội tiết", "Vị trí và chức năng các tuyến tiết hormone."],
            ["🛡️", "Bảo vệ nội tiết", "Chế độ dinh dưỡng bổ sung iod và phòng ngừa tiểu đường."]
          ]
        },
        {
          i: "✋",
          t: "Da & thân nhiệt",
          img: "assets/images/icons/bio_da.png",
          d: [
            "Chức năng và cấu tạo 3 lớp của da người: biểu bì, bì, mỡ dưới da.",
            "Chăm sóc và bảo vệ da, phòng các bệnh ngoài da (nấm, mụn, ghẻ).",
            "Thân nhiệt: cơ chế điều hoà thân nhiệt khi trời nóng/lạnh, các biện pháp chống nóng, chống lạnh, phòng cảm cúm."
          ],
          c: [
            ["⚙️", "Cấu tạo da", "Lớp biểu bì, lớp bì và lớp mỡ dưới da."],
            ["🧴", "Chăm sóc da", "Vệ sinh da sạch sẽ và bảo vệ da khỏi tia cực tím UV."],
            ["🌡️", "Thân nhiệt", "Cơ chế điều hoà thân nhiệt cân bằng 37°C."]
          ]
        },
        {
          i: "👶",
          t: "Sinh sản",
          img: "assets/images/icons/bio_sinh_san.png",
          d: [
            "Chức năng, cấu tạo của hệ sinh dục nam và nữ.",
            "Bảo vệ hệ sinh dục và vệ sinh tuổi dậy thì.",
            "Bảo vệ sức khoẻ sinh sản vị thành niên, phòng tránh mang thai ngoài ý muốn và các bệnh lây truyền qua đường tình dục."
          ],
          c: [
            ["⚙️", "Hệ sinh dục", "Cấu tạo cơ quan sinh dục nam và nữ."],
            ["🛡️", "Bảo vệ", "Vệ sinh cơ thể đúng cách ở lứa tuổi dậy thì."],
            ["💗", "SK sinh sản", "Giáo dục giới tính và bảo vệ sức khoẻ sinh sản tuổi vị thành niên."]
          ]
        },
        {
          i: "🌻",
          t: "Cảm ứng ở sinh vật",
          img: "assets/images/icons/bio_cam_ung.png",
          d: [
            "Khái niệm cảm ứng ở sinh vật (phản ứng trước kích thích của môi trường).",
            "Các hình thức cảm ứng: tính hướng sáng, hướng đất, hướng nước, hướng tiếp xúc ở thực vật; phản xạ ở động vật.",
            "Vai trò của cảm ứng giúp sinh vật thích nghi và tồn tại trong điều kiện sống thay đổi."
          ],
          c: [
            ["💡", "Khái niệm", "Khái niệm cảm ứng ở thực vật và động vật."],
            ["🌿", "Hình thức cảm ứng", "Hướng sáng, hướng hoá, hướng nước và các phản xạ."],
            ["🎯", "Vai trò", "Ý nghĩa giúp sinh vật thích nghi với môi trường sống."]
          ]
        },
        {
          i: "🌱",
          t: "Sinh trưởng & phát triển",
          img: "assets/images/icons/bio_sinh_truong.png",
          d: [
            "Khái niệm, đặc điểm của sinh trưởng (tăng kích thước, khối lượng) và phát triển (phân hoá tế bào, phát sinh hình thái).",
            "Các giai đoạn phát triển chính ở thực vật và động vật.",
            "Các yếu tố ảnh hưởng: ánh sáng, nước, nhiệt độ, chất dinh dưỡng, hormone.",
            "Ứng dụng kiến thức sinh trưởng và phát triển trong trồng trọt, chăn nuôi."
          ],
          c: [
            ["💡", "Khái niệm", "Khái niệm sinh trưởng và phát triển ở sinh vật."],
            ["📈", "Giai đoạn phát triển", "Vòng đời sinh trưởng qua các giai đoạn."],
            ["☀️", "Yếu tố ảnh hưởng", "Nhiệt độ, ánh sáng, nước và chất dinh dưỡng."],
            ["🚜", "Ứng dụng thực tiễn", "Thúc đẩy sinh trưởng cây trồng và vật nuôi."]
          ]
        },
        {
          i: "🌍",
          t: "Đa dạng sinh học",
          img: "assets/images/icons/bio_da_dang.png",
          d: [
            "Khái niệm và vai trò vô giá của đa dạng sinh học đối với tự nhiên và con người.",
            "Các cấp độ đa dạng sinh học: đa dạng di truyền (gene), đa dạng loài, đa dạng hệ sinh thái.",
            "Bảo vệ đa dạng sinh học: bảo vệ động thực vật quý hiếm, thành lập khu bảo tồn thiên nhiên, ngăn chặn săn bắt trái phép."
          ],
          c: [
            ["💡", "Khái niệm & vai trò", "Đa dạng sinh học duy trì cân bằng sinh thái Trái Đất."],
            ["🗂️", "Cấp độ đa dạng", "Đa dạng di truyền (gene), loài và hệ sinh thái."],
            ["🛡️", "Bảo vệ sinh học", "Bảo tồn các loài có nguy cơ tuyệt chủng và môi trường sống."]
          ]
        },
        {
          i: "🔬",
          t: "Ứng dụng sinh học",
          img: "assets/images/icons/bio_ung_dung.png",
          d: [
            "Thành tựu sinh học hiện đại (công nghệ sinh học, nhân bản vô tính, giải mã bộ gene).",
            "Ứng dụng to lớn của sinh học trong nông nghiệp, y học, bảo vệ môi trường và đời sống con người.",
            "Trách nhiệm của con người trong việc bảo vệ sự sống và phát triển bền vững."
          ],
          c: [
            ["🧬", "Thành tựu", "Những đột phá khoa học sinh học trong thế kỉ 21."],
            ["🏥", "Nông nghiệp & y học", "Sản xuất thuốc, vắc xin, giống cây trồng biến đổi gene."],
            ["🤝", "Trách nhiệm", "Ý thức bảo vệ môi trường sống và trách nhiệm công dân."]
          ]
        }
      ]
    },

    /* ==================== 4. NĂNG LƯỢNG VÀ SỰ BIẾN ĐỔI ==================== */
    {
      i: "⚡",
      t: "Năng lượng",
      color: "#7c3aed",
      side: "left",
      open: true,
      img: "assets/images/icons/nang_luong_banner.png",
      d: "NĂNG LƯỢNG VÀ SỰ BIẾN ĐỔI",
      c: [
        /* 1. Khối lượng riêng và áp suất */
        {
          i: "🧱",
          t: "KLR & áp suất",
          img: "assets/images/icons/phys_klr.png",
          open: true,
          d: "Khối lượng riêng và áp suất",
          c: [
            {
              i: "⚖️",
              t: "Khối lượng riêng",
              img: "assets/images/icons/phys_klr.png",
              d: [
                "Khái niệm khối lượng riêng: Khối lượng của một đơn vị thể tích chất đó.",
                "Công thức tính: D = m / V (D: khối lượng riêng, m: khối lượng, V: thể tích).",
                "Đơn vị đo khối lượng riêng thường dùng: kg/m3, g/cm3.",
                "Thực hành đo khối lượng riêng của vật rắn và chất lỏng.",
                "Điều kiện vật nổi, vật chìm và định luật Archimedes (lực đẩy Ác-si-mét FA = d * V)."
              ],
              c: [
                ["💡", "Khái niệm", "Khái niệm khối lượng riêng của một chất."],
                ["📐", "Công thức", "Công thức D = m / V."],
                ["📏", "Đơn vị đo", "kg/m3, g/cm3."],
                ["🧪", "Đo KLR", "Thí nghiệm đo khối lượng riêng vật hình học và chất lỏng."],
                ["⛵", "Nổi – chìm (Archimedes)", "Lực đẩy Archimedes và điều kiện vật nổi, lơ lửng, chìm."]
              ]
            },
            {
              i: "👇",
              t: "Áp suất",
              img: "assets/images/icons/phys_ap_suat.png",
              d: [
                "Khái niệm áp suất: Áp lực tác dụng lên một đơn vị diện tích bị ép.",
                "Công thức tính: p = F / S (p: áp suất, F: áp lực, S: diện tích bị ép).",
                "Đơn vị đo áp suất: N/m2 (Pascal - Pa), mmHg, atm.",
                "Tăng, giảm áp suất bằng cách thay đổi áp lực hoặc diện tích tiếp xúc.",
                "Áp suất trong lòng chất lỏng và áp suất khí quyển.",
                "Thí nghiệm chứng minh áp suất khí quyển và các hiện tượng thực tế.",
                "Ứng dụng trong đời sống: giác hút chân không, bình xịt, tàu đệm khí."
              ],
              c: [
                ["💡", "Khái niệm & công thức", "Công thức p = F / S."],
                ["📏", "Đơn vị đo", "Pascal (Pa), N/m2, atmosphere."],
                ["↕️", "Tăng – giảm áp suất", "Biện pháp tăng hoặc giảm áp suất trong kĩ thuật."],
                ["🌊", "Chất lỏng & khí quyển", "Sự truyền áp suất chất lỏng và sự tồn tại của áp suất khí quyển."],
                ["🧪", "Thí nghiệm thực tế", "Thí nghiệm ống hút, bình xịt, quả bóng chịu áp suất."],
                ["🚗", "Ứng dụng đời sống", "Giác mút cao su, bơm tiêm, tàu đệm khí."]
              ]
            }
          ]
        },

        /* 2. Tác dụng làm quay của lực */
        {
          i: "🎡",
          t: "Lực làm quay",
          img: "assets/images/icons/phys_quay.png",
          open: true,
          d: [
            "Lực có thể làm quay vật quanh một điểm hoặc một trục cố định.",
            "Tác dụng làm quay của lực được đặc trưng bằng moment lực (M = F * d).",
            "Đòn bẩy: đòn bẩy có thể làm thay đổi hướng và độ lớn của lực tác dụng.",
            "Ứng dụng các loại đòn bẩy trong thực tiễn (bập bênh, kéo cắt kim loại, kìm, mở nắp chai, xe rùa)."
          ],
          c: [
            ["🔄", "Lực quay vật", [
              "Lực có thể làm quay vật quanh trục hoặc điểm tựa.",
              "Thí nghiệm mô tả tác dụng làm quay của lực khi đẩy cửa hoặc quay bánh xe."
            ]],
            ["🏗️", "Đòn bẩy & moment", [
              "Đòn bẩy và moment lực đặc trưng cho tác dụng làm quay.",
              "Minh hoạ đòn bẩy làm thay đổi hướng và độ lớn của lực.",
              "Phân loại các loại đòn bẩy trong đời sống và kĩ thuật."
            ]]
          ]
        },

        /* 3. Điện */
        {
          i: "💡",
          t: "Điện",
          img: "assets/images/icons/phys_dien.png",
          open: true,
          d: [
            "Hiện tượng nhiễm điện do cọ xát (hai loại điện tích: dương và âm).",
            "Định nghĩa dòng điện là dòng chuyển dời có hướng của các hạt mang điện tích.",
            "Nguồn điện cung cấp năng lượng điện (pin, ắc quy, máy phát điện).",
            "Các tác dụng cơ bản của dòng điện: nhiệt, phát sáng, hoá học, sinh lí.",
            "Mạch điện đơn giản gồm nguồn, công tắc, dây dẫn và thiết bị tiêu thụ.",
            "Đo cường độ dòng điện (I, đơn vị Ampe - A) bằng Ampe kế và hiệu điện thế (U, đơn vị Vôn - V) bằng Vôn kế."
          ],
          c: [
            ["✨", "Nhiễm điện", [
              "Hiện tượng nhiễm điện do cọ xát giải thích cấu tạo nguyên tử.",
              "Sự tương tác giữa các điện tích cùng dấu đẩy nhau, khác dấu hút nhau."
            ]],
            ["➡️", "Dòng điện", [
              "Dòng điện là dòng chuyển dời có hướng của các hạt mang điện tích.",
              "Vật liệu dẫn điện (kim loại) và vật liệu cách điện (cao su, nhựa, thuỷ tinh)."
            ]],
            ["🔥", "Tác dụng dòng điện", [
              "Tác dụng phát sáng (đèn LED, đèn sợi đốt), nhiệt (bàn là, nồi cơm), hoá học (mạ điện), sinh lí (châm cứu, giật điện)."
            ]],
            ["🔋", "Nguồn điện", [
              "Nguồn điện cung cấp năng lượng điện duy trì dòng điện trong mạch.",
              "Các loại pin, ắc quy thông dụng trong đời sống."
            ]],
            ["🔌", "Mạch điện", [
              "Sơ đồ mạch điện và các kí hiệu linh kiện: nguồn, công tắc, bóng đèn, điện trở, chuông, cầu chì.",
              "Nguyên tắc an toàn điện và chức năng của cầu chì, rơ le tự ngắt."
            ]],
            ["📟", "Đo I và U", [
              "Khái niệm cường độ dòng điện (Ampe kế mắc nối tiếp) và hiệu điện thế (Vôn kế mắc song song).",
              "Thao tác thực hành đo I và U với dụng cụ đo điện."
            ]]
          ]
        },

        /* 4. Nhiệt */
        {
          i: "🌡️",
          t: "Nhiệt",
          img: "assets/images/icons/phys_nhiet.png",
          open: true,
          d: [
            "Khái niệm năng lượng nhiệt và nội năng của vật (tổng động năng của các phân tử cấu tạo nên vật).",
            "Đo năng lượng nhiệt (đơn vị Joule - J hoặc Calorie) bằng oát kế hoặc joulemeter.",
            "Các hình thức truyền nhiệt: dẫn nhiệt (chủ yếu chất rắn), đối lưu (chất lỏng và khí), bức xạ nhiệt (truyền qua chân không).",
            "Sự nở vì nhiệt của các chất: chất rắn, lỏng, khí nở ra khi nóng lên, co lại khi lạnh đi.",
            "Ứng dụng và tác hại của sự nở vì nhiệt trong đời sống và xây dựng (khe hở đường ray xe lửa, băng kép nhiệt)."
          ],
          c: [
            ["♨️", "Năng lượng nhiệt", [
              "Khái niệm năng lượng nhiệt và nội năng của vật chất.",
              "Nhiệt độ càng cao thì các phân tử chuyển động càng nhanh."
            ]],
            ["⏲️", "Đo NL nhiệt", [
              "Phương pháp đo năng lượng nhiệt mà vật hấp thụ khi bị đun nóng."
            ]],
            ["🌬️", "Truyền nhiệt", [
              "Dẫn nhiệt, đối lưu và bức xạ nhiệt (năng lượng từ Mặt Trời).",
              "Sự truyền năng lượng trong hiệu ứng nhà kính và vật liệu cách nhiệt tốt."
            ]],
            ["🚆", "Nở vì nhiệt", [
              "Đặc điểm chất khác nhau nở vì nhiệt khác nhau (chất khí nở nhiều nhất, chất rắn nở ít nhất).",
              "Ứng dụng và phòng tránh tác hại của sự nở vì nhiệt trong thực tế."
            ]]
          ]
        }
      ]
    }
  ]
};
