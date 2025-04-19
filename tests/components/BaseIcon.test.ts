import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Icon from "@/app/components/BaseIcon.vue";
import { theme } from "@/app/constants/color";
import { icon } from "@/app/constants/icon";

const props = { icon: icon.settings, theme: theme.primary };
const baseClasses = ["default-height", "icon", ...icon.settings.split(" ")];

test("Mounted", ({ expect }) => {
  using wrapper = mount(Icon, { props });

  expect(wrapper.find("span").classes()).toStrictEqual([
    ...baseClasses,
    "enabled",
  ]);
  expect(wrapper.text()).toBe("");
});

describe("Changed props", () => {
  test("enabled", async ({ expect }) => {
    using wrapper = mount(Icon, { props });

    await wrapper.setProps({ enabled: false });

    expect(wrapper.find("span").classes()).toStrictEqual(baseClasses);

    await wrapper.setProps({ enabled: true });

    expect(wrapper.find("span").classes()).toStrictEqual([
      ...baseClasses,
      "enabled",
    ]);
  });
});
