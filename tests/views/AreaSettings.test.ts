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

  const languageProps = wrapper.findComponent(BaseButton).props();
  expect(languageProps.text).toBe("Language");
  expect(languageProps.theme).toBe(theme.primary);
  const dialog = wrapper.findComponent(dialogStub);
  expect(dialog.classes()).toStrictEqual([]);
  const dialogProps = dialog.props();
  expect(dialogProps.modelValue).toBe(false);
  expect(dialogProps.theme).toBe(theme.primary);
  expect(dialogProps.width).toBe(dialogSize.middle);
  const closeProps = dialog.findComponent(BaseButton).props();
  expect(closeProps.rounded).toBe("xl");
  expect(closeProps.text).toBe("Close");
  expect(closeProps.theme).toBe(theme.primary);
});
