import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "happy-dom",
      exclude: [...configDefaults.exclude, "e2e/*"],
      globals: true,
      root: fileURLToPath(new URL("./", import.meta.url)),
      server: {
        deps: {
          inline: ["vuetify"],
        },
      },
    },
  }),
);
