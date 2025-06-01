import { mount } from "@vue/test-utils";
import { test } from "vitest";

import Button from "@/app/components/BaseButton.vue";
import Table from "@/app/components/BaseTable.vue";
import { theme } from "@/app/constants/color";
import Intra from "@/app/views/AreaIntra.vue";

test("Mounted", ({ expect }) => {
  using wrapper = mount(Intra);

  const [off, on] = wrapper.findAllComponents(Button);
  if (!(off && on)) {
    throw new Error("Button not found");
  }
  expect(off.classes()).toContain(theme.primary);
  expect(on.classes()).toContain(theme.primary);
});

test("Shown table", ({ expect }) => {
  using wrapper = mount(Intra);

  const testee = wrapper.findComponent(Table);
  const headers = testee.findAll("th").map(th => th.text());
  expect(headers).toStrictEqual(["", "Header 2", "Header 3", "Header 4"]);
  const bodies = testee
    .findAll("tbody tr")
    .map(tr => tr.findAll("td").map(td => td.text()));
  expect(bodies).toStrictEqual([
    ["test1", "1", "2", "3"],
    ["test1-1", "4", "5", "6"],
    ["test1-1-1", "7", "8", "9"],
    ["test1-1-2", "10", "11", "12"],
    ["test2", "13", "14", "15"],
    ["test2-1", "16", "17", "18"],
    ["test2-2", "19", "20", "21"],
    ["test2-3", "22", "23", "24"],
    ["test3", "25", "26", "27"],
    ["test4", "28", "29", "30"],
  ]);
});
