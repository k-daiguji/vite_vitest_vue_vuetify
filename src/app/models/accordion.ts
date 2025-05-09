import { Detail } from "@/app/models/detail";
import type { Accordion } from "@/app/types/accordion";
import Intra from "@/app/views/AreaIntra.vue";

export class TestAccordion implements Accordion {
  private readonly _details = [
    { detail: Detail.create("aaaa", Intra), enabled: true },
    { detail: Detail.create("bbbb", Intra), enabled: false },
    { detail: Detail.create("cccc", Intra), enabled: true },
  ];

  private constructor() {}

  public static create() {
    return new TestAccordion();
  }

  public get details() {
    return this._details;
  }
}
