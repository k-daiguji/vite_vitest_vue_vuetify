import { mount } from "@vue/test-utils";
import type { DefineComponent } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

export const mountComponent = (
  component: DefineComponent<Record<string, unknown>, {}, unknown>,
  props?: Record<string, unknown>,
) => {
  return mount(component, {
    global: {
      plugins: [vuetify],
    },
    props,
  });
};
