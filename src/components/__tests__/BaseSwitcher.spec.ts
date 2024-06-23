import { describe, expect, it } from "vitest";

import BaseSwitcher from "@/components/BaseSwitcher.vue";
import { shallowMountComponent } from "@/components/__tests__/testHelper";
import type { DefinedComponent } from "node_modules/@vue/test-utils/dist/types";

describe("onMounted", () => {
  it.each([true, false])("Shown switcher(%s)", (modelValue) => {
    const expected = modelValue;

    const testee = shallowMountComponent(BaseSwitcher, { modelValue });

    const vSwitch = testee.findComponent<DefinedComponent>("v-switch-stub");
    expect(vSwitch.props("modelValue")).toBe(expected);
    expect(vSwitch.props("color")).toBe("primary");
    expect(vSwitch.props("hideDetails")).toBe(true);
  });
});

describe("onUpdated", () => {
  it.each([true, false])("Switched(%s)", async (modelValue) => {
    const expected = !modelValue;
    const testee = shallowMountComponent(BaseSwitcher, { modelValue });
    const vSwitch = testee.findComponent<DefinedComponent>("v-switch-stub");

    await vSwitch.setValue(expected);

    expect(vSwitch.props("modelValue")).toBe(expected);
  });
});
