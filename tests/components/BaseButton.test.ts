import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Button from "@/app/components/BaseButton.vue";

const slots = { default: "dummyText" };

test("Mounted", ({ expect }) => {
  using wrapper = mount(Button, { slots });

  const testee = wrapper.find("button");
  expect(testee.attributes("disabled")).toBeUndefined();
  expect(testee.classes()).toStrictEqual(["button", "rounded-full"]);
  expect(testee.text()).toBe(slots.default);
});

describe("Changed props", () => {
  test("enabled", async ({ expect }) => {
    using wrapper = mount(Button, { slots });

    await wrapper.setProps({ enabled: false });

    const testee = wrapper.find("button");
    expect(testee.attributes("disabled")).toBeDefined();

    await wrapper.setProps({ enabled: true });

    expect(testee.attributes("disabled")).toBeUndefined();
  });

  test("rounded", async ({ expect }) => {
    using wrapper = mount(Button, { slots });

    await wrapper.setProps({ rounded: "0" });

    const testee = wrapper.find("button");
    expect(testee.classes("rounded-full")).toBe(false);
  });
});

test("When the button is pressed, an event is triggered.", async ({
  expect,
}) => {
  using wrapper = mount(Button, { slots });

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted("click")).toStrictEqual([[]]);
});
