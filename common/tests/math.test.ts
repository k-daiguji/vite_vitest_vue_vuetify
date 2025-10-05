import { test } from "vitest";

import { average, clamp, max, min, splitBy, sum } from "../src/math";

test.for<[number[], number]>([
  [[], 0],
  [[1, 2, 3, 4, 5, 6], 3.5],
])("When given %o, average returns %s.", ([inputs, expected], { expect }) =>
  expect(average(inputs)).toBe(expected),
);

test.for<[number, number]>([
  [0, 1],
  [1, 1],
  [2, 2],
  [99, 99],
  [100, 100],
  [101, 100],
])("When given %s, clamp returns %s.", ([input, expected], { expect }) =>
  expect(clamp(input, 1, 100)).toStrictEqual(expected),
);

test.for<[number[], number]>([
  [[], 0],
  [[-5, -4, -3, -2, -1], -1],
  [[-1, -2, -3, -4, -5], -1],
  [[1, 2, 3, 4, 5], 5],
  [[5, 4, 3, 2, 1], 5],
  [[10], 10],
])("When given %o, max returns %s.", ([inputs, expected], { expect }) =>
  expect(max(inputs)).toBe(expected),
);

test.for<[number[], number]>([
  [[], 0],
  [[-5, -4, -3, -2, -1], -5],
  [[-1, -2, -3, -4, -5], -5],
  [[1, 2, 3, 4, 5], 1],
  [[5, 4, 3, 2, 1], 1],
  [[10], 10],
])("When given %o, min returns %s.", ([inputs, expected], { expect }) =>
  expect(min(inputs)).toBe(expected),
);

test.for<[number, { quotient: number; remainder: number }]>([
  [0, { quotient: 0, remainder: 0 }],
  [1, { quotient: 0, remainder: 1 }],
  [2, { quotient: 1, remainder: 0 }],
  [3, { quotient: 1, remainder: 1 }],
])(
  "When %s is divided by 2, splitBy returns quotient and remainder %s",
  ([input, expected], { expect }) =>
    expect(splitBy(input, 2)).toStrictEqual(expected),
);

test.for<[number[], number]>([
  [[], 0],
  [[-1, -2, -3, -4, -5], -15],
  [[-0.1, -0.2, -0.3, -0.4, -0.5], -1.5],
  [[-1, 2, -3, 4, -5], -3],
  [[1, -2, 3, -4, 5], 3],
  [[0.1, 0.2, 0.3, 0.4, 0.5], 1.5],
  [[1, 2, 3, 4, 5], 15],
  [[10], 10],
])("When given %o, sum returns %s.", ([inputs, expected], { expect }) =>
  expect(sum(inputs)).toBe(expected),
);
