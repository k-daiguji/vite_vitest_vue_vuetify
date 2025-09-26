import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/client/src/views/App.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App);

  expect(wrapper.text()).toBe("App");
});
