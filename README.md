# Qentrah Docs

An open-source React documentation starter for Qentrah products, packages, and creative tools.

## Quick start

```bash
git clone https://github.com/Up-to-code/qentrah-docs.git
cd qentrah-docs
npm install
npm run dev
```

`npm run dev` starts Vite on port `5173` by default. This session serves `5175`.

Other scripts:

```bash
npm run build     # production build
npm run lint      # oxlint src
npm run preview   # preview the production build
```

## Customize this starter

Edit these files first. They are the single source of truth for starter content:

- `src/content/site.js` — project name, description, navigation, hero, labels, and footer URLs.
- `src/content/products.js` — verified Qentrah product and package catalog.
- `src/content/guides.js` — editable starter documentation blocks.
- `src/styles/tokens.css` — black / white / blue design tokens.
- `src/components/MotionScene.jsx` — generated artwork with an unchanged SVG brand mark, CSS motion, pause control, and reduced-motion support.

Routing uses hash routes: `#/docs/introduction`, `#/docs/customization`, and `#/docs/contributing`.

Product links point to the official docs at `https://qentrah.com/docs`. Real project names are QH Pixels, QH, Kyna, Nexfiy, and Qentrah Languages. Packages are `@qentrah/auth-sdk`, `@qentrah/whatsapp`, `@qentrah/dui`, `@qentrah/skills`, `@qentrah/cms`, `@qentrah/admin`, `@qentrah/sdk`, and `@qentrah/templates`.

## Identity and branding

Qentrah identity, products, and official branding are preserved. The original Qentrah logo SVG is used unchanged; generated blue abstract artwork is supporting decoration only.

## License

Code is released under the MIT License (see `LICENSE`). The MIT license applies to code only. The original Qentrah logo, product artwork, and brand assets are excluded and remain the property of Qentrah. Use your own logo and brand assets for a fork.

Fonts (Geist and Geist Mono) are licensed under the SIL Open Font License 1.1; preserve the bundled OFL notices. See `THIRD_PARTY_NOTICES.md`.

## What is included

- A Vite-inspired split hero, thin grid dividers, product overview, package catalog, and a blue artwork footer.
- The original Qentrah SVG mark and real Qentrah product names, linked to their verified official pages.
- A generated glass-and-metal hero, generated documentation and creative-tool illustrations, and subtle CSS float/breathe motion. The Pause motion control pauses every decorative animation. Reduced-motion preferences show a still composition.
- Light and dark themes, saved locally in the browser; no account or service required.
- Search across starter guides, products, and packages, with a keyboard shortcut, native modal focus handling, and Escape dismissal.
- Three editable starter guides, a documentation sidebar, section links, copyable code, and next/previous navigation.
- Responsive layouts, semantic headings, keyboard focus styles, and a skip link.

The package catalog links to the existing Qentrah guides; this starter does not duplicate the product manuals or connect to a publishing backend.

## Requirements

Use Node.js 20.19+ or 22.12+ and npm. The exact engine requirements are declared by the installed Vite version. The lockfile is committed; use `npm ci` for repeatable contributor setup. The project is JavaScript and React; TypeScript is not required.

## Project structure

```text
src/
  content/
    site.js            # Project name, description, navigation, hero, footer
    products.js        # Verified product and package data
    guides.js          # Documentation pages and typed content blocks
  components/
    Brand.jsx          # Original Qentrah SVG geometry
    Header.jsx         # Menus, search dialog, theme control
    HomePage.jsx       # Homepage composition
    MotionScene.jsx    # Generated artwork and original SVG mark
    DocPage.jsx        # Guide renderer and documentation navigation
    CodeBlock.jsx      # Copyable code
    Footer.jsx         # Branded footer and resource links
  styles/
    tokens.css         # Semantic brand and theme tokens
    global.css         # Responsive layouts and shared components
    motion.css         # Animations and pause/reduced-motion rules
  App.jsx              # Hash routing, theme and motion state
public/
  brand/               # Original logos, fonts, font licenses, sources.json
  artwork/             # Original product art and generated blue texture
AGENTS.md              # Instructions and edit map for coding agents
CONTRIBUTING.md        # Contributor workflow
LICENSE                # MIT code license
THIRD_PARTY_NOTICES.md  # Brand and font terms
```

## Add a guide

Append a guide to `src/content/guides.js`:

```js
{
  slug: 'your-guide',
  title: 'Complete a specific task',
  description: 'What the reader will achieve.',
  sections: [{
    id: 'get-started',
    title: 'Get started',
    blocks: [{ type: 'paragraph', text: 'Your instructions.' }],
  }],
}
```

Supported blocks are `paragraph`, `code` (`code`, `language`), `callout`, `list` (`items`), and `link` (`text`, `href`). Content is rendered as React text and components, without arbitrary HTML execution. New guides appear in the sidebar and search automatically. Link to them as `#/docs/your-guide`; link to a section as `#/docs/your-guide?section=get-started`.

Keep guide slugs and section IDs stable. Describe the prerequisites, the steps, the expected result, and what to do when something fails. Verify product instructions against the product itself before publishing them.

## Adapt the brand

Change the semantic tokens in `src/styles/tokens.css`, including both theme blocks. The current palette uses neutral black/white surfaces and a blue accent; there is no global hue filter. Fonts are local Geist and Geist Mono. The Qentrah logo geometry is kept verbatim from the official website and drawn by React; it was not generated by AI.

For a different brand, change `site.js`, replace `Brand.jsx` and `public/brand/qentrah.svg`, and replace the product assets. Use your own identity assets for a fork. Image-generation provenance and the final background prompt are recorded in `docs/asset-prompts.md`.

## Deployment and repository setup

`npm run build` writes a static site to `dist/`. Deploy that folder to a static host. Hash routes work without rewrite rules. For a subdirectory deployment, set Vite's `base` and update root-relative font/image references to the deployment base before building.

Public repository: [Up-to-code/qentrah-docs](https://github.com/Up-to-code/qentrah-docs). Open an issue or pull request there to contribute. When publishing a fork, update the clone URL, `site.github`, and the footer source link in `src/content/site.js` to your repository.

See `docs/verification.md` for the actual checks run on this version.
