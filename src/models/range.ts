const validateNumber = (n: unknown) => typeof n === "number" && !isNaN(n);

export class Range {
  constructor(
    private readonly max: number,
    private readonly min: number,
  ) {
    if (!validateNumber(max)) {
      throw `Max must be a number.(Max = ${String(max)})`;
    }
    if (!validateNumber(min)) {
      throw `Min must be a number.(Min = ${String(min)})`;
    }
    if (max < min) {
      throw `Max must be greater than or equal to min.(Max = ${String(max)}, Min = ${String(min)})`;
    }
    this.max = max;
    this.min = min;
  }

  public clamp = (n: number) => {
    if (!validateNumber(n)) throw "New value must be a number.";
    return Math.max(Math.min(n, this.max), this.min);
  };

  public delta = () => this.max - this.min;
}

export class SliderRange {
  private readonly range;

  constructor(
    private readonly max: number,
    private readonly min: number,
    private readonly step: number,
  ) {
    this.range = new Range(max, min);

    if (!validateNumber(step)) {
      throw `Step must be a number.(Step = ${String(step)})`;
    }
    if (step <= 0) throw `Step must be greater than 0.(Step = ${String(step)})`;
    const divisor = this.range.delta() / step;
    if (!Number.isInteger(divisor)) {
      throw `Step must be a divisor of range.(Max = ${String(max)}, Min = ${String(min)}, Step = ${String(step)})`;
    }
    this.step = step;
  }

  public clamp = (n: number) => this.range.clamp(n);

  public getRange = () => ({ max: this.max, min: this.min });

  public getStep = () => this.step;
}
