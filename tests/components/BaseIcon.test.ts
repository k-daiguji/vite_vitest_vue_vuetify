import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseIcon from "@/app/components/BaseIcon.vue";
import { theme } from "@/app/constants/color";
import { icon } from "@/app/constants/icon";

const customTest = test.extend<{ wrapper: VueWrapper }>({
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  wrapper: async ({}, use) => {
    using wrapper = shallowMount(BaseIcon, {
      props: {
        icon: icon.settings,
        theme: theme.primary,
      },
    });
    await use(wrapper);
  },
});

const baseClasses = ["icon", ...icon.settings.split(" "), theme.primary];

customTest("Mounted", ({ expect, wrapper }) => {
  expect(wrapper.find("span").classes()).toStrictEqual([
    ...baseClasses,
    "enabled",
  ]);
  expect(wrapper.text()).toBe("");
});

customTest("setProps(enabled)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ enabled: false });

  expect(wrapper.find("span").classes()).toStrictEqual(baseClasses);

  await wrapper.setProps({ enabled: true });

  expect(wrapper.find("span").classes()).toStrictEqual([
    ...baseClasses,
    "enabled",
  ]);
});
