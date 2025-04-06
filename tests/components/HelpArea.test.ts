import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import HelpArea from "@/app/components/HelpArea.vue";
import { themeColor } from "@/app/constants/themeColor";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(HelpArea);

  const buttons = wrapper.findAllComponents(BaseButton);
  expect(buttons.length).toBe(2);
  const [cancel, ok] = buttons;
  if (cancel && ok) {
    expect(cancel.props("text")).toBe("Cancel");
    expect(cancel.props("themeColor")).toBe(themeColor.primary);
    expect(cancel.props("rounded")).toBe("xl");
    expect(ok.props("text")).toBe("OK");
    expect(ok.props("themeColor")).toBe(themeColor.primary);
    expect(ok.props("rounded")).toBe("xl");
  } else {
    expect.fail("Buttons not found");
  }
});
