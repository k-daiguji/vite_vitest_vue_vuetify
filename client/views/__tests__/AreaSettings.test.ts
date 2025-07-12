import { mount } from "@vue/test-utils";
import { test } from "vitest";

import Settings from "@/client/views/AreaSettings.vue";
import Button from "@/utilities/components/BaseButton.vue";
import { theme } from "@/utilities/constants/color";
import { dialogSize } from "@/utilities/constants/dialog";
import { dialogStub } from "@/utilities/stubs/dialog";

test("Mounted", ({ expect }) => {
  using wrapper = mount(Settings, {
    global: {
      stubs: {
        "base-dialog": dialogStub,
      },
    },
  });

  const language = wrapper.findComponent(Button);
  expect(language.classes()).toContain(theme.primary);
  expect(language.props("rounded")).toBe("0");
  const dialog = wrapper.findComponent(dialogStub);
  expect(dialog.classes()).toStrictEqual([]);
  const dialogProps = dialog.props();
  expect(dialogProps.modelValue).toBe(false);
  expect(dialogProps.width).toBe(dialogSize.middle);
  expect(dialog.findComponent(Button).classes()).toContain(theme.primary);
});
