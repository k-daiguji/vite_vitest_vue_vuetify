import { shallowMount } from "@vue/test-utils";
import { test } from "vitest";

import App from "@/client/views/App.vue";
import Intra from "@/client/views/AreaIntra.vue";
import Settings from "@/client/views/AreaSettings.vue";

test("Mounted", ({ expect }) => {
  using wrapper = shallowMount(App);

  const intra = wrapper.findComponent(Intra);
  expect(intra.classes()).toStrictEqual([]);
  expect(intra.props()).toStrictEqual({});
  const settings = wrapper.findComponent(Settings);
  expect(settings.classes()).toStrictEqual(["pt-2"]);
  expect(settings.props()).toStrictEqual({});
});
