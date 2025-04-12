import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";
import { RouterView } from "vue-router";

import App from "@/app/views/App.vue";
import { router } from "@/app/plugins/router";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App, { global: { plugins: [router] } });

  expect(wrapper.findComponent(RouterView).props()).toStrictEqual({
    name: "default",
    route: undefined,
  });
});
