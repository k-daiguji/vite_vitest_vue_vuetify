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
          class="enabled header"
          :class="theme"
        >
          <th
            v-for="(header, i) in data.headers"
            :key="i"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in data.rows"
          :key="i"
          class="row"
        >
          <td
            v-for="(cell, j) in row"
            :key="j"
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
  border: solid 1px #778ca3;
  cursor: default;
  height: 109px;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.table {
  border-collapse: collapse;
  border-spacing: 0;
}

.header {
  height: 36px;
  position: sticky;
  top: 0;
  z-index: 1;

  &:first-child {
    position: sticky;
    left: 0;
  }
}

.row {
  height: 36px;

  &:not(:last-child) {
    border-bottom: solid 1px #778ca3;
  }
}
</style>