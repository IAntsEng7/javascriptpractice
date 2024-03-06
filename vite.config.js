import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint"; // ** add this for ESLint: auto format when save **

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({ cache: false }), // ** add this for ESLint: auto format when save **
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
