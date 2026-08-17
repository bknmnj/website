# Shared Layouts

## `src/layouts/Layout.astro` — Document shell

Shared HTML document, SEO metadata, campaign banner, and header/main/footer slots. Used by `/`, `/about`, and `/donate`.

```astro
---
import "../styles/global.css";
import content from "../../public/data/content.json";
const { title, description } = Astro.props;
const baseUrl = content.baseUrl;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#F9F5F0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <link rel="canonical" href={`${baseUrl}${Astro.url.pathname}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${baseUrl}${Astro.url.pathname}`} />
    <meta property="og:image" content={`${baseUrl}/web-app-manifest-512x512.png`} />
    <meta property="og:site_name" content={content.home.title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${baseUrl}/web-app-manifest-512x512.png`} />
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content={content.home.title} />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="sitemap" type="application/xml" href={`${baseUrl}/sitemap.xml`} />
  </head>
  <body class="bg-[#F9F5F0]">
    <div id="zeffy-banner" class="bg-[#D4A373] text-white text-center py-2 px-4">
      <p class="text-sm font-medium">Support our New Building Campaign - <a href="https://www.zeffy.com/en-US/peer-to-peer/new-building-campaign-2" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline">Donate Now</a></p>
    </div>
    <header><slot name="header" /></header>
    <main><slot /></main>
    <footer><slot name="footer" /></footer>
  </body>
</html>
```

## `src/components/Navbar.astro` — Primary navigation

Responsive top navigation. Desktop shows Home, About, and Donate. Mobile exposes the same items through a menu toggle.

```astro
---
import content from "../../public/data/content.json";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];
---

<nav class="bg-[#F9F5F0] p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="flex items-center space-x-2"><span class="text-[#D4A373] font-semibold">{content.home.title}</span></a>
    <div class="md:hidden">
      <button id="menu-toggle" class="text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>
    <ul id="menu" class="hidden md:flex space-x-4 items-center">
      {navItems.map((item) => <li><a href={item.href} class="text-gray-600 hover:text-gray-900">{item.name}</a></li>)}
      <li><a href="/donate" class="bg-[#D4A373] text-white px-4 py-2 rounded">Donate</a></li>
    </ul>
  </div>
</nav>

<script>
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
      menu.classList.toggle("flex-col");
      menu.classList.toggle("space-y-2");
      menu.classList.toggle("mt-2");
    });
  }
</script>
```

## `src/components/Footer.astro` — Site footer

Compact responsive footer used on the home page.

```astro
---
import content from "../../public/data/content.json";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#contact" },
  { name: "Donate", href: "/donate" },
];
---

<footer class="bg-[#F9F5F0] py-4">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div class="flex items-center space-x-2 mb-2 md:mb-0"><span class="text-[#D4A373] font-semibold">{content.home.title}</span></div>
    <ul class="flex space-x-4 mb-2 md:mb-0">{navItems.map((item) => <li><a href={item.href} class="text-gray-600 hover:text-gray-900">{item.name}</a></li>)}</ul>
    <p class="text-gray-600">{new Date().getFullYear()} {content.home.title}</p>
  </div>
</footer>
```
