import { mount } from "@vue/test-utils";
import { test } from "vitest";

import BaseButton from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";
import { dialogSize } from "@/app/constants/dialog";
import Settings from "@/app/views/AreaSettings.vue";
import { dialogStub } from "#/stubs/dialog";

test("Mounted", ({ expect }) => {
  using wrapper = mount(Settings, {
    global: {
      stubs: {
        "base-button": true,
        "base-dialog": dialogStub,
      },
    },
  });

  const language = wrapper.findComponent(BaseButton);
  expect(language.classes()).toStrictEqual([theme.primary]);
  expect(language.props("rounded")).toBe("0");
  const dialog = wrapper.findComponent(dialogStub);
  expect(dialog.classes()).toStrictEqual([]);
  const dialogProps = dialog.props();
  expect(dialogProps.modelValue).toBe(false);
  expect(dialogProps.width).toBe(dialogSize.middle);
  expect(dialog.findComponent(BaseButton).classes()).toStrictEqual([
    theme.primary,
  ]);
});
