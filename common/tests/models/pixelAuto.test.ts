import { test } from "vitest";

import { AutoPixel } from "@/common/models/pixelAuto";

test("AutoPixel should create an instance with value 'auto'", ({ expect }) => {
  const testee = AutoPixel.create();

  expect(testee.value).toBe("auto");
});
