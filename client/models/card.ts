export abstract class Card {
  public abstract readonly color: string;
  public abstract readonly suit: string;
  private readonly ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  private readonly rank: string;

  protected constructor(rank: string) {
    this.rank = this.validateRank(rank);
  }

  public get value(): string {
    return `${this.suit} ${this.rank}`;
  }

  public compareTo(other: Card): -1 | 0 | 1 {
    const thisRankIndex = this.ranks.indexOf(this.rank);
    const otherRankIndex = this.ranks.indexOf(other.rank);

    if (thisRankIndex > otherRankIndex) {
      return 1;
    } else if (thisRankIndex < otherRankIndex) {
      return -1;
    } else {
      return 0;
    }
  }

  private validateRank(rank: string): string | never {
    if (this.ranks.includes(rank)) {
      return rank;
    }
    throw new Error(
      `Invalid rank: ${rank}. Valid ranks: ${this.ranks.join(", ")}`,
    );
  }
}
