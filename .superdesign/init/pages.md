# Page Dependency Trees

## `/` — Home

Entry: `src/pages/index.astro`

Dependencies:

- `src/layouts/Layout.astro`
  - `src/styles/global.css`
  - `public/data/content.json`
- `src/components/Navbar.astro`
  - `public/data/content.json`
- `src/components/Footer.astro`
  - `public/data/content.json`
- `src/components/Zmanim.tsx`
  - `public/data/content.json`
- `src/components/ShabbatSchedule.tsx`
  - `public/data/content.json`
- `src/components/ContactUs.tsx`
- `public/nmnj-pin.png` (rendered content image; represent as a placeholder in canvas context rather than uploading the binary)

Actual render branch: `src/pages/index.astro` renders a centered compact hero, then a responsive grid with the live Zmanim and ShabbatSchedule islands, followed by ContactUs. The announcements/events code is commented out and does not render.

## `/about` — About

Entry: `src/pages/about.astro`

Dependencies:

- `src/layouts/Layout.astro`
  - `src/styles/global.css`
  - `public/data/content.json`
- `src/components/Navbar.astro`
  - `public/data/content.json`
- `src/components/ContactUs.tsx`
- `public/data/content.json`
- `public/rav.jpeg` (rendered content image; placeholder on canvas)
- `public/nmnj-pin.png` (rendered content image; placeholder on canvas)

## `/donate` — Donate and Membership

Entry: `src/pages/donate.astro`

Dependencies:

- `src/layouts/Layout.astro`
  - `src/styles/global.css`
  - `public/data/content.json`
- `src/components/Navbar.astro`
  - `public/data/content.json`
- `src/components/Icons.tsx`
- `public/data/content.json`
- External DAF Direct script and Fillout iframe

## `/concepts` — Exploratory concept gallery

Entry: `src/pages/concepts/index.astro`

Dependencies: none. Standalone HTML document with inline CSS.

## `/concepts/gathering-light`

Entry: `src/pages/concepts/gathering-light.astro`

Dependencies:

- `src/components/ConceptSchedule.tsx`
  - `public/data/content.json`
- `public/data/content.json`

## `/concepts/neighborhood-bulletin`

Entry: `src/pages/concepts/neighborhood-bulletin.astro`

Dependencies:

- `src/components/ConceptSchedule.tsx`
  - `public/data/content.json`

## `/concepts/sacred-rhythm`

Entry: `src/pages/concepts/sacred-rhythm.astro`

Dependencies:

- `src/components/ConceptSchedule.tsx`
  - `public/data/content.json`
