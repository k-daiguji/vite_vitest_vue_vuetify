import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { defineConfig } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
