// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"; // 1. Import library icon

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://website-kurma.edgeone.dev",
  integrations: [// 2. Tambahkan ini di array integrations
  icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});