import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

import App from "@/components/App.vue";

createApp(App)
  .provide("message", "Hello!")
  .use(createVuetify({ components, directives }))
  .mount("#app");
