import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import { ICON, Icon, Switch } from "@/base";

import App from "@/app/components/App.vue";

describe("App", () => {
  test("Mounted", () => {
    const wrapper = shallowMount(App);

    const icons = wrapper.findAllComponents(Icon);
    expect(icons).toHaveLength(2);
    expect(icons[0].props("enabled")).toBe(true);
    expect(icons[0].props("icon")).toBe(ICON.CLOSE);
    expect(icons[1].props("enabled")).toBe(true);
    expect(icons[1].props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });

  test("Switched ON -> OFF", async () => {
    const enabled = false;
    const wrapper = shallowMount(App);

    await wrapper.findComponent(Switch).setValue(enabled);

    const icons = wrapper.findAllComponents(Icon);
    expect(icons).toHaveLength(2);
    expect(icons[0].props("enabled")).toBe(true);
    expect(icons[0].props("icon")).toBe(ICON.CLOSE);
    expect(icons[1].props("enabled")).toBe(enabled);
    expect(icons[1].props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });

  test("Switched OFF -> ON", async () => {
    const enabled = true;
    const wrapper = shallowMount(App);
    await wrapper.findComponent(Switch).setValue(!enabled);

    await wrapper.findComponent(Switch).setValue(enabled);

    const icons = wrapper.findAllComponents(Icon);
    expect(icons).toHaveLength(2);
    expect(icons[0].props("enabled")).toBe(true);
    expect(icons[0].props("icon")).toBe(ICON.CLOSE);
    expect(icons[1].props("enabled")).toBe(enabled);
    expect(icons[1].props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });
});
