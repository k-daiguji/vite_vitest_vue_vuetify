import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import HelpArea from "@/app/views/HelpArea.vue";
import PageMain from "@/app/views/PageMain.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(PageMain);

  expect(wrapper.findComponent(HelpArea).props()).toStrictEqual({});
});
