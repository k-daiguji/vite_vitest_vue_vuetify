/**
 * Calculates the average of all numbers in the array.
 * Returns 0 if the array is empty.
 *
 * @param args - Array of numeric values
 * @returns The average of the values, or 0 if the array is empty
 */
export const average = (args: number[]) =>
  args.length ? sum(args) / args.length : 0;

/**
 * Clamps a number within the inclusive range defined by `min` and `max`.
 *
 * @param value - The number to clamp
 * @param min - The lower bound of the range
 * @param max - The upper bound of the range
 * @returns The clamped value
 */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Returns the largest number in the array.
 * Returns 0 if the array is empty.
 *
 * @param args - Array of numeric values
 * @returns The maximum value, or 0 if the array is empty
 */
export const max = (args: number[]) => (args.length ? Math.max(...args) : 0);

/**
 * Returns the smallest number in the array.
 * Returns 0 if the array is empty.
 *
 * @param args - Array of numeric values
 * @returns The minimum value, or 0 if the array is empty
 */
export const min = (args: number[]) => (args.length ? Math.min(...args) : 0);

/**
 * Divides a number by a divisor and returns both the quotient and remainder.
 *
 * @param value - The number to divide
 * @param divisor - The number to divide by
 * @returns An object containing the quotient and remainder
 */
export const splitBy = (value: number, divisor: number) => ({
  quotient: Math.floor(value / divisor),
  remainder: value % divisor,
});

/**
 * Computes the total sum of all numbers in the array.
 *
 * @param args - Array of numeric values
 * @returns The sum of all values in the array
 */
export const sum = (args: number[]) => args.reduce((a, b) => a + b, 0);
