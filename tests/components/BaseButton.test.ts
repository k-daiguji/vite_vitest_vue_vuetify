import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components";

import BaseButton from "@/app/components/BaseButton.vue";
import { themeColor } from "@/app/constants/themeColor";

const vuetify = createVuetify({ components: { VBtn } });

const customTest = test.extend<{ wrapper: VueWrapper }>({
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  wrapper: async ({}, use) => {
    using wrapper = shallowMount(BaseButton, {
      props: {
        text: "TestButton",
        themeColor: "themeColor",
      },
      global: {
        plugins: [vuetify],
      },
    });
    await use(wrapper);
  },
});

customTest("Mounted", ({ expect, wrapper }) => {
  const vBtn = wrapper.findComponent(VBtn);
  expect(vBtn.classes()).toStrictEqual(["themeColor"]);
  expect(vBtn.props("disabled")).toBe(false);
  expect(vBtn.props("ripple")).toBe(false);
  expect(vBtn.props("rounded")).toBe("xs");
  expect(vBtn.props("variant")).toBe("flat");
  expect(vBtn.text()).toBe("flat");
});

customTest.for(Object.entries(themeColor))(
  "Button in %s theme color.",
  async ([, themeColor], { expect, wrapper }) => {
    await wrapper.setProps({ themeColor });

    const vBtn = wrapper.findComponent(VBtn);
    expect(vBtn.classes()).toStrictEqual([themeColor]);
    expect(vBtn.props("disabled")).toBe(false);
    expect(vBtn.props("ripple")).toBe(false);
    expect(vBtn.props("rounded")).toBe("xs");
    expect(vBtn.props("variant")).toBe("flat");
  },
);
