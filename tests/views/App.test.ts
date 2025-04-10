import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/app/views/App.vue";
import HelpArea from "@/app/views/HelpArea.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App);

  expect(wrapper.findComponent(HelpArea).props()).toStrictEqual({});
});
