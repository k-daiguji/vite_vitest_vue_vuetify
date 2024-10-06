import { describe, expect, it } from "vitest";
import { defineComponent, shallowReactive } from "vue";

import { mountComponent } from "~/testHelper";

import BaseTab from "@/components/BaseTab.vue";

const component1 = defineComponent({
  props: {},
  template: "<div>Dummy1 message</div>",
});
const component2 = defineComponent({
  props: {},
  template: "<div>Dummy2 message</div>",
});
const component3 = defineComponent({
  props: {},
  template: "<div>Dummy3 message</div>",
});
const tabs = shallowReactive([
  { name: "Dummy1", component: component1 },
  { name: "Dummy2", component: component2 },
  { name: "Dummy3", component: component3 },
]);
const wrapper = mountComponent(BaseTab, {
  modelValue: tabs,
  isFixedLength: true,
  showTabBodyAnimation: true,
});

describe("BaseTab.vue", () => {
  it("Fixed length tabs mounted", async () => {
    const isFixedLength = true;

    await wrapper.setProps({
      modelValue: tabs,
      isFixedLength,
      showTabBodyAnimation: true,
    });

    const vTabs = wrapper.find("v-tabs");
    expect(vTabs.attributes("bg-color")).toBe("primary");
    expect(vTabs.attributes("grow")).toBe(isFixedLength.toString());
    const vTabInstances = wrapper.findAll("v-tab");
    expect(vTabInstances.length).toBe(3);
    vTabInstances.forEach((t, i) => {
      expect(t.classes("text-capitalize")).toBe(true);
      expect(t.text()).toBe(tabs[i].name);
      expect(() => t.getComponent("v-icon")).toThrowError(
        "Unable to get component",
      );
    });
    const dynamicComponents = wrapper.findAll(".pt-5");
    expect(dynamicComponents.length).toBe(3);
    dynamicComponents.forEach((d, i) => {
      expect(d.text()).toBe(`Dummy${i + 1} message`);
    });
  });
  it("Variable length tabs mounted", async () => {
    const isFixedLength = false;

    await wrapper.setProps({
      modelValue: tabs,
      isFixedLength,
      showTabBodyAnimation: true,
    });

    const vTabs = wrapper.find("v-tabs");
    expect(vTabs.attributes("bg-color")).toBe("primary");
    expect(vTabs.attributes("grow")).toBe(isFixedLength.toString());
    const vTabInstances = wrapper.findAll("v-tab");
    expect(vTabInstances.length).toBe(3);
    vTabInstances.forEach((t, i) => {
      expect(t.classes("text-capitalize")).toBe(true);
      expect(t.text()).toBe(tabs[i].name);
      const vIcon = t.find("v-icon");
      expect(vIcon.attributes("icon")).toBe("mdi-close");
    });
    const dynamicComponents = wrapper.findAll(".pt-5");
    expect(dynamicComponents.length).toBe(3);
    dynamicComponents.forEach((d, i) => {
      expect(d.text()).toBe(`Dummy${i + 1} message`);
    });
  });
});
