# Extractable Superdesign Components

## Layout Components

### Navbar

- Source: `src/components/Navbar.astro`
- Category: layout
- Description: Main responsive navigation with the congregation name, Home/About links, a Donate CTA, and mobile menu.
- Extractable props: `activeItem` (string, default `home`), `homeHref` (string, default `#`), `aboutHref` (string, default `#`), `donateHref` (string, default `#`), `isExpanded` (boolean, default `false`)
- Hardcoded: congregation name, menu labels, hamburger SVG, colors, layout classes

### Footer

- Source: `src/components/Footer.astro`
- Category: layout
- Description: Compact site footer with congregation name, four links, and current-year copyright.
- Extractable props: `activeItem` (string, default `home`), `homeHref` (string, default `#`), `aboutHref` (string, default `#`), `contactHref` (string, default `#contact`), `donateHref` (string, default `#`)
- Hardcoded: congregation name, labels, typography, colors, current-year presentation

### CampaignBanner

- Source: `src/layouts/Layout.astro`
- Category: layout
- Description: Full-width gold announcement bar promoting the new building campaign.
- Extractable props: `donateHref` (string, default `#`), `showBanner` (boolean, default `true`)
- Hardcoded: campaign message, gold/white styling, link label

## Basic and Domain Components

### ContactUs

- Source: `src/components/ContactUs.tsx`
- Category: basic
- Description: Contact card combining address/email details with a New Milford map image.
- Extractable props: none under the Superdesign component spec; content strings and imagery remain hardcoded for faithful reproduction.
- Hardcoded: heading, supporting copy, address/email content, Lucide MapPin/Mail icons, map asset, card styling

### ZmanimCard

- Source: `src/components/Zmanim.tsx`
- Category: basic
- Description: Daily zmanim card with eleven time rows and Hebcal date/source metadata.
- Extractable props: none; daily data values can be represented as fixed realistic values in a design draft.
- Hardcoded: labels, section title, bullet marker, row styling

### ShabbatScheduleCard

- Source: `src/components/ShabbatSchedule.tsx`
- Category: basic
- Description: Weekly Friday evening and Shabbos day schedule card.
- Extractable props: none; schedule values should be fixed examples on the canvas.
- Hardcoded: section headings, event labels, styling and nested card structure

Extraction priority for the homepage design: `CampaignBanner`, `Navbar`, then `Footer`. Per the current Superdesign workflow, simple domain cards are better kept inline in the draft rather than extracted.
