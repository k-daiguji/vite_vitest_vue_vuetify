import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import type { Values } from "@/base";
import { List, THEME } from "@/base";

describe("List", () => {
  const labels = ["Dummy1", "Dummy2", "Dummy3"];

  test("Mounted(minimum props)", () => {
    const wrapper = shallowMount(List, {
      props: { labels },
    });

    const lists = wrapper.findAll("li");
    expect(lists.length).toBe(labels.length);
    lists.forEach((list, i) => {
      expect(list.classes("p-min")).toBe(true);
      expect(list.text()).toBe(labels[i]);
    });
  });

  test.for([true, false])("Mounted(enabled: %s)", enabled => {
    const wrapper = shallowMount(List, {
      props: { enabled, labels },
    });

    const lists = wrapper.findAll("li");
    expect(lists.length).toBe(labels.length);
    lists.forEach((list, i) => {
      expect(list.classes("p-min")).toBe(true);
      expect(list.text()).toBe(labels[i]);
    });
  });

  test.for<Values<typeof THEME>>(Object.values(THEME))(
    "Mounted(theme: %s)",
    async theme => {
      const wrapper = shallowMount(List, {
        props: { labels, theme },
      });

      const lists = wrapper.findAll("li");
      expect(lists.length).toBe(labels.length);
      lists.forEach((list, i) => {
        expect(list.classes("p-min")).toBe(true);
        expect(list.text()).toBe(labels[i]);
      });
    },
  );
});
