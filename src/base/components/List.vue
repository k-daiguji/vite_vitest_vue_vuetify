<script setup lang="ts">
import { onMounted } from "vue";

import type { Values } from "@/base";
import { THEME, useSelector } from "@/base";

const {
  enabled = true,
  labels,
  theme = THEME.MAIN,
} = defineProps<{
  labels: string[];
  enabled?: boolean;
  theme?: Values<typeof THEME>;
}>();
defineEmits<{ clicked: [] }>();

useSelector("li", () => enabled);

onMounted(() => {
  import(`@/base/styles/theme${theme}.css`);
});
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(label, key) in labels"
        :key
        class="p-min"
      >
        <span>{{ label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  align-content: center;
  height: 36px;
}
</style>