import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/app/components/App.vue";
import HelpArea from "@/app/components/HelpArea.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App);

  expect(wrapper.findComponent(HelpArea).props()).toStrictEqual({});
});
