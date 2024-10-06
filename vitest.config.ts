import { configDefaults, defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes("v-"),
        },
      },
    }),
  ],
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
