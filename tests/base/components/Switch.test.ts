import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import { COLOR, Switch } from "@/base";

describe("App", () => {
  test.each([true, false])("Mounted(enabled: %s)", enabled => {
    const wrapper = shallowMount(Switch, {
      props: { modelValue: true, enabled },
    });

    const vSwitch = wrapper.findComponent("v-switch");
    expect(vSwitch.attributes("color")).toBe(COLOR.PRIMARY);
    expect(vSwitch.attributes("disabled")).toBe(String(!enabled));
    expect(vSwitch.attributes("hide-details")).toBe("");
    wrapper.unmount();
  });

  test.each([true, false])("Updated props(enabled: %s)", async enabled => {
    const wrapper = shallowMount(Switch, {
      props: { modelValue: true, enabled: !enabled },
    });

    await wrapper.setProps({ modelValue: true, enabled });

    const vSwitch = wrapper.findComponent("v-switch");
    expect(vSwitch.attributes("color")).toBe(COLOR.PRIMARY);
    expect(vSwitch.attributes("disabled")).toBe(String(!enabled));
    expect(vSwitch.attributes("hide-details")).toBe("");
    wrapper.unmount();
  });
});
