export * from "@/base/types/tabs";

export type Values<T> = T[keyof T];

export interface ITable {
  headers: () => { label: string; width: number }[];
  rows: () => { label: string; level?: number }[][];
}
