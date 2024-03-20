import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import App from "@/components/App.vue";
import customTheme from "@/components/customTheme.json";

createApp(App)
  .use(
    createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: "customTheme",
        themes: { customTheme },
      },
    }),
  )
  .mount("#app");
