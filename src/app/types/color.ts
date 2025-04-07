import type { theme } from "@/app/constants";

export type Theme = (typeof theme)[keyof typeof theme];
