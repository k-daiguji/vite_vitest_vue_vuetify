import { describe, expect, it } from "vitest";
import { defineComponent } from "vue";

import { mountComponent } from "~/testHelper";

import AttachmentTitle from "@/components/AttachmentTitle.vue";

const TestComponent = defineComponent({
  components: { AttachmentTitle },
  props: { title: String, titleWidth: Number },
  template: `
    <AttachmentTitle
      :title="title"
      :titleWidth="titleWidth"
    >
      <div class="slot">Dummy slot</div>
    </AttachmentTitle>`,
});

describe("onMounted", () => {
  it("Shown title", () => {
    const expectedTitle = "Dummy title";
    const expectedSlot = "Dummy slot";

    const wrapper = mountComponent(TestComponent, {
      title: expectedTitle,
      titleWidth: 50,
    });

    const title = wrapper.find(".title");
    expect(title.text()).toBe(expectedTitle);
    const slot = wrapper.find(".slot");
    expect(slot.text()).toBe(expectedSlot);
  });
});

describe("onUpdated", () => {
  it("Changed title", async () => {
    const expected = "Updated";
    const wrapper = mountComponent(TestComponent, {
      title: "Initialized",
      titleWidth: 50,
    });

    await wrapper.setProps({ title: expected, titleWidth: 50 });

    const title = wrapper.find(".title");
    expect(title.text()).toBe(expected);
  });
});
