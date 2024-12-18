import { describe, expect, test } from "vitest";

import { range } from "@/base";

describe("range", () => {
  test.for<[number, number[]]>([
    [10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [0, []],
  ])("Specified stop(%s)", ([stop, expected]) =>
    expect(range(stop)).toStrictEqual(expected),
  );

  test.for<[number, number, number[]]>([
    [1, 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    [1, 0, []],
  ])("Specified start(%s) and stop(%s)", ([start, stop, expected]) =>
    expect(range(start, stop)).toStrictEqual(expected),
  );

  test.for<[number, number, number, number[]]>([
    [0, 30, 5, [0, 5, 10, 15, 20, 25]],
    [0, 10, 3, [0, 3, 6, 9]],
    [0, -10, -1, [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]],
  ])(
    "Specified start(%s), stop(%s) and step(%s)",
    ([start, stop, step, expected]) =>
      expect(range(start, stop, step)).toStrictEqual(expected),
  );
});
