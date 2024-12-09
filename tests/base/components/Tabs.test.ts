import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { defineComponent, shallowRef } from "vue";

import { COLOR, type Tab, Tabs } from "@/base";

const tabs: Tab[] = [
  {
    name: "Dummy1",
    component: defineComponent({ template: "<div>Dummy1 message</div>" }),
  },
  {
    name: "Dummy2",
    component: defineComponent({ template: "<div>Dummy2 message</div>" }),
  },
  {
    name: "Dummy3",
    component: defineComponent({ template: "<div>Dummy3 message</div>" }),
  },
];

test.each([
  ["Fixed", true],
  ["Variable", false],
])("%s length tabs mounted", async (_, isFixedLength) => {
  const wrapper = mount(Tabs, {
    props: {
      modelValue: tabs,
      isFixedLength,
      isShowAnimation: true,
    },
  });

  const vTabs = wrapper.find("v-tabs");
  expect(vTabs.attributes("bg-color")).toBe(COLOR.PRIMARY);
  expect(vTabs.attributes("grow")).toBe(isFixedLength.toString());
  const vTabInstances = wrapper.findAll("v-tab");
  expect(vTabInstances.length).toBe(tabs.length);
  vTabInstances.forEach((t, i) => {
    expect(t.classes("text-none")).toBe(true);
    expect(t.text()).toBe(tabs[i].name);
    expect(t.findComponent("v-icon").exists()).toBe(!isFixedLength);
  });
  const dynamicComponents = wrapper.findAll(".pt-3");
  expect(dynamicComponents.length).toBe(tabs.length);
  dynamicComponents.forEach((d, i) => {
    expect(d.text()).toBe(`Dummy${i + 1} message`);
  });
});
