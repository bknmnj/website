# Theme and Design Tokens

## Part 1 — Compact token summary

### Stack

- Tailwind CSS v4 through `@tailwindcss/vite`; utilities are authored directly in Astro/React markup.
- No Tailwind config file and no component library.
- Global CSS imports Tailwind and sets only the base font families.

### Colors

| Role | Value | Usage |
| --- | --- | --- |
| Page canvas / nav / footer | `#F9F5F0` | Warm off-white site background |
| Primary accent | `#D4A373` | Campaign banner, buttons, links, section markers, icons |
| Stronger donation accent | `#CD8C4F` | Donate page primary button and icons |
| Stronger accent hover | `#B87B40` | Donate button hover |
| Accent tint | `#FDF4EA` | Circular icon backgrounds |
| Surface | `#FFFFFF` | Cards and content panels |
| Main body text | Tailwind default black / `gray-900` | Headings, labels, values |
| Secondary text | Tailwind `gray-600` | Addresses, descriptions, metadata |
| Subtle fill | Tailwind `gray-50` / `gray-100` | Zebra rows, nested schedule panels, map fallback |
| Borders | Tailwind `gray-100` / `gray-200` | Nested cards and pricing table |

### Typography

- Body: Arial with serif fallback (`"Arial", serif`), normal weight.
- `h1`, `h2`: Georgia with serif fallback (`"Georgia", serif`).
- Tailwind sizes used: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `md:text-3xl`.
- Headings primarily bold or semibold; body copy uses regular weight and `gray-600`.
- No custom letter spacing or imported webfonts.

### Spacing and layout

- Tailwind default spacing scale; common values: 4, 6, 8, 12, and 16 units.
- Main homepage uses `container mx-auto p-4` and a one-column-to-two-column responsive grid at `md`.
- About/donate pages use `max-w-4xl mx-auto px-4`.
- Content cards use `p-6` or `p-8`.
- Vertical section separation is typically `mb-12` or `mb-16`.

### Shape, border, elevation

- Default cards: `rounded-lg` (Tailwind default 0.5rem).
- Buttons: `rounded` or `rounded-md`; no pill buttons.
- Icons sit in `rounded-full` circles.
- Primary cards use Tailwind `shadow` or `shadow-sm`.
- Borders are one pixel and light gray.

### Responsive behavior

- Tailwind default breakpoints; meaningful breakpoint is `md` (768px).
- Navigation links collapse to a hamburger below `md`.
- Homepage schedule changes from one column to two at `md`.
- Contact card changes from one column to two at `md`.
- Footer stacks vertically below `md`.
- Text rows use `text-xs sm:text-sm` to protect long zmanim labels.

## Part 2 — Raw source dumps

### `src/styles/global.css`

```css
@import "tailwindcss";

body {
  font-family: "Arial", serif;
}

h1,
h2 {
  font-family: "Georgia", serif;
}
```

### `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mcp from "astro-mcp";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ["astro.app.local"] },
  },
  integrations: [react(), mcp()],
});
```

### Theme-bearing shell fragment from `src/layouts/Layout.astro`

```astro
<body class="bg-[#F9F5F0]">
  <div id="zeffy-banner" class="bg-[#D4A373] text-white text-center py-2 px-4">
    <p class="text-sm font-medium">Support our New Building Campaign - <a class="underline hover:no-underline">Donate Now</a></p>
  </div>
  <header><slot name="header" /></header>
  <main><slot /></main>
  <footer><slot name="footer" /></footer>
</body>
```
