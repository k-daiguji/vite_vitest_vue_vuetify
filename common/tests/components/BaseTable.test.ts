import { mount } from "@vue/test-utils";
import { test } from "vitest";

import BaseTable from "@/common/components/BaseTable.vue";
import type { Pixel } from "@/common/types/pixel";
import type { Table } from "@/common/types/table";

test("Table renders headers and bodies correctly.", ({ expect }) => {
  const maxHeight: Pixel = { value: "100px" };
  const headers = ["Header 1", "Header 2"];
  const table: Table = {
    headers,
    bodies: [
      [{ indent: 0, cell: "Row 1, Cell 1" }, { cell: "Row 1, Cell 2" }],
      [{ indent: 1, cell: "Row 2, Cell 1" }, { cell: "Row 2, Cell 2" }],
      [{ indent: 2, cell: "Row 3, Cell 1" }, { cell: "Row 3, Cell 2" }],
    ],
  };

  using wrapper = mount(BaseTable, { props: { maxHeight, table } });

  const ths = wrapper.findAll("thead th").map(th => th.text());
  expect(ths).toStrictEqual(headers);
  const tds = wrapper
    .findAll("tbody tr")
    .map(tbody =>
      tbody
        .findAll("td")
        .map(td => ({ classes: td.find("span").classes(), text: td.text() })),
    );
  expect(tds).toStrictEqual([
    [
      { classes: ["pl-0"], text: "Row 1, Cell 1" },
      { classes: ["pl-0"], text: "Row 1, Cell 2" },
    ],
    [
      { classes: ["pl-1"], text: "Row 2, Cell 1" },
      { classes: ["pl-0"], text: "Row 2, Cell 2" },
    ],
    [
      { classes: ["pl-2"], text: "Row 3, Cell 1" },
      { classes: ["pl-0"], text: "Row 3, Cell 2" },
    ],
  ]);
});
