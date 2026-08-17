# Route Map

Routing is Astro file-based routing. There is no separate router configuration.

| URL | Entry file | Shared layout | Summary |
| --- | --- | --- | --- |
| `/` | `src/pages/index.astro` | `src/layouts/Layout.astro` + Navbar + Footer | Homepage: campaign banner, compact hero, live daily zmanim, weekly Shabbat schedule, and contact/map card. |
| `/about` | `src/pages/about.astro` | `src/layouts/Layout.astro` + Navbar | Mission, three values, Rav Yosef Weinberger profile, and contact/map card. |
| `/donate` | `src/pages/donate.astro` | `src/layouts/Layout.astro` + Navbar | Donation CTA, DAF Direct embed, membership pricing table, and Fillout form embed. |
| `/sitemap.xml` | `src/pages/sitemap.xml.ts` | none | XML sitemap API route for the three production pages. |
| `/concepts` | `src/pages/concepts/index.astro` | standalone document | Local design-study gallery created during the earlier exploratory pass; not linked from the production shell. |
| `/concepts/gathering-light` | `src/pages/concepts/gathering-light.astro` | standalone document | Uncommitted exploratory warm editorial concept. |
| `/concepts/neighborhood-bulletin` | `src/pages/concepts/neighborhood-bulletin.astro` | standalone document | Uncommitted exploratory bold neighborhood concept. |
| `/concepts/sacred-rhythm` | `src/pages/concepts/sacred-rhythm.astro` | standalone document | Uncommitted exploratory dark time-first concept. |

## Production route structure

```text
src/pages/index.astro      -> /
src/pages/about.astro      -> /about
src/pages/donate.astro     -> /donate
src/pages/sitemap.xml.ts   -> /sitemap.xml
```

The requested Superdesign target is the existing rendered production homepage at `/`. The exploratory `/concepts/*` routes are not ground truth for reproduction.
