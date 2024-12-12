<script setup lang="ts">
import { onMounted, ref } from "vue";

import type { Values } from "@/base";
import { THEME, useSelector } from "@/base";

const { enabled = true, theme = THEME.MAIN } = defineProps<{
  enabled?: boolean;
  theme?: Values<typeof THEME>;
}>();

useSelector("tr", () => enabled);
const rows = [
  ["test1", 1, 2, 3],
  ["test2", 4, 5, 6],
  ["test3", 7, 8, 9],
  ["test4", 7, 8, 9],
];

onMounted(() => {
  import(`@/base/styles/theme${theme}.css`);
});
</script>

<template>
  <div class="container">
    <table>
      <tbody>
        <tr
          v-for="(row, i) in rows"
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
  height: 108px;
  overflow-y: auto;
  scrollbar-gutter: stable;
}
</style>