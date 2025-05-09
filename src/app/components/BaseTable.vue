<script setup lang="ts">
const { height = "auto" } = defineProps<{
  data: { headers: string[]; rows: string[][] };
  height: string;
}>();
</script>

<template>
  <div class="container">
    <table class="table text-center w-100">
      <thead>
        <tr class="enabled header-row">
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
  height: v-bind(height);
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