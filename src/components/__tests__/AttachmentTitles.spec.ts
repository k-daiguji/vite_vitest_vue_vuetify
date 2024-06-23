import { describe, expect, it } from "vitest";
import { defineComponent } from "vue";

import { mountComponent } from "@/components/__tests__/testHelper";

import AttachmentTitles from "@/components/AttachmentTitles.vue";

const TestComponent = defineComponent({
  components: { AttachmentTitles },
  props: { titles: Array<String>, titleWidth: Number },
  template: `
    <AttachmentTitles
      :titles="titles"
      :titleWidth="titleWidth"
    >
      <template #0>
        <div class="slot">Dummy slot1</div>
      </template>
      <template #1>
        <div class="slot">Dummy slot2</div>
      </template>
    </AttachmentTitles>`,
});

describe("onMounted", () => {
  it("Shown titles", () => {
    const expectedTitles = ["Dummy title1", "Dummy title2"];
    const expectedSlots = ["Dummy slot1", "Dummy slot2"];

    const wrapper = mountComponent(TestComponent, {
      titles: expectedTitles,
      titleWidth: 50,
    });

    const titles = wrapper.findAll(".title");
    titles.forEach((t, i) => {
      expect(t.text()).toBe(expectedTitles[i]);
    });
    const slots = wrapper.findAll(".slot");
    slots.forEach((s, i) => {
      expect(s.text()).toBe(expectedSlots[i]);
    });
  });
});

describe("onUpdated", () => {
  it("Changed titles", async () => {
    const expectedTitles = ["Updated1", "Updated2"];
    const wrapper = mountComponent(TestComponent, {
      titles: ["Initialized1", "Initialized2"],
      titleWidth: 50,
    });

    await wrapper.setProps({
      titles: expectedTitles,
      titleWidth: 50,
    });

    const titles = wrapper.findAll(".title");
    titles.forEach((t, i) => {
      expect(t.text()).toBe(expectedTitles[i]);
    });
  });
});
