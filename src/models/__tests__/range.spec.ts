import { Range, SliderRange } from "@/models/range";
import { describe, expect, it } from "vitest";

describe("Range", () => {
  it.each([
    ["Max must be a number.(Max = null)", null, 0],
    ["Max must be a number.(Max = undefined)", undefined, 0],
    ["Max must be a number.(Max = NaN)", NaN, 0],
    ["Max must be greater than or equal to min.(Max = -1, Min = 0)", -1, 0],
  ])("Failed to create instance.(%s)", (expected, max: unknown, min) => {
    expect(() => new Range(max as number, min)).toThrowError(expected);
  });

  it.each([
    ["Min must be a number.(Min = null)", 0, null],
    ["Min must be a number.(Min = undefined)", 0, undefined],
    ["Min must be a number.(Min = NaN)", 0, NaN],
  ])("Failed to create instance.(%s)", (expected, max, min: unknown) => {
    expect(() => new Range(max, min as number)).toThrowError(expected);
  });

  it.each([
    [-1.01, -1],
    [-1, -1],
    [1, 1],
    [1.01, 1],
  ])("clamp(newValue: %s)", (newValue, expected) => {
    const testee = new Range(1, -1);

    const actual = testee.clamp(newValue);

    expect(actual).toBe(expected);
  });

  it("delta", () => {
    const expected = 2;
    const testee = new Range(1, -1);

    const actual = testee.delta();

    expect(actual).toBe(expected);
  });
});

describe("SliderRange", () => {
  it.each([
    ["Max must be a number.(Max = null)", null, 0],
    ["Max must be a number.(Max = undefined)", undefined, 0],
    ["Max must be a number.(Max = NaN)", NaN, 0],
    ["Max must be greater than or equal to min.(Max = -1, Min = 0)", -1, 0],
  ])("Failed to create instance.(%s)", (expected, max: unknown, min) => {
    expect(() => new SliderRange(max as number, min, 1)).toThrowError(expected);
  });

  it.each([
    ["Min must be a number.(Min = null)", 0, null],
    ["Min must be a number.(Min = undefined)", 0, undefined],
    ["Min must be a number.(Min = NaN)", 0, NaN],
  ])("Failed to create instance.(%s)", (expected, max, min: unknown) => {
    expect(() => new SliderRange(max, min as number, 1)).toThrowError(expected);
  });

  it.each([
    ["Step must be a number.(Step = null)", null],
    ["Step must be a number.(Step = undefined)", undefined],
    ["Step must be a number.(Step = NaN)", NaN],
    ["Step must be greater than 0.(Step = 0)", 0],
    ["Step must be a divisor of range.(Max = 1, Min = 0, Step = 0.03)", 0.03],
  ])("Failed to create instance.(%s)", (expected, slider: unknown) => {
    expect(() => new SliderRange(1, 0, slider as number)).toThrowError(
      expected,
    );
  });

  it.each([
    [-1.01, -1],
    [-1, -1],
    [1, 1],
    [1.01, 1],
  ])("clamp(newValue: %s)", (newValue, expected) => {
    const testee = new SliderRange(1, -1, 0.01);

    const actual = testee.clamp(newValue);

    expect(actual).toBe(expected);
  });

  it("getRange", () => {
    const testee = new SliderRange(1, -1, 0.25);

    const actual = testee.getRange();

    expect(actual).toStrictEqual({ max: 1, min: -1 });
  });

  it("getStep", () => {
    const testee = new SliderRange(1, -1, 0.25);

    const actual = testee.getStep();

    expect(actual).toBe(0.25);
  });
});
