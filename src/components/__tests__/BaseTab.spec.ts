import { describe, expect, it } from "vitest";
import { defineComponent, shallowReactive } from "vue";
import { VTabs } from "vuetify/components";

import BaseTab from "@/components/BaseTab.vue";
import { mountComponent } from "@/components/__tests__/testHelper";

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

    const vTabs = wrapper.getComponent(".v-tabs");
    expect(vTabs.classes("bg-primary")).toBe(true);
    expect(vTabs.classes("v-tabs--grow")).toBe(isFixedLength);
    const vTab = wrapper.getComponent(".v-tab");
    expect(vTab.classes("text-capitalize")).toBe(true);
    expect(vTab.text()).toBe(tabs[0].name);
    expect(() => wrapper.getComponent(".v-icon")).toThrowError(
      "Unable to get component",
    );
    const dynamicComponent = wrapper.getComponent(component1);
    expect(dynamicComponent.attributes("id")).toBe("tab-body");
    expect(dynamicComponent.text()).toBe("Dummy1 message");
  });
  it("Variable length tabs mounted", async () => {
    const isFixedLength = false;

    await wrapper.setProps({
      modelValue: tabs,
      isFixedLength,
      showTabBodyAnimation: true,
    });

    const vTabs = wrapper.getComponent(".v-tabs");
    expect(vTabs.classes("bg-primary")).toBe(true);
    expect(vTabs.classes("v-tabs--grow")).toBe(isFixedLength);
    const vTab = wrapper.getComponent(".v-tab");
    expect(vTab.classes("text-capitalize")).toBe(true);
    expect(vTab.text()).toBe(tabs[0].name);
    const vIcon = wrapper.getComponent(".v-icon");
    expect(vIcon.classes("mdi-close")).toBe(true);
    const dynamicComponent = wrapper.getComponent(component1);
    expect(dynamicComponent.attributes("id")).toBe("tab-body");
    expect(dynamicComponent.text()).toBe("Dummy1 message");
  });
  it.each([
    [0, 0, 0],
    [0, 1, 0],
    [0, 2, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 2, 1],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 1],
  ])(
    "Tab deleted(openTab: %s, deleteTab: %s, expectedTab: %s)",
    async (openTab, deleteTab, expectedTab) => {
      await wrapper.setProps({
        modelValue: tabs,
        isFixedLength: false,
        showTabBodyAnimation: true,
        "onUpdate:modelValue": (e: typeof tabs) => {
          wrapper.setProps({
            modelValue: shallowReactive(e),
            isFixedLength: false,
            showTabBodyAnimation: true,
          });
        },
      });
      const vTabInstance = wrapper.findComponent(VTabs).vm;
      vTabInstance.$emit("update:modelValue", openTab);
      const vIcons = wrapper.findAllComponents(".v-icon");

      await vIcons[deleteTab].trigger("click");

      expect(vTabInstance.$props.modelValue).toBe(expectedTab);
    },
  );
});
