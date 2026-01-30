// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // Pastikan output diset ke static jika Anda ingin deploy di EdgeOne Pages biasa
  output: "static",

  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
    // Tambahkan ssr noexternal untuk mengatasi masalah inisialisasi modul
    ssr: {
      noExternal: ["astro"],
    },
  },

  image: {
    // Gunakan 'squoosh' sebagai alternatif jika 'sharp' bermasalah di lingkungan build
    service: {
      entrypoint: "astro/assets/services/squoosh",
    },
  },
});
