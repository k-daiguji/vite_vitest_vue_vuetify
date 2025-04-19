import { mount } from "@vue/test-utils";
import { test } from "vitest";

import Button from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";
import Intra from "@/app/views/AreaIntra.vue";

test("Mounted", ({ expect }) => {
  using wrapper = mount(Intra);

  const [off, on] = wrapper.findAllComponents(Button);
  if (!(off && on)) {
    throw new Error("Button not found");
  }
  expect(off.classes()).toContain(theme.primary);
  expect(on.classes()).toContain(theme.primary);
});
