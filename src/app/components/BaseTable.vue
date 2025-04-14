<script setup lang="ts">
import type { Theme } from "@/app/types/color";

const { enabled = true } = defineProps<{
  data: { headers: string[]; rows: string[][] };
  theme: Theme;

  enabled?: boolean;
}>();
</script>

<template>
  <div class="container">
    <table class="table text-center w-100">
      <thead>
        <tr
          class="enabled header-row"
          :class="theme"
        >
          <th
            v-for="(header, i) in data.headers"
            :key="i"
            class="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in data.rows"
          :key="i"
        >
          <td
            v-for="(cell, j) in row"
            :key="j"
            class="cell"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  cursor: default;
  height: 108px;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.table {
  border-collapse: separate;
  border-spacing: 0;
}

.header-row {
  height: 36px;
  position: sticky;
  top: 0;
  z-index: 1;

  &:first-child {
    position: sticky;
    left: 0;
  }
}

.header {
  border-bottom: solid 1px #000;
  height: 36px;
}

.cell {
  border-bottom: solid 1px #b0b0b0;
  height: 36px;
}
</style>