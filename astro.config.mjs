// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"; // 1. Import library icon

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon(), // 2. Tambahkan ini di array integrations
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
