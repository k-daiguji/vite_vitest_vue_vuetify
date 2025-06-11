import { describe, test } from "vitest";

import { NumberPixel } from "@/app/models/pixelNumber";

describe("Throw errors for invalid pixel values", () => {
  test("NumberPixel should throw TypeError for non-integer values", ({
    expect,
  }) => {
    expect(() => NumberPixel.create(1.5)).toThrow(
      new TypeError("Value must be an integer."),
    );
  });

  test.for([0, -1])(
    "NumberPixel should throw RangeError for non-positive values '%s'",
    (value, { expect }) => {
      expect(() => NumberPixel.create(value)).toThrow(
        new RangeError("Value must be greater than zero."),
      );
    },
  );
});

test.for([1, 10])(
  "NumberPixel should create an instance with value '%spx'",
  (value, { expect }) => {
    const testee = NumberPixel.create(value);

    expect(testee.value).toBe(`${value}px`);
  },
);
