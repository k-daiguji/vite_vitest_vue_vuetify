import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export const vuetify = createVuetify({
  components,
  icons: { defaultSet: "mdi" },
});
