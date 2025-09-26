import { test } from "vitest";

import { AutoPixel } from "@/utilities/src/models/pixelAuto";

test("AutoPixel should create an instance with value 'auto'", ({ expect }) => {
  const testee = AutoPixel.create();

  expect(testee.value).toBe("auto");
});
