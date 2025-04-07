import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import { test } from "vitest";
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseIcon from "@/app/components/BaseIcon.vue";

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
        stubs: {
          BaseIcon: true,
        },
      },
    });
    await use(wrapper);
  },
});

customTest("Mounted", ({ expect, wrapper }) => {
  const button = wrapper.findComponent(VBtn);
  expect(button.classes()).toContain("dummyTheme");
  expect(button.props("disabled")).toBe(false);
  expect(button.props("height")).toBe(32);
  expect(button.props("ripple")).toBe(false);
  expect(button.props("rounded")).toBe("xs");
  expect(button.props("variant")).toBe("flat");
  expect(button.text()).toBe("dummyText");
  const icons = wrapper.findAllComponents(BaseIcon);
  expect(icons.length).toBe(0);
});

customTest.for<[string, { appendIcon: string } | { prependIcon: string }]>([
  ["appendIcon", { appendIcon: "dummyIcon" }],
  ["prependIcon", { prependIcon: "dummyIcon" }],
])("setProps(%s)", async ([, props], { expect, wrapper }) => {
  await wrapper.setProps(props);

  expect(wrapper.findComponent(VBtn).text()).toBe("dummyText");
  const icon = wrapper.findComponent(BaseIcon);
  expect(icon.props("embedded")).toBe(true);
  expect(icon.props("icon")).toBe("dummyIcon");
});

customTest("setProps(enabled)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ enabled: false });

  const button = wrapper.findComponent(VBtn);
  expect(button.props("disabled")).toBe(true);

  await wrapper.setProps({ enabled: true });

  expect(button.props("disabled")).toBe(false);
});

customTest("setProps(icon)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ icon: "dummyIcon" });

  expect(wrapper.findComponent(VBtn).text()).toBe("");
  const icon = wrapper.findComponent(BaseIcon);
  expect(icon.props("embedded")).toBe(true);
  expect(icon.props("icon")).toBe("dummyIcon");
});

customTest("setProps(rounded)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ rounded: "xl" });

  expect(wrapper.findComponent(VBtn).props("rounded")).toBe("xl");
});

customTest("setProps(variant)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ variant: "text" });

  expect(wrapper.findComponent(VBtn).props("variant")).toBe("text");
});
