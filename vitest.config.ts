import { configDefaults, defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
      "~": `${__dirname}/tests`,
    },
  },
  test: {
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "e2e/*"],
    globals: true,
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  },
});
