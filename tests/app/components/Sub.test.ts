import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import { ICON, Icon, Switch } from "@/base";

import Sub from "@/app/components/Sub.vue";

describe("Sub", () => {
  test("Mounted", () => {
    const wrapper = shallowMount(Sub);

    expect(wrapper.findComponent(Switch).props("modelValue")).toBe(true);
    const icons = wrapper.findAllComponents(Icon);
    expect(icons.length).toBe(2);
    const [closeIcon, copyIcon] = icons;
    expect(closeIcon.props("enabled")).toBe(true);
    expect(closeIcon.props("icon")).toBe(ICON.CLOSE);
    expect(copyIcon.props("enabled")).toBe(true);
    expect(copyIcon.props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });

  test.for<[string, boolean]>([
    ["ON -> OFF", false],
    ["OFF -> ON", true],
  ])("Switched %s", async ([, expected]) => {
    const wrapper = shallowMount(Sub);
    const testee = wrapper.findComponent(Switch);
    await testee.setValue(!expected);

    await testee.setValue(expected);

    expect(testee.props("modelValue")).toBe(expected);
    const icons = wrapper.findAllComponents(Icon);
    expect(icons.length).toBe(2);
    const [closeIcon, copyIcon] = icons;
    expect(closeIcon.props("enabled")).toBe(true);
    expect(closeIcon.props("icon")).toBe(ICON.CLOSE);
    expect(copyIcon.props("enabled")).toBe(expected);
    expect(copyIcon.props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });
});
