import * as components from "vuetify/components";
import "vuetify/styles";
import type { App } from "vue";
import { createVuetify } from "vuetify";

export const vuetify = {
  install(app: App) {
    app.use(createVuetify({ components }));
  },
};
