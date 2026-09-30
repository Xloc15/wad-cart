# wad-cart — rules for the assistant
cartTotal for CSC13008 IA#1. The specification is README.md; the task is in brief.md.

## Stack
- Node.js 24, plain JavaScript, ES modules (`"type": "module"`, use `import`/`export`).
- Tests: Node's built-in runner — `node:test` + `node:assert/strict`. No Jest, no Vitest.
- Formatter: Prettier (devDependency only), config in `.prettierrc`: no semicolons, single quotes.

## Commands
- `npm test`          — run all tests in test/.
- `npm run format`    — format src/ and test/.
- `npm run check`     — the gate: format check + tests. Must pass before you say "done".

## Layout
- `src/cart.js`        — the only production file. Exports `cartTotal(items, options)`.
- `test/cart.test.js`  — tests. One behaviour per test, named after the rule it checks.

## Never
- Never add a runtime dependency. `dependencies` in package.json must not exist.
- Never use `toFixed()` for the result — it returns a string. Round with `Math.round`, once, at the end.
- Never edit or delete an existing test to make it pass. If a test looks wrong, stop and ask me.
- Never touch package.json, .prettierrc, .github/ or this file unless I ask.
- Never commit or push. I read the diff and commit myself.

## Done means
`npm run check` is green, and the diff only touches the files named in the brief.
