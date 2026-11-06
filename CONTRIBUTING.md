# Contributing

Thanks for improving the Qentrah Docs starter.

## Getting started

```bash
npm install
npm run dev
```

## Where to edit

- `src/content/site.js` — name, description, nav, hero, labels, footer URLs.
- `src/content/products.js` — verified product and package catalog.
- `src/content/guides.js` — starter documentation blocks.
- `src/styles/tokens.css` — black / white / blue tokens.
- `src/components/MotionScene.jsx` — animation. Keep deterministic, pausable, and reduced-motion aware.

## Guidelines

- Preserve Qentrah identity, product names, and official links (`https://qentrah.com/docs`).
- Verify product names and package names before editing: QH Pixels, QH, Kyna, Nexfiy, Qentrah Languages; `@qentrah/auth-sdk`, `@qentrah/whatsapp`, `@qentrah/dui`, `@qentrah/skills`, `@qentrah/cms`, `@qentrah/admin`, `@qentrah/sdk`, `@qentrah/templates`.
- Do not invent install commands for a published `qentrah-docs` npm package or a repository URL. The source repository is `https://github.com/Up-to-code/qentrah-docs`.
- Do not AI-redesign or alter the original Qentrah logo SVG.
- Respect `prefers-reduced-motion`.
- Keep the stack as Vite + React + JavaScript (no TypeScript).

## Checks

```bash
npm run lint
npm run build
```

Also review desktop and mobile layouts in a browser. Run the Rams `quick_review` after UI edits; if credits are exhausted, report that rather than claiming a pass.
