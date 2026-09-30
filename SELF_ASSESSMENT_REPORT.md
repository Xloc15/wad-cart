# SELF_ASSESSMENT_REPORT.md

## Self-assessment — IA#1 · cartTotal with a harness

Submitted by: <MSSV> — <Họ và tên>
Repository: https://github.com/Xloc15/wad-cart
Total I claim: **87 / 100**

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 28 | `npm test`: 11/11 pass. Ví dụ mẫu trả về `467400` kiểu number (test `the total is a number, not a string`); miễn phí ship đúng ngưỡng (`shipping is free when the subtotal equals freeShipFrom`); giỏ rỗng → 0; `price` âm, `qty` 1.5 / 0 / -1 ném `RangeError` — `test/cart.test.js`. Làm tròn một lần bằng `Math.round` ở cuối `src/cart.js`, không dùng `toFixed`. |
| Tests | 20 | 18 | 11 test trong `test/cart.test.js`, mỗi test kiểm tra một quy tắc và đặt tên theo quy tắc đó: ví dụ mẫu, kiểu number, giỏ rỗng, đúng ngưỡng (500000), dưới ngưỡng 1 đồng (499999), làm tròn VAT lẻ (12345 → 43333), `price = 0` hợp lệ, 4 case `RangeError`. Commit TODO `<hash test>`. |
| Harness | 20 | 17 | `CLAUDE.md`: Stack, Commands, Layout, 5 dòng Never, Done means (commit TODO `<hash>`). Gate `npm run check` = `prettier --check src test` + `npm test` (`package.json`, `.prettierrc`). CI `.github/workflows/ci.yml` chạy khi push: đỏ ở run [36731324228](https://github.com/Xloc15/wad-cart/actions/runs/36731324228) (lỗi format), xanh ở run TODO `<url>`. |
| Brief | 15 | 13 | `brief.md`: phạm vi file được sửa / không được sửa, contract đầy đủ (`>=` ở ngưỡng, làm tròn một lần), các case `RangeError` kèm giá trị, "không thêm dependency", 10 test có giá trị mong đợi, 5 bước dừng lại chờ đọc diff. Brief do Claude soạn từ prompt của tôi, tôi đọc lại và chỉnh — khai báo trong `AI-LOG.md`. |
| AI-LOG.md | 15 | 11 | 2 entry: harness (2026-09-30) và review + refactor cartTotal (TODO). Có Tool / Asked for / Kept / Changed / Rejected / By hand; By hand ghi bản cài đặt đầu tiên của tôi ở commit `2bb10a0`. Entry harness viết sau khi đã commit nên còn mỏng, dòng Rejected để trống. |
| **Total** | **100** | **87** | |

## What I did not manage

- **Không có lần `npm test` đỏ trong lịch sử commit trước khi viết code.** Tôi đã chạy `npm test` và thấy lỗi
  `not implemented` trên máy, nhưng lại commit harness, brief và bản cài đặt đầu tiên chung một commit
  (`2bb10a0`). Vì vậy lần CI đỏ đầu tiên là do lỗi format (`src/cart.js` có dòng chỉ chứa dấu cách,
  `.prettierrc` chưa được commit), không phải do `not implemented`.
- **`CLAUDE.md` ban đầu nằm sai thư mục** (ở thư mục cha, ngoài repo), nên commit `2bb10a0` không có rules file.
  Tôi phát hiện khi viết bảng này và đã thêm vào repo ở commit TODO `<hash>`.
- Entry AI-LOG đầu tiên được viết sau khi commit, nên không còn nhớ chính xác những gì đã bác bỏ.

## What I would do differently

Commit từng bước nhỏ theo đúng thứ tự của đề bài: harness (CI đỏ) → brief → code → test. Chạy `git status`
trước mỗi commit để chắc chắn đúng file nằm trong repo. Ghi AI-LOG ngay trong session làm việc bằng `/ai-log`
thay vì viết lại sau.
