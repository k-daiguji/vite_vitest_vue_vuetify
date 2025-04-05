import { test } from "vitest";
import { shallowMount } from "@vue/test-utils";

import App from "@/app/components/App.vue";
import HelpArea from "@/app/components/HelpArea.vue";

test("Mounted", ({ expect }) => {
  using app = shallowMount(App);

  expect(app.findComponent(HelpArea).props()).toStrictEqual({});
});
