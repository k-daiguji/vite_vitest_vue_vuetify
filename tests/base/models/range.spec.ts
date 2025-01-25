import { Range } from "@/base/models/range";
import { describe, expect, it } from "vitest";

describe("Range", () => {
  it.each([
    ["Max must be greater than min.", 0, 1, 1],
    ["Step must be greater than 0.", 1, 0, 0],
  ])("Failed to create instance.(Error: %s)", (expected, max, min, step) => {
    expect(() => new Range(max, min, step)).toThrowError(expected);
  });

  it("Successfully created instance.", () => {
    const max = 1;
    const min = -1;
    const step = 0.1;

    const range = new Range(max, min, step);

    expect(range.delta).toBe(max - min);
    expect(range.max).toBe(max);
    expect(range.min).toBe(min);
    expect(range.step).toBe(step);
  });

  it.each([
    [-1.05, -1],
    [-1.04, -1],
    [-1, -1],
    [-0.951, -1],
    [-0.95, -0.9],
    [0.949, 0.9],
    [0.95, 1],
    [1, 1],
    [1.04, 1],
    [1.05, 1],
  ])("toValid(value: %s)", (value, expected) => {
    const testee = new Range(1, -1, 0.1);

    const actual = testee.toValid(value);

    expect(actual).toBe(expected);
  });
});
