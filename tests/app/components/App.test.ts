import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import { ICON, Icon } from "@/base";

import App from "@/app/components/App.vue";

describe("App", () => {
  test("Mounted", () => {
    const wrapper = shallowMount(App);

    const icons = wrapper.findAllComponents(Icon);

    expect(icons).toHaveLength(3);
    expect(icons[0].props("enabled")).toBe(true);
    expect(icons[0].props("icon")).toBe(ICON.CLOSE);
    expect(icons[1].props("enabled")).toBe(true);
    expect(icons[1].props("icon")).toBe(ICON.COPY);
    expect(icons[2].props("enabled")).toBe(false);
    expect(icons[2].props("icon")).toBe(ICON.COPY);
    wrapper.unmount();
  });
});
