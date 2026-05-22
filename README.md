# Zak Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and lucide/react-icons.

The site is designed to show shipped product work with a focus on visual proof, product impact, and the systems behind each interface.

## Main Sections

- `Hero` introduces the portfolio and primary positioning.
- `ProductSignals` gives a compact view of build flow, stack, and outcomes.
- `About` covers background and working style.
- `Impact` explains how projects connect screens, systems, technologies, and growth.
- `Capabilities` uses screenshot-led proof points to show how pages become products.
- `Projects` presents selected work with screenshots, tech tags, links, and impact chips.
- `Contact` provides the contact form and social links.

## Recent Design Direction

The latest pass reduces general site copy while keeping the project descriptions useful:

- Hero, About, Impact, Capabilities, and Contact use shorter section copy.
- The About section now uses focus chips instead of long paragraphs.
- Project cards keep descriptions, but add animated `Need / Build / Result` signals.
- Project impact chips and stack icons make each build easier to scan.
- Moncures is now the main visual proof point.
- NomadSearch, QuranSphere, and VisionBoard appear as supporting screenshots.
- The old text-heavy capability grid was replaced with compact product-path and impact-layer tiles.
- Mobile overlays were tightened so imagery stays readable on small screens.

## Local Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npx tsc --noEmit
git diff --check
```

Production build:

```bash
npm run build
```

## Project Notes

- Keep screenshots central where possible; the portfolio should show work before explaining it.
- Use short labels and chips for impact instead of long paragraphs.
- Keep project descriptions concise, but do not remove them when they help explain the work.
- Respect reduced-motion settings when adding animation.
- Keep responsive behavior explicit with stable aspect ratios and spacing.
