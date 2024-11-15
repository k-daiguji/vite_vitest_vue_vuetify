import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import { COLOR, ICON, Icon } from "@/base";

describe("Icon", () => {
  const icon = ICON.COPY;

  test.each([true, false])("Mounted(enabled: %s)", enabled => {
    const wrapper = shallowMount(Icon, {
      props: { enabled, icon },
    });

    const vIcon = wrapper.findComponent("v-icon");

    expect(vIcon.attributes("color")).toBe(COLOR.PRIMARY);
    expect(vIcon.attributes("disabled")).toBe(String(!enabled));
    expect(vIcon.attributes("icon")).toBe(icon);
    wrapper.unmount();
  });

  test("Mounted(enabled: undefined = true)", () => {
    const wrapper = shallowMount(Icon, {
      props: { icon },
    });

    const vIcon = wrapper.findComponent("v-icon");

    expect(vIcon.attributes("color")).toBe(COLOR.PRIMARY);
    expect(vIcon.attributes("disabled")).toBe("false");
    expect(vIcon.attributes("icon")).toBe(icon);
    wrapper.unmount();
  });

  test("Clicked icon", async () => {
    const wrapper = shallowMount(Icon, {
      props: { icon },
    });

    await wrapper.findComponent("v-icon").trigger("click");

    expect(wrapper.emitted("clicked")).toStrictEqual([[]]);
    wrapper.unmount();
  });
});
