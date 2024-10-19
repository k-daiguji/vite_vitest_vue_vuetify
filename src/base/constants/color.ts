import type { RequireLeastOne, Values } from "@/base/types";

export const COLOR = {
  ERROR: "#FF0000",
  PRIMARY: "#0591B9",
  SUCCESS: "#00FF00",
  WARNING: "#FFFF00",
} as const;

type ColorValue = Values<typeof COLOR>;

export type Color = RequireLeastOne<{
  background?: ColorValue;
  text?: ColorValue;
}>;