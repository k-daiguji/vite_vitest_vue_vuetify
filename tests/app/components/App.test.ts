import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { shallowRef } from "vue";

import { Tabs } from "@/base";

import App from "@/app/components/App.vue";
import Sub from "@/app/components/Sub.vue";

describe("App", () => {
  test("Mounted", () => {
    const wrapper = shallowMount(App);

    const tabs = wrapper.findComponent(Tabs);
    expect(tabs.props("modelValue")).toStrictEqual([
      { name: "Aaa", component: Sub },
      { name: "bBb", component: Sub },
    ]);
    expect(tabs.props("isFixedLength")).toBe(true);
    expect(tabs.props("isShowAnimation")).toBe(true);
    wrapper.unmount();
  });
});
