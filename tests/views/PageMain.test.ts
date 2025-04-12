import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import PageMain from "@/app/views/PageMain.vue";
import Settings from "@/app/views/AreaSettings.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(PageMain);

  expect(wrapper.findComponent(Settings).props()).toStrictEqual({});
});
