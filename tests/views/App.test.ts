import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import Intra from "@/app/views/AreaIntra.vue";
import Settings from "@/app/views/AreaSettings.vue";
import App from "@/app/views/App.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App);

  const intra = wrapper.findComponent(Intra);
  expect(intra.classes()).toStrictEqual([]);
  expect(intra.props()).toStrictEqual({});
  const settings = wrapper.findComponent(Settings);
  expect(settings.classes()).toStrictEqual(["pt-2"]);
  expect(settings.props()).toStrictEqual({});
});
