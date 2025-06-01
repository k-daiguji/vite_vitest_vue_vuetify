<script setup lang="ts">
import type { Table } from "@/app/types/table";

const { maxHeight = "auto" } = defineProps<{
  table: Table;
  maxHeight?: number | "auto";
}>();
</script>

<template>
  <div class="container">
    <table class="w-100">
      <thead>
        <tr>
          <th
            v-for="(header, i) in table.headers"
            :key="i"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in table.bodies"
          :key="i"
        >
          <td
            v-for="({ cell, indent = 0 }, j) in row"
            :key="j"
          >
            <span :class="`pl-${indent}`">{{ cell }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
  height: v-bind(maxHeight) + "px";
  overflow: auto;
  scrollbar-gutter: stable;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  white-space: nowrap;

  thead {
    th {
      background-color: var(--bg-color);
      border-bottom: 1px solid #000;
      height: var(--height);
      padding: 0 8px;
      position: sticky;
      top: 0;
      z-index: 1;

      &:first-child {
        left: 0;
        position: sticky;
        z-index: 3;
      }
    }
  }

  td {
    background-color: var(--bg-color);
    border-bottom: 1px solid #b0b0b0;
    height: var(--height);
    padding: 0 8px;

    &:first-child {
      left: 0;
      position: sticky;
      z-index: 2;
    }
  }
}
</style>