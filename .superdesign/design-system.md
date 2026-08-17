# Beis Knesses of New Milford — Product and Design System

## Product context

Beis Knesses of New Milford (BKNM) is a growing Orthodox Jewish congregation in New Milford, New Jersey, led by Rav Yosef Weinberger. The site is a small communal front door: it helps members and visitors find daily zmanim, understand the upcoming Shabbat schedule, learn about the kehillah and its leadership, make contact, donate, and support the campaign for a permanent building.

### Mission and tone

The congregation aims to create a vibrant, growth-oriented kehillah and makom Torah/tefillah with broad appeal. Programming should feel organic, experiential, passionate, warm, friendly, and welcoming. The interface should communicate:

- Belonging before institutional formality.
- Reverence without stiffness.
- Torah learning and tefillah as living, practical rhythms.
- A young, growing community with an optimistic future.
- Trust, clarity, and accessibility for regular attendees and first-time visitors.

Avoid generic corporate nonprofit language, stock-temple clichés, ornamental excess, or aesthetics that feel like a luxury hotel. Jewish visual cues should be restrained and meaningful rather than decorative pastiche.

## Information architecture and key jobs

### `/` — Homepage

Primary jobs:

1. Immediately identify the congregation and location.
2. Make today’s zmanim easy to scan accurately.
3. Make the upcoming Shabbat schedule easy to plan around.
4. Provide low-friction contact information.
5. Surface the building campaign without obscuring the practical schedule content.

Current content order: building-campaign banner → navigation → compact identity hero → daily zmanim and Shabbat schedule → contact/map → footer.

### `/about`

Explains the mission through Community, Learning, and Connection; introduces Rav Yosef Weinberger; and provides contact details.

### `/donate`

Provides a direct donation CTA, donor-advised-fund option, operating/building membership explanation and pricing, and membership application form.

## Existing visual baseline

The production site currently uses a quiet warm-neutral visual system:

- Canvas: warm off-white `#F9F5F0`.
- Primary accent: muted sand/gold `#D4A373`.
- Strong donation accent: `#CD8C4F`; hover `#B87B40`.
- Accent tint: `#FDF4EA`.
- Surfaces: white.
- Body text: near-black with secondary copy in Tailwind gray-600.
- Borders/fills: gray-50 through gray-200.
- Body font: Arial.
- Display headings: Georgia.
- Cards: white, `rounded-lg`, light `shadow`/`shadow-sm`, normally 24–32px padding.
- Buttons: compact rectangular controls with 4–6px corner radius.

This baseline must be reproduced faithfully in the initial Superdesign draft. Redesign branches may introduce a new design style, but each branch must remain grounded in the product mission and preserve the practical information architecture.

## Recommended redesign foundation

The redesign exploration should treat these as hard product constraints while allowing visual divergence:

### Content hierarchy

1. Congregation identity and welcome.
2. Daily/weekly prayer information as the primary utility.
3. Mission, leadership, and community story.
4. Building campaign and donation.
5. Contact and location.

Times must remain readable at a glance; they are not decorative data. Event labels and their corresponding times must have strong alignment and sufficient separation.

### Typography

- Use no more than two families in a direction: one expressive display face plus one highly legible sans serif, or a disciplined single-family system.
- Body copy minimum: 16px desktop and mobile.
- Schedule labels minimum: 14px; time values should use tabular numerals when available.
- Main page title should be the sole visual `h1`; section hierarchy should remain semantic.
- Avoid ultra-light weights and all-caps for long text.
- Existing baseline uses Georgia/Arial; branches may change typography only when the new pairing reinforces warmth, community, or sacred rhythm.

### Color

- Maintain at least WCAG AA contrast for text and interactive controls.
- Each direction should have one dominant background family, one primary brand color, one warm highlight, and restrained neutrals.
- Gold may signal warmth, light, Shabbat, or the building campaign, but must not be the sole indicator of state.
- Avoid arbitrary neon palettes, purple SaaS gradients, or colors disconnected from the congregation’s tone.

### Spacing and grid

- Base spacing unit: 4px.
- Preferred rhythm: 8, 12, 16, 24, 32, 48, 64, 96px.
- Desktop content max-width: 1180–1280px.
- Schedule panels may use an asymmetric or two-column layout on desktop but must stack cleanly on mobile.
- Maintain visible breathing room around sacred/mission-led storytelling; use denser spacing only inside utility tables.

### Shape and elevation

- Use border radii consistently within a direction: either restrained 4–8px editorial geometry or purposeful 16–24px soft surfaces.
- Avoid indiscriminate pill-shaped containers.
- Shadows should establish hierarchy, not simulate generic dashboard cards. Flat bordered systems are acceptable.

### Components

#### Campaign banner

- Announces the new-building campaign with a clear donation link.
- Must remain dismissible only if a persistent alternate campaign entry point exists.
- Must not compete visually with the primary homepage identity.

#### Navigation

- Required items: Home, About, Donate; Contact or Times may be added when useful.
- Congregation name acts as the home link.
- Mobile control must have an accessible name, visible focus state, and accurate expanded state.

#### Hero

- Identifies BKNM, New Milford, and the welcoming/growth-oriented proposition.
- Keep one primary action and at most one secondary action.
- Decorative religious or architectural motifs must not obscure text.

#### Daily zmanim

- Display date and Hebcal source.
- Preserve all eleven current time labels in production implementation unless product owners later choose a compact default plus expansion.
- Keep labels and values in a predictable row pattern with tabular numeric values.
- Loading/error states must not cause destructive layout shifts.

#### Shabbat schedule

- Clearly separate Friday Evening and Shabbos Day.
- Display the current Friday/Saturday date range.
- Event names and times must remain paired on narrow screens without horizontal overflow.
- `TBD` is valid content and should not look like an error.

#### Contact card

- Make email a visible actionable link.
- Represent the map/location clearly; avoid implying a precise street address when only New Milford is supplied.

#### Donation and membership

- Direct donation is the primary action.
- Membership pricing requires visible row/column headers and a strongly legible total.
- Embedded third-party forms must have descriptive titles and usable mobile heights.

## Motion

- Respect `prefers-reduced-motion`.
- Use motion sparingly: 150–250ms state transitions, subtle link/button feedback, gentle reveal only when it improves orientation.
- Avoid continuous marquees unless they pause on hover/focus and disable under reduced motion.
- Never animate schedule values in a way that delays access to information.

## Responsive behavior

### Desktop (approximately 1024px and above)

- Full navigation visible.
- Homepage utility content can display in two columns.
- Mission/story content may use editorial asymmetry, provided reading order remains logical.

### Tablet (768–1023px)

- Reduce display type and outer margins before collapsing essential content.
- Schedule columns may remain paired when labels fit comfortably; otherwise stack.

### Mobile (below 768px)

- Single-column reading flow.
- Campaign banner copy must wrap without clipping.
- Navigation condenses to a labeled accessible menu.
- Hero actions stack or wrap with minimum 44px tap targets.
- Schedule rows should wrap labels naturally while keeping time values visible; no horizontal page scroll.
- Contact map appears after contact methods.

## Accessibility rules

- Semantic landmark structure: banner/header, navigation, one main, content sections, footer.
- One `h1`; headings descend without skipped structural levels.
- Interactive elements have visible keyboard focus and at least 44×44px practical targets.
- Mobile menu exposes `aria-expanded` and `aria-controls`.
- Color contrast meets WCAG AA; focus and state are never communicated by color alone.
- Decorative SVG/motifs are hidden from assistive technology; meaningful images have accurate alt text.
- External links disclose behavior where context is ambiguous.
- Embedded iframes have descriptive `title` attributes.
- Reduced-motion preference is honored.

## Content and data integrity

- Canonical content lives in `public/data/content.json`.
- Daily zmanim come from Hebcal using ZIP 07646.
- Do not invent a street address, phone number, service time, or event time.
- Preserve the existing spellings used by the congregation (for example, “Beis Knesses,” “Shabbos,” “Tefillah,” and “Kabolas Shabbos”) unless the owner requests editorial standardization.
- Use Rav Yosef Weinberger’s real name and supplied biography; use a placeholder block rather than fabricating a portrait when the image cannot be transferred to canvas.

## Implementation guardrails after approval

- Continue using Astro, React islands, Tailwind CSS v4, and existing content data unless a change is separately approved.
- Reuse or refactor existing components instead of duplicating production schedule logic.
- Preserve SEO metadata, sitemap behavior, favicons, donation integrations, and external form functionality.
- Validate desktop and mobile layouts, keyboard navigation, overflow, loading/error states, and console errors before handoff.

## Faith-centered redesign systems

The current beige/gold production identity is ground truth only for the faithful baseline. Redesigns must feel unmistakably like the digital home of an Orthodox synagogue and community nonprofit—not a lifestyle brand, nightclub, arts poster, SaaS product, or vague spirituality site. The visual language must support tefillah, Torah, sacred time, belonging, communal responsibility, and trustworthy giving. Jewish cues should be meaningful and integrated into composition rather than pasted-on symbols.

Each branch must choose exactly one of the following mutually exclusive systems and apply it consistently. Do not blend them.

### System A — Contemporary Sanctuary

- Character: reverent, composed, luminous, architectural, learned, welcoming; formal enough for a house of worship but never cold or elite.
- Palette: deep ink navy `#10263B`, sanctuary ivory `#F7F2E8`, warm parchment `#E8DDC8`, muted brass `#B48A45`, wine `#713B42`, and charcoal `#20252A`.
- Typography: `Cormorant Garamond` for sacred/editorial display and `Source Sans 3` for clear utility text and tabular schedule values. Use Hebrew sparingly and only as an accurate secondary devotional accent; never fabricate Hebrew copy.
- Visual grammar: tall arch and doorway geometry inspired by the sanctuary and aron; thin brass rules recalling a siddur page; quiet light gradients; framed margins; strong vertical rhythm; restrained ornament based on repeated lines and thresholds rather than Stars of David used as wallpaper.
- Layout: an architectural hero that feels like entering a sanctuary; a central welcome and congregation identity; schedules arranged as a dignified prayer-times register; building campaign expressed as creating a permanent makom Torah and tefillah; footer as a calm institutional seal.
- Nonprofit trust: clear donation and campaign purpose, plain-language stewardship copy, legible contact/location, and actions that feel invitational rather than commercial.
- Avoid: celestial/orbital motifs, black nightclub atmosphere, luxury-hotel styling, generic church imagery, oversized decorative religious symbols, floating SaaS cards, or an ordinary centered marketing hero.

### System B — Living Kehillah

- Character: human, generous, grounded, multigenerational, optimistic, neighborly, active; a living community organized around prayer, learning, chesed, and shared responsibility.
- Palette: olive `#44523C`, cream `#F6F0E3`, clay `#B76447`, wheat `#D7BE87`, sky `#8BA9B3`, and dark brown `#302B26`.
- Typography: `Fraunces` for warm, characterful headings and `Public Sans` for accessible body text, schedules, navigation, and nonprofit calls to action.
- Visual grammar: documentary community-photo placeholders with respectful captions; woven or paper-like section bands; simple line illustrations of books, a kiddush cup, hands, or a doorway only where semantically relevant; generous human-scale typography; subtle tactile borders; no loud poster effects.
- Layout: a story-led homepage opening with welcome and belonging, followed immediately by a clearly surfaced “Today at BKNM” prayer utility; mission shown through Prayer, Learning, and Community; Shabbat presented as a communal invitation; building campaign and donation framed as shared participation in the kehillah’s future.
- Nonprofit trust: tangible mission language, visible leadership and contact, restrained impact/progress presentation without invented statistics, and a donation treatment that is warm and accountable rather than sales-driven.
- Avoid: corporate annual-report templates, generic charity stock tropes, loud primary colors, sticker labels, hard offset shadows, edgy editorial disruption, celestial abstraction, or replacing practical schedule content with storytelling.

### Exploration rules

- Redesign the campaign banner, navigation, hero, content sections, donation entry point, contact area, and footer inline for the chosen system. Do not reuse the previously extracted beige/gold canvas components or either rejected branch’s visual language.
- The above-the-fold area must explicitly identify Beis Knesses of New Milford as a synagogue/kehillah in New Milford and communicate worship, Torah, and community through both words and composition.
- Preserve real congregation content, all eleven zmanim rows, Shabbat event pairings, contact details, building campaign, and functional destinations. Do not invent service times, addresses, impact statistics, fundraising totals, Hebrew phrases, or denominational claims.
- Daily zmanim and the Shabbat schedule remain primary utilities, not decorative content. Donation is important but must not dominate worship and welcome.
- Each branch must be recognizable as a faith-centered nonprofit from a cropped hero screenshot even before reading the schedule.
- Structural novelty is required: changing only color, typography, radius, or card arrangement is insufficient.
