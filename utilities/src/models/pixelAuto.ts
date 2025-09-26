import type { Pixel } from "@/utilities/src/types/pixel";

export class AutoPixel implements Pixel {
  private readonly _value = "auto";

  private constructor() {}

  public static create(): AutoPixel {
    return new AutoPixel();
  }

  public get value() {
    return this._value;
  }
}
