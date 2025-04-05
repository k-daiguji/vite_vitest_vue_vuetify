import { test } from "vitest";
import { shallowMount } from "@vue/test-utils";

import BaseButton from "@/app/components/BaseButton.vue";
import HelpArea from "@/app/components/HelpArea.vue";
import { themeColor } from "@/app/constants/themeColor";

test("Mounted", ({ expect }) => {
  using helpArea = shallowMount(HelpArea);

  const [cancel, ok] = helpArea.findAllComponents(BaseButton);
  expect(cancel.props("text")).toBe("Cancel");
  expect(cancel.props("themeColor")).toBe(themeColor.primary);
  expect(cancel.props("rounded")).toBe("xl");
  expect(ok.props("text")).toBe("OK");
  expect(ok.props("themeColor")).toBe(themeColor.primary);
  expect(ok.props("rounded")).toBe("xl");
});
