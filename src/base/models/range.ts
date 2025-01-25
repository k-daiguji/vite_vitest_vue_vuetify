export class Range {
  public readonly delta: number;
  private readonly offset: number;

  constructor(
    public readonly max: number,
    public readonly min: number,
    public readonly step: number,
  ) {
    if (max <= min) {
      throw new Error("Max must be greater than min.");
    }
    if (step <= 0) {
      throw new Error("Step must be greater than 0.");
    }
    this.delta = max - min;
    const [, fraction] = step.toString().split(".");
    this.offset = 10 ** fraction.length;
  }

  public toValid = (v: number) => this.clamp(this.round(v));

  private clamp = (v: number) => Math.max(Math.min(v, this.max), this.min);

  private round = (v: number) => Math.round(v * this.offset) / this.offset;
}
