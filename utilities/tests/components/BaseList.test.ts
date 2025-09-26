import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Testee from "@/utilities/src/components/BaseList.vue";

const rows = [
  ["Item 1", "Item 2", "Item 3"],
  ["Item A", "Item B", "Item C"],
];
const props = {
  body: { activeIndex: -1, rows },
  maxDisplay: 3,
};

describe("Enabled / Disabled", () => {
  test("If the enable flag is not specified, the list is enabled.", ({
    expect,
  }) => {
    const [firstRow, secondRow] = rows;
    const expected = [
      { body: firstRow, classes: ["enabled"] },
      { body: secondRow, classes: ["enabled"] },
    ];

    using wrapper = mount(Testee, { props });

    const actual = wrapper.findAll(".lists > div").map(row => ({
      body: row.findAll("div").map(cell => cell.text()),
      classes: row.classes(),
    }));
    expect(actual).toStrictEqual(expected);
  });

  test("If the enable flag is false, the list is disabled.", ({ expect }) => {
    const [firstRow, secondRow] = rows;
    const expected = [
      { body: firstRow, classes: [] },
      { body: secondRow, classes: [] },
    ];

    using wrapper = mount(Testee, {
      props: { ...props, enabled: false },
    });

    const actual = wrapper.findAll(".lists > div").map(row => ({
      body: row.findAll("div").map(cell => cell.text()),
      classes: row.classes(),
    }));
    expect(actual).toStrictEqual(expected);
  });

  test("If the enable flag is true, the list is enabled.", ({ expect }) => {
    const [firstRow, secondRow] = rows;
    const expected = [
      { body: firstRow, classes: ["enabled"] },
      { body: secondRow, classes: ["enabled"] },
    ];

    using wrapper = mount(Testee, {
      props: { ...props, enabled: true },
    });

    const actual = wrapper.findAll(".lists > div").map(row => ({
      body: row.findAll("div").map(cell => cell.text()),
      classes: row.classes(),
    }));
    expect(actual).toStrictEqual(expected);
  });
});

describe("Selected", () => {
  test("If the first row is selected, apply the 'selected' class only to that row.", async ({
    expect,
  }) => {
    using wrapper = mount(Testee, { props });
    const rows = wrapper.findAll(".lists > div");
    const [firstRow] = rows;
    if (firstRow === undefined) {
      throw new Error("Rows not found");
    }

    await firstRow.trigger("click");

    expect(wrapper.emitted("selected")).toStrictEqual([[0]]);
  });

  test("If the second row is selected, apply the 'selected' class only to that row.", async ({
    expect,
  }) => {
    using wrapper = mount(Testee, { props });
    const rows = wrapper.findAll(".lists > div");
    const [, secondRow] = rows;
    if (secondRow === undefined) {
      throw new Error("Rows not found");
    }

    await secondRow.trigger("click");

    expect(wrapper.emitted("selected")).toStrictEqual([[1]]);
  });

  test.for<[number, string[][]]>([
    [0, [["enabled", "selected"], ["enabled"]]],
    [1, [["enabled"], ["enabled", "selected"]]],
  ])(
    "If the activeIndex is %s, apply the 'selected' class to the corresponding row.",
    async ([activeIndex, expected], { expect }) => {
      using wrapper = mount(Testee, { props });

      await wrapper.setProps({ body: { ...props.body, activeIndex } });

      expect(
        wrapper.findAll(".lists > div").map(row => row.classes()),
      ).toStrictEqual(expected);
    },
  );
});
