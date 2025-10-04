import type { Pixel } from "@/common/types/pixel";

export class NumberPixel implements Pixel {
  private readonly _value;

  private constructor(value: number) {
    if (!Number.isInteger(value)) {
      throw new TypeError("Value must be an integer.");
    }
    if (value <= 0) {
      throw new RangeError("Value must be greater than zero.");
    }
    this._value = `${value}px`;
  }

  public static create(value: number): NumberPixel {
    return new NumberPixel(value);
  }

  public get value() {
    return this._value;
  }
}
