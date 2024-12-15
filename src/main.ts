import "@mdi/font/css/materialdesignicons.css";
import "@/base/styles/spacing.css";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@/base/styles/spacing.css";

import App from "@/app/components/App.vue";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App).use(vuetify).mount("#app");
