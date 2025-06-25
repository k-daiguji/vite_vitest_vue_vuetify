import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Button from "@/app/components/BaseButton.vue";

test("Mounted", ({ expect }) => {
  const text = "dummyText";

  using wrapper = mount(Button, { props: { text } });

  const testee = wrapper.find("button");
  expect(testee.attributes("disabled")).toBeUndefined();
  expect(testee.classes()).toStrictEqual(["button", "rounded-full"]);
  expect(testee.text()).toBe(text);
});

describe("Changed props", () => {
  test("enabled", async ({ expect }) => {
    const text = "dummyText";
    using wrapper = mount(Button, { props: { text } });
    const testee = wrapper.find("button");

    await wrapper.setProps({ enabled: false });

    expect(testee.attributes("disabled")).toBeDefined();

    await wrapper.setProps({ enabled: true });

    expect(testee.attributes("disabled")).toBeUndefined();
  });

  test("rounded", async ({ expect }) => {
    using wrapper = mount(Button, { props: { text: "dummyText" } });
    const testee = wrapper.find("button");

    await wrapper.setProps({ rounded: "0" });

    expect(testee.classes("rounded-full")).toBe(false);
  });
});

test("When the button is pressed, an event is triggered.", async ({
  expect,
}) => {
  using wrapper = mount(Button, { props: { text: "dummyText" } });

  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted("click")).toStrictEqual([[]]);
});
