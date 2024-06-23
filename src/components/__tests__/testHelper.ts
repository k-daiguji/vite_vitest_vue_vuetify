import { mount, shallowMount } from "@vue/test-utils";
import type { DefinedComponent } from "node_modules/@vue/test-utils/dist/types";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

export const mountComponent = (
  component: DefinedComponent,
  props?: Record<string, unknown>,
) => {
  return mount(component, {
    global: {
      plugins: [vuetify],
    },
    props,
  });
};

export const shallowMountComponent = (
  component: DefinedComponent,
  props?: Record<string, unknown>,
) => {
  return shallowMount(component, {
    global: {
      plugins: [vuetify],
    },
    props,
  });
};
