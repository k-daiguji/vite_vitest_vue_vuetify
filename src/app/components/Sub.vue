<script setup lang="ts">
import { computed, ref } from "vue";

import { ICON, Icon, type ITable, List, Switch, Table } from "@/base";

const enabled = ref(true);
const results = [
  {
    header: "Label",
    columns: [
      { label: "test1", level: 0 },
      { label: "test1-1", level: 1 },
      { label: "test2", level: 0 },
      { label: "test2-1", level: 1 },
    ],
    width: 100,
  },
  {
    header: "1st",
    columns: [{ label: "1" }, { label: "3" }, { label: "5" }, { label: "7" }],
    width: 0,
  },
  {
    header: "2nd",
    columns: [{ label: "2" }, { label: "4" }, { label: "6" }, { label: "8" }],
    width: 0,
  },
];
class Tab implements ITable {
  private constructor(
    private readonly _headers: { label: string; width: number }[],
    private readonly _rows: { label: string; level?: number }[][],
  ) {}

  public static create = (
    results: {
      header?: string;
      columns: { label: string; level?: number }[];
      width?: number;
    }[],
  ) => {
    const headers = results.map(result => ({
      label: result.header,
      width: result.width,
    }));
    const rows = results[0].columns.map((_, colIndex) =>
      results.map(row => row.columns[colIndex]),
    );
    return new Tab(headers, rows);
  };

  public headers = () => this._headers;

  public rows = () => this._rows;
}
const table = computed(() => Tab.create(results));
</script>

<template>
  <Switch v-model="enabled" />
  <Icon
    :icon="ICON.CLOSE"
    @clicked="console.log('clicked1')"
  />
  <Icon
    :enabled
    :icon="ICON.COPY"
    @clicked="console.log('clicked2')"
  />
  <List
    :enabled
    :labels="['List1', 'List2', 'List3']"
  />
  <Table
    :enabled
    :table
  >
  </Table>
</template>