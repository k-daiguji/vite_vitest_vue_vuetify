<script setup lang="ts">
const { height = "auto" } = defineProps<{
  data: { headers: string[]; rows: string[][] };
  height: string;
}>();
</script>

<template>
  <div class="container">
    <table class="w-100">
      <thead>
        <tr>
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
  cursor: default;
  height: v-bind(height);
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
      border-bottom: solid 1px #000;
      height: var(--height);
      padding: 0 8px;
      position: sticky;
      top: 0;
      z-index: 1;

      &:first-child {
        position: sticky;
        left: 0;
        z-index: 3;
      }
    }
  }

  td {
    background-color: var(--bg-color);
    border-bottom: solid 1px #b0b0b0;
    height: var(--height);
    padding: 0 8px;

    &:first-child {
      position: sticky;
      left: 0;
      z-index: 2;
    }
  }
}
</style>