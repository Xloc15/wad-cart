## 2026-09-30 — harness (rules file, gate, CI)
Tool: Claude Code.
Asked for: Sử dụng Claude Code để setup cơ bản các file CLAUDE.md, brief.md, Prettier + test gate và GitHub Actions CI.
Kept: ci.yml workflow, npm scripts (format, format:check, check).
Changed: format các mục trong rules file như: Stack, Commands, Layout, Never, Done means
Rejected:
By hand: Bổ sung các dòng Never: sử dụng dependency ngoài, sử dụng `toFixed()` cho kết quả, không đụng vào các file package.json, .prettierrc, .github/,... trong rules file
