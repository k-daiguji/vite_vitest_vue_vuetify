import type { Detail } from "@/app/models/detail";

export interface Accordion {
  get details(): { detail: Detail; enabled: boolean }[];
}
