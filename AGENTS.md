# AGENTS.md

## Edit map

- `src/content/site.js` — name, description, nav, hero, labels, footer URLs.
- `src/content/products.js` — verified product and package catalog.
- `src/content/guides.js` — editable starter documentation blocks.
- `src/styles/tokens.css` — black / white / blue tokens.
- `src/components/MotionScene.jsx` — generated artwork and the original SVG mark, with CSS animation, pause control, and reduced motion.

## Rules

- Verify real Qentrah products and URLs; do not invent data.
- Products: QH Pixels, QH, Kyna, Nexfiy, Qentrah Languages.
- Packages: `@qentrah/auth-sdk`, `@qentrah/whatsapp`, `@qentrah/dui`, `@qentrah/skills`, `@qentrah/cms`, `@qentrah/admin`, `@qentrah/sdk`, `@qentrah/templates`.
- Product links use verified public pages on `https://qentrah.com`; most guides are under `/docs`.
- Never AI-redesign the original Qentrah logo SVG; use it unchanged.
- Respect `prefers-reduced-motion`.
- Hash routes: `#/docs/introduction`, `#/docs/customization`, `#/docs/contributing`.
- Do not invent an install command for a published `qentrah-docs` npm package or a nonexistent repository URL. The verified repository is `https://github.com/Up-to-code/qentrah-docs`; use that URL for cloning.

## Verification

- Run `npm run lint` and `npm run build`.
- Review desktop and mobile layouts in a browser.
- Run Rams `quick_review` with `via` set to `rules` after UI edits. If credits are exhausted, report that rather than claiming a pass.
- Record actual browser and test results; do not claim checks you did not run.
