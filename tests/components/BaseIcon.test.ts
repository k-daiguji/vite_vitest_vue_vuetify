import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Icon from "@/app/components/BaseIcon.vue";
import { icon } from "@/app/constants/icon";

const baseClasses = ["icon", ...icon.settings.split(" ")];

test("Mounted", ({ expect }) => {
  using wrapper = mount(Icon, { props: { icon: icon.settings } });

  expect(wrapper.find("span").classes()).toStrictEqual([
    ...baseClasses,
    "enabled",
  ]);
  expect(wrapper.text()).toBe("");
});

describe("Changed props", () => {
  test("enabled", async ({ expect }) => {
    using wrapper = mount(Icon, { props: { icon: icon.settings } });
    const testee = wrapper.find("span");

    await wrapper.setProps({ enabled: false });

    expect(testee.classes()).toStrictEqual(baseClasses);

    await wrapper.setProps({ enabled: true });

    expect(testee.classes()).toStrictEqual([...baseClasses, "enabled"]);
  });
});
