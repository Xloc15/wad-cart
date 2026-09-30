# Brief — kiểm tra và refactor cartTotal

## Mục tiêu

Tôi đã tự viết một bản cài đặt cơ bản của `cartTotal(items, options)` trong `src/cart.js`.
Hãy **kiểm tra logic của hàm so với đặc tả bên dưới**, viết test bao phủ đặc tả, sửa lỗi nếu có,
rồi **refactor** cho dễ đọc hơn mà **không đổi hành vi**.

## Bối cảnh

- Đọc `CLAUDE.md` (stack, lệnh, các điều cấm) và `README.md` (đặc tả gốc) trước khi làm.
- Dự án: Node.js 24, JavaScript thuần, ES modules (`import`/`export`).
- Test chạy bằng `node:test` + `node:assert/strict`, lệnh `npm test`.
- Gate: `npm run check` = Prettier format check + `npm test`.

## Phạm vi file

- **Được sửa:** `src/cart.js`, `test/cart.test.js`.
- **Không được đụng:** `package.json`, `package-lock.json`, `.prettierrc`, `.github/`, `CLAUDE.md`,
  `README.md`, `brief.md`, `AI-LOG.md`.
- Không tạo file mới.

## Contract (đặc tả)

- `export function cartTotal(items, options)` — giữ nguyên tên, chữ ký và kiểu export.
- `items`: mảng các phần tử `{ name: string, price: number, qty: number }`.
- `options`: `{ vatRate: number, freeShipFrom: number, shipFee: number }`.
- Quy tắc tính:
  - `subtotal` = tổng `price × qty` của mọi phần tử.
  - `VAT` = `subtotal × vatRate`.
  - `shipping` = `0` khi `subtotal >= freeShipFrom` (**lớn hơn hoặc bằng** — đúng ngưỡng là được miễn phí),
    ngược lại bằng `shipFee`.
  - Kết quả = `subtotal + VAT + shipping`, trả về kiểu **number** (không phải string),
    làm tròn đến đồng bằng `Math.round`, **chỉ làm tròn một lần ở cuối**.
- Giỏ hàng rỗng `[]` → trả về `0` (không VAT, không phí ship).

## Trường hợp lỗi — ném `RangeError`

- `price` âm, ví dụ `-1`. (`price = 0` là **hợp lệ**.)
- `qty` không phải số nguyên dương: `1.5`, `0`, `-1` đều phải ném `RangeError`.

Ngoài hai trường hợp trên, **không tự thêm hành vi mới** (ví dụ giá trị mặc định cho `options`,
kiểm tra `items` có phải mảng không, kiểm tra `vatRate` âm...). Nếu thấy nên thêm, hãy **đề xuất
trong phần báo cáo**, không tự cài.

## Ví dụ mẫu (test có sẵn)

2 × 180000 + 1 × 45000 = 405000 subtotal, VAT 8% = 32400, phí ship 30000 (dưới ngưỡng 500000)
→ **467400**.

Options dùng chung cho các test: `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`.

## Các bước thực hiện (dừng lại sau mỗi bước để tôi đọc diff)

1. **Review — chưa sửa code.** Đối chiếu `src/cart.js` với đặc tả trên. Liệt kê từng vấn đề tìm được
   (lỗi logic, case thiếu, chỗ khó đọc, vấn đề format), kèm số dòng. Nếu không có lỗi, nói rõ là không có.
2. **Viết test** trong `test/cart.test.js`, giữ nguyên test có sẵn. Mỗi test chỉ kiểm tra **một quy tắc**,
   tên test mô tả quy tắc đó:
   1. ví dụ mẫu → `467400`, và `typeof` kết quả là `'number'`
   2. giỏ rỗng `[]` → `0`
   3. subtotal đúng bằng ngưỡng (1 × 500000) → miễn phí ship → `540000`
   4. subtotal dưới ngưỡng 1 đồng (1 × 499999) → có phí ship → `569999`
   5. VAT lẻ được làm tròn: 1 × 12345 → 12345 + 987.6 + 30000 = 43332.6 → `43333`
   6. `price = 0` hợp lệ, không ném lỗi
   7. `price` âm → `RangeError`
   8. `qty = 1.5` → `RangeError`
   9. `qty = 0` → `RangeError`
   10. `qty = -1` → `RangeError`

   Chạy `npm test` và báo test nào đỏ, vì sao.
3. **Sửa lỗi** (nếu bước 1–2 phát hiện) để toàn bộ test xanh. Không sửa test để test qua.
4. **Refactor** `src/cart.js`, giữ nguyên hành vi (mọi test vẫn xanh):
   - Tách phần kiểm tra một phần tử thành hàm phụ nội bộ (không export), đặt tên rõ nghĩa.
   - Tên biến, thông báo lỗi rõ ràng (thông báo lỗi nêu giá trị sai).
   - Bỏ comment thừa của starter; chỉ giữ comment giải thích *vì sao*.
   - Không đổi thuật toán sang cách "thông minh" khó đọc hơn (ví dụ gộp mọi thứ vào một `reduce` dài).
5. Chạy `npm run format` rồi `npm run check`, dán kết quả.

## Ràng buộc

- **Không thêm dependency nào** (cả `dependencies` lẫn `devDependencies`). `src/cart.js` không `import` gì.
- **Không dùng `toFixed`** — nó trả về string.
- Không sửa hay xóa test có sẵn.
- **Không commit, không push.** Tôi tự đọc diff và commit.
- Code và tên test viết bằng tiếng Anh; báo cáo review viết bằng tiếng Việt.

## Hoàn thành khi

- `npm run check` xanh (format + toàn bộ test).
- Diff chỉ chạm `src/cart.js` và `test/cart.test.js`.
- Có báo cáo ngắn: các vấn đề tìm thấy ở bước 1, đã sửa gì, đã refactor gì và vì sao.
