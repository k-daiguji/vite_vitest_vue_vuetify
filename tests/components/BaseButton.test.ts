import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { test } from "vitest";
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

import BaseButton from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";

const vuetify = createVuetify({ components: { VBtn } });

const customTest = test.extend<{ wrapper: VueWrapper }>({
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  wrapper: async ({}, use) => {
    using wrapper = mount(BaseButton, {
      props: {},
      slots: { default: "dummyText" },
      global: {
        plugins: [vuetify],
      },
    });
    await use(wrapper);
  },
});

customTest("Mounted", ({ expect, wrapper }) => {
  const button = wrapper.findComponent(VBtn);
  const classes = button.classes();
  expect(classes).toContain("text-none");
  const props = button.props();
  expect(props.disabled).toBe(false);
  expect(props.ripple).toBe(false);
  expect(props.rounded).toBe("xl");
  expect(props.variant).toBe("flat");
  expect(button.text()).toBe("dummyText");
});

customTest("setProps(enabled)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ enabled: false });

  const button = wrapper.findComponent(VBtn);
  expect(button.props("disabled")).toBe(true);

  await wrapper.setProps({ enabled: true });

  expect(button.props("disabled")).toBe(false);
});

customTest("setProps(rounded)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ rounded: "0" });

  expect(wrapper.findComponent(VBtn).props("rounded")).toBe("0");
});

customTest("setProps(variant)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ variant: "text" });

  expect(wrapper.findComponent(VBtn).props("variant")).toBe("text");
});
