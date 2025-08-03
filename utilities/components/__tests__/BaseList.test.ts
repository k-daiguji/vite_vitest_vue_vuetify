import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Testee from "@/utilities/components/BaseList.vue";

const lists = [
  ["Item 1", "Item 2", "Item 3"],
  ["Item A", "Item B", "Item C"],
];
const props = {
  modelValue: -1,
  lists,
  maxDisplay: 3,
};

describe("Enabled / Disabled", () => {
  test("If the enable flag is not specified, the list is enabled.", ({
    expect,
  }) => {
    using wrapper = mount(Testee, { props });

    const rows = wrapper.findAll(".lists > div");
    const texts = rows.map(row => row.findAll("div").map(cell => cell.text()));
    expect(texts).toStrictEqual(lists);
    expect(rows.map(row => row.classes())).toStrictEqual([
      ["enabled"],
      ["enabled"],
    ]);
  });

  test("If the enable flag is false, the list is disabled.", ({ expect }) => {
    using wrapper = mount(Testee, {
      props: { ...props, enabled: false },
    });

    const rows = wrapper.findAll(".lists > div");
    const texts = rows.map(row => row.findAll("div").map(cell => cell.text()));
    expect(texts).toStrictEqual(lists);
    expect(rows.map(row => row.classes())).toStrictEqual([[], []]);
  });

  test("If the enable flag is true, the list is enabled.", ({ expect }) => {
    using wrapper = mount(Testee, {
      props: { ...props, enabled: true },
    });

    const rows = wrapper.findAll(".lists > div");
    const texts = rows.map(row => row.findAll("div").map(cell => cell.text()));
    expect(texts).toStrictEqual(lists);
    expect(rows.map(row => row.classes())).toStrictEqual([
      ["enabled"],
      ["enabled"],
    ]);
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

    expect(rows.map(row => row.classes())).toStrictEqual([
      ["enabled", "selected"],
      ["enabled"],
    ]);
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

    expect(rows.map(row => row.classes())).toStrictEqual([
      ["enabled"],
      ["enabled", "selected"],
    ]);
  });
});
