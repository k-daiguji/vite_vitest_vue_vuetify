import { mount } from "@vue/test-utils";
import { describe, test } from "vitest";

import Table from "@/app/components/BaseTable.vue";

test("Mounted", ({ expect }) => {
  const table = {
    headers: ["Header 1", "Header 2", "Header 3"],
    bodies: [
      [{ cell: "title1", indent: 0 }, { cell: "value1" }, { cell: "value2" }],
      [{ cell: "title1-1", indent: 1 }, { cell: "value3" }, { cell: "value4" }],
      [
        { cell: "title1-1-1", indent: 2 },
        { cell: "value5" },
        { cell: "value6" },
      ],
    ],
  };

  using wrapper = mount(Table, { props: { table } });

  const headers = wrapper.findAll("th").map(th => th.text());
  expect(headers).toStrictEqual(["Header 1", "Header 2", "Header 3"]);
  const bodies = wrapper
    .findAll("tbody tr")
    .map(tr =>
      tr.findAll("span").map(s => ({ classes: s.classes(), cell: s.text() })),
    );
  expect(bodies).toStrictEqual([
    [
      { classes: ["pl-0"], cell: "title1" },
      { classes: ["pl-0"], cell: "value1" },
      { classes: ["pl-0"], cell: "value2" },
    ],
    [
      { classes: ["pl-1"], cell: "title1-1" },
      { classes: ["pl-0"], cell: "value3" },
      { classes: ["pl-0"], cell: "value4" },
    ],
    [
      { classes: ["pl-2"], cell: "title1-1-1" },
      { classes: ["pl-0"], cell: "value5" },
      { classes: ["pl-0"], cell: "value6" },
    ],
  ]);
});
