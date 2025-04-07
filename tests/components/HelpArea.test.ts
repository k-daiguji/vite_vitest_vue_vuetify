import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import HelpArea from "@/app/components/HelpArea.vue";
import { icon, theme } from "@/app/constants";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(HelpArea);

  const button = wrapper.findComponent(BaseButton);
  expect(button.props("icon")).toBe(icon.settings);
  expect(button.props("text")).toBe("Settings");
  expect(button.props("theme")).toBe(theme.primary);
  expect(button.props("rounded")).toBe("xl");
});
