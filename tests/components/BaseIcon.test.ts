import type { VueWrapper } from "@vue/test-utils";
import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseIcon from "@/app/components/BaseIcon.vue";
import { icon } from "@/app/constants";

const customTest = test.extend<{ wrapper: VueWrapper }>({
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  wrapper: async ({}, use) => {
    using wrapper = shallowMount(BaseIcon, {
      props: {
        icon: icon.settings,
      },
    });
    await use(wrapper);
  },
});

customTest("Mounted", ({ expect, wrapper }) => {
  expect(wrapper.find("span").classes()).toStrictEqual([
    "icon",
    "material-icons",
    "enabled",
  ]);
  expect(wrapper.text()).toBe(icon.settings);
});

customTest("setProps(enabled)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ enabled: false });

  expect(wrapper.find("span").classes()).toStrictEqual([
    "icon",
    "material-icons",
  ]);

  await wrapper.setProps({ enabled: true });

  expect(wrapper.find("span").classes()).toStrictEqual([
    "icon",
    "material-icons",
    "enabled",
  ]);
});

customTest("setProps(embedded)", async ({ expect, wrapper }) => {
  await wrapper.setProps({ embedded: true });

  expect(wrapper.find("span").classes()).toStrictEqual([
    "icon",
    "material-icons",
    "enabled",
    "embedded",
  ]);

  await wrapper.setProps({ embedded: false });

  expect(wrapper.find("span").classes()).toStrictEqual([
    "icon",
    "material-icons",
    "enabled",
  ]);
});
