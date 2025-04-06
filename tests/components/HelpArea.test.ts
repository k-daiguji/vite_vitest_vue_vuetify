import { mount } from "@vue/test-utils";
import { test } from "vitest";
import { defineComponent } from "vue";

import HelpArea from "@/app/components/HelpArea.vue";
import { themeColor } from "@/app/constants/themeColor";

const dummyButton = defineComponent({
  props: {
    themeColor: {
      required: true,
      type: String,
    },
    enabled: {
      default: true,
      type: Boolean,
    },
    rounded: {
      default: "xs",
      type: String,
    },
    variant: {
      default: "text",
      type: String,
    },
  },
  template: "<div><slot/></div>",
});
const dummyIcon = defineComponent({
  props: {
    icon: {
      required: true,
      type: String,
    },
    enabled: {
      default: true,
      type: Boolean,
    },
    embedded: {
      default: false,
      type: Boolean,
    },
  },
  template: "<div><slot/></div>",
});

test("Mounted", ({ expect }) => {
  using wrapper = mount(HelpArea, {
    global: {
      stubs: {
        Button: dummyButton,
        Icon: dummyIcon,
      },
    },
  });

  const buttons = wrapper.findAllComponents(dummyButton);
  expect(buttons.length).toBe(2);
  const [a, b] = buttons;
  if (a && b) {
    expect(a.props("themeColor")).toBe(themeColor.primary);
    expect(a.props("rounded")).toBe("xl");
    expect(a.text()).toBe("Home");
    const aIcon = a.findComponent(dummyIcon);
    expect(aIcon.props("embedded")).toBe(true);
    expect(aIcon.props("icon")).toBe("home");
    expect(b.props("themeColor")).toBe(themeColor.primary);
    expect(b.props("rounded")).toBe("xl");
    expect(b.text()).toBe("Home");
    const bIcon = b.findComponent(dummyIcon);
    expect(bIcon.props("embedded")).toBe(true);
    expect(bIcon.props("icon")).toBe("home");
  } else {
    expect.fail("Buttons not found");
  }
});
