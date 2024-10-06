import { describe, expect, it } from "vitest";
import type { DefineComponent } from "vue";

import BaseSwitcher from "@/components/BaseSwitcher.vue";
import { shallowMountComponent } from "~/testHelper";

describe("onMounted", () => {
  it.each([true, false])("Shown switcher(%s)", modelValue => {
    const testee = shallowMountComponent(BaseSwitcher, { modelValue });

    const vSwitcher =
      testee.findComponent<DefineComponent<{ $props: { modelValue: number } }>>(
        "v-switch",
      );
    expect(vSwitcher.props("modelValue")).toBe(modelValue);
    expect(vSwitcher.attributes("color")).toBe("primary");
    expect(vSwitcher.attributes("hide-details")).toBe("");
  });
});
