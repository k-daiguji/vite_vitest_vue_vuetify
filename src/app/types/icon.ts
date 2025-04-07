import type { icon } from "@/app/constants";

export type Icon = (typeof icon)[keyof typeof icon];
