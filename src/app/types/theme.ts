import type { themeColor } from "@/app/constants/themeColor";

export type Theme = (typeof themeColor)[keyof typeof themeColor];
