import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";
import HelpArea from "@/app/views/HelpArea.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(HelpArea);

  const [off, on] = wrapper.findAllComponents(BaseButton);
  if (!(off && on)) {
    throw new Error("Button not found");
  }
  expect(off.props("text")).toBe("OFF");
  expect(off.props("theme")).toBe(theme.primary);
  expect(off.props("rounded")).toBe("xl");
  expect(on.props("text")).toBe("ON");
  expect(on.props("theme")).toBe(theme.primary);
  expect(on.props("rounded")).toBe("xl");
});
