export interface Table {
  get headers(): string[];
  get bodies(): [TableCell, ...TableCell[]][];
}

interface TableCell {
  cell: string;
  indent?: number;
}
