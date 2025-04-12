import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { test } from "vitest";
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

import BaseButton from "@/app/components/BaseButton.vue";

const vuetify = createVuetify({ components: { VBtn } });

const customTest = test.extend<{ wrapper: VueWrapper }>({
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  wrapper: async ({}, use) => {
    using wrapper = mount(BaseButton, {
      props: {
        text: "dummyText",
        theme: "dummyTheme",
      },
      global: {
        plugins: [vuetify],
      },
    });
    await use(wrapper);
  },
});

customTest("Mounted", ({ expect, wrapper }) => {
  const button = wrapper.findComponent(VBtn);
  expect(button.classes()).toContain("dummyTheme");
  expect(button.props("disabled")).toBe(false);
  expect(button.props("ripple")).toBe(false);
  expect(button.props("rounded")).toBe("0");
  expect(button.props("variant")).toBe("flat");
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
  await wrapper.setProps({ rounded: "xl" });

  expect(wrapper.findComponent(VBtn).props("rounded")).toBe("xl");
});

customTest("setProps(variant)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ variant: "text" });

  expect(wrapper.findComponent(VBtn).props("variant")).toBe("text");
});
