import { describe, expect, it } from "vitest";
import { VBtn, VIcon } from "vuetify/components";

import App from "@/components/App.vue";
import { mountComponent } from "@/components/__tests__/testHelper";

describe("App.vue", () => {
  it("App mounted", () => {
    const text = "Detect";

    const wrapper = mountComponent(App);

    const vBtn = wrapper.findComponent(VBtn);
    expect(vBtn.text()).toBe(text);
    expect(vBtn.classes("text-capitalize")).toBe(true);
    expect(vBtn.classes("text-primary")).toBe(true);
    const vIcon = wrapper.findComponent(VIcon);
    expect(vIcon.classes("mdi-close")).toBe(true);
  });
});
