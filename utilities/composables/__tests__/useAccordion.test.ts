import { describe, test } from "vitest";
import { computed, defineComponent, nextTick } from "vue";

import { useSection } from "@/utilities/composables/useAccordion";

const aEnabled = computed(() => true);
const bodyA = defineComponent({});
const bodyB = defineComponent({});
const bodyC = defineComponent({});

test("Initialize", ({ expect }) => {
  const a = useSection(aEnabled, { header: "Header A", body: bodyA });
  const b = useSection(a.nextEnabled, { header: "Header B", body: bodyB });
  const c = useSection(b.nextEnabled, { header: "Header C", body: bodyC });

  expect(a.enabled.value).toBe(true);
  expect(a.header).toBe("Header A");
  expect(a.body).toBe(bodyA);
  expect(b.enabled.value).toBe(false);
  expect(b.header).toBe("Header B");
  expect(b.body).toBe(bodyB);
  expect(c.enabled.value).toBe(false);
  expect(c.header).toBe("Header C");
  expect(c.body).toBe(bodyC);
});

describe("Finalize", () => {
  test("A -> B -> C", async ({ expect }) => {
    const a = useSection(aEnabled, { header: "A", body: bodyA });
    const b = useSection(a.nextEnabled, { header: "B", body: bodyB });
    const c = useSection(b.nextEnabled, { header: "C", body: bodyC });

    a.finalize();
    await nextTick();

    expect(a.enabled.value).toBe(true);
    expect(b.enabled.value).toBe(true);
    expect(c.enabled.value).toBe(false);

    b.finalize();
    await nextTick();

    expect(a.enabled.value).toBe(true);
    expect(b.enabled.value).toBe(true);
    expect(c.enabled.value).toBe(true);
  });

  test("Skip A, B -> C", async ({ expect }) => {
    const a = useSection(aEnabled, { header: "A", body: bodyA });
    const b = useSection(a.nextEnabled, { header: "B", body: bodyB });
    const c = useSection(b.nextEnabled, { header: "C", body: bodyC });

    b.finalize();
    await nextTick();

    expect(a.enabled.value).toBe(true);
    expect(b.enabled.value).toBe(false);
    expect(c.enabled.value).toBe(false);
  });
});

describe("Reset", () => {
  test("A", async ({ expect }) => {
    const a = useSection(aEnabled, { header: "A", body: bodyA });
    const b = useSection(a.nextEnabled, { header: "B", body: bodyB });
    const c = useSection(b.nextEnabled, { header: "C", body: bodyC });
    a.finalize();
    await nextTick();
    b.reset();
    await nextTick();

    a.reset();
    await nextTick();

    expect(a.enabled.value).toBe(true);
    expect(b.enabled.value).toBe(false);
    expect(c.enabled.value).toBe(false);
  });

  test("B", async ({ expect }) => {
    const a = useSection(
      computed(() => true),
      { header: "A", body: bodyA },
    );
    const b = useSection(a.nextEnabled, { header: "B", body: bodyB });
    const c = useSection(b.nextEnabled, { header: "C", body: bodyC });
    a.finalize();
    await nextTick();
    b.reset();
    await nextTick();

    b.reset();
    await nextTick();

    expect(a.enabled.value).toBe(true);
    expect(b.enabled.value).toBe(true);
    expect(c.enabled.value).toBe(false);
  });
});
