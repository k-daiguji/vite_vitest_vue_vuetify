import type { theme } from "@/app/constants/color";

export type Theme = (typeof theme)[keyof typeof theme];
