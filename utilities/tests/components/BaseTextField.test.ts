import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Testee from "@/utilities/src/components/BaseTextField.vue";
import type { Validator } from "@/utilities/src/types/validator";

describe("Input field", (): void => {
  test("Mounted", ({ expect }): void => {
    const input = "Dummy text";
    const props = {
      modelValue: input,
      placeholder: "Dummy placeholder",
    };

    using wrapper = mount(Testee, { props });

    expect(wrapper.find("input").element.value).toBe(input);
  });

  test("Inputted value", async ({ expect }): Promise<void> => {
    const props = {
      modelValue: "",
      placeholder: "Dummy placeholder",
    };
    using wrapper = mount(Testee, { props });
    const testee = wrapper.find("input");
    const expected = "Dummy text";

    await testee.setValue(expected);

    expect(testee.element.value).toBe(expected);
  });
});

test("Placeholder text", ({ expect }): void => {
  const placeholder = "Dummy placeholder";
  const props = {
    modelValue: "",
    placeholder,
  };

  using wrapper = mount(Testee, { props });

  expect(wrapper.find(".placeholder").text()).toBe(placeholder);
});

describe("Input validation field", (): void => {
  const emptyValidator: Validator = {
    validate: value => {
      if (value.length > 0) {
        return true;
      }
      throw new Error("Input cannot be empty.");
    },
  };
  const maxLengthValidator: Validator = {
    validate: value => {
      if (value.length < 10) {
        return true;
      }
      throw new Error("Input exceeds maximum length of 9 characters.");
    },
  };

  test("Undisplayed", ({ expect }): void => {
    const props = {
      modelValue: "",
      placeholder: "Dummy placeholder",
      validators: [],
    };

    using wrapper = mount(Testee, { props });

    expect(wrapper.find(".error").exists()).toBe(false);
  });

  test.for([
    ["Input cannot be empty.", ""],
    ["Input exceeds maximum length of 9 characters.", "1234567890"],
  ])("Error: %s", async ([expected, input], { expect }): Promise<void> => {
    const props = {
      modelValue: "Dummy text",
      placeholder: "Dummy placeholder",
      validators: [emptyValidator, maxLengthValidator],
    };
    using wrapper = mount(Testee, { props });
    const testee = wrapper.find("input");

    await testee.setValue(input);

    expect(wrapper.find(".error").text()).toBe(expected);
  });
});
