import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import mcp from "astro-mcp";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["astro.app.local"],
    },
  },
  integrations: [react(), mcp()],
});
