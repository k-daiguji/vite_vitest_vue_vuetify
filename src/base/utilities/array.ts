export function range(start: number, stop: number, step?: number): number[];
export function range(stop: number): number[];
export function range(
  ...args: [start: number, stop: number, step?: number] | [stop: number]
) {
  const [start, stop, step = 1] = args.length === 1 ? [0, args[0]] : args;
  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );
}
