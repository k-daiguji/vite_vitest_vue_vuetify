import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import { themeColor } from "@/app/constants/themeColor";
import HelpArea from "@/app/views/HelpArea.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(HelpArea);

  const buttons = wrapper.findAllComponents(BaseButton);
  expect(buttons.length).toBe(2);
  const [off, on] = buttons;
  if (off && on) {
    expect(off.props("text")).toBe("OFF");
    expect(off.props("themeColor")).toBe(themeColor.primary);
    expect(off.props("rounded")).toBe("xl");
    expect(on.props("text")).toBe("ON");
    expect(on.props("themeColor")).toBe(themeColor.primary);
    expect(on.props("rounded")).toBe("xl");
  } else {
    expect.fail("Buttons not found");
  }
});
