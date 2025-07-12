import { configDefaults, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(viteConfig, {
  test: {
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "e2e/*"],
    globals: true,
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
    setupFiles: ["type_extensions/unitTest.ts"],
  },
});
