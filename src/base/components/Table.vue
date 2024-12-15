<script setup lang="ts">
import { onMounted } from "vue";

import type { ITable, Values } from "@/base";
import { THEME, useSelector } from "@/base";

const {
  enabled = true,
  table,
  theme = THEME.MAIN,
} = defineProps<{
  table: ITable;
  enabled?: boolean;
  theme?: Values<typeof THEME>;
}>();

useSelector("tr", () => enabled);

onMounted(() => {
  import(`@/base/styles/theme${theme}.css`);
});
</script>

<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, i) in table.headers()"
            :key="i"
            class="header p-min"
            :width="header.width"
          >
            <span>{{ header.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in table.rows()"
          :key="i"
        >
          <td
            v-for="(cell, j) in row"
            :key="j"
            class="p-min"
          >
            <span>{{ cell.label }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
  overflow: auto;
  scrollbar-gutter: stable;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

td:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
}

td, th {
  height: 36px;
}
</style>