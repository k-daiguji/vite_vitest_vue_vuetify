import { Card } from "@/client/models/card";

export class Spade extends Card {
  public readonly color = "Black";
  public readonly suit = "Spade";

  private constructor(rank: string) {
    super(rank);
  }

  public static create(rank: string): Spade {
    return new Spade(rank);
  }
}
