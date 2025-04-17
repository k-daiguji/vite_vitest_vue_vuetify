import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";
import Intra from "@/app/views/AreaIntra.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(Intra);

  const [off, on] = wrapper.findAllComponents(BaseButton);
  if (!(off && on)) {
    throw new Error("Button not found");
  }
  expect(off.classes()).toStrictEqual([theme.primary]);
  expect(on.classes()).toStrictEqual([theme.primary]);
});
