import { describe, expect, it } from "vitest";
import type { DefineComponent } from "vue";

import { mountComponent } from "~/testHelper.ts";

import App from "@/components/App.vue";
import BaseTab from "@/components/BaseTab.vue";

describe("App.vue", () => {
  it("App mounted(Fixed length tabs)", () => {
    const isFixedLength = true;
    const showTabBodyAnimation = true;

    const wrapper = mountComponent(App);

    const [baseTab1] =
      wrapper.findAllComponents<
        DefineComponent<{
          isFixedLength: boolean;
          showTabBodyAnimation: boolean;
        }>
      >(BaseTab);
    const baseTab1Instance = baseTab1.vm;
    expect(baseTab1Instance.$props.isFixedLength).toBe(isFixedLength);
    expect(baseTab1Instance.$props.showTabBodyAnimation).toBe(
      showTabBodyAnimation,
    );
  });
  it("App mounted(Variable length tabs)", () => {
    const isFixedLength = false;
    const showTabBodyAnimation = "none";

    const wrapper = mountComponent(App);

    const [, baseTab2] =
      wrapper.findAllComponents<
        DefineComponent<{
          isFixedLength: boolean;
          showTabBodyAnimation: boolean;
        }>
      >(BaseTab);
    const baseTab2Instance = baseTab2.vm;
    expect(baseTab2Instance.$props.isFixedLength).toBe(isFixedLength);
    expect(baseTab2Instance.$props.showTabBodyAnimation).toBe(
      showTabBodyAnimation,
    );
  });
});
