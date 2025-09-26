<script setup lang="ts">
import { computed, useTemplateRef } from "vue";

import { useScroll } from "@/common/src/composables/useScroll";

const { body, enabled = true } = defineProps<{
  body: { activeIndex: number; rows: string[][] };
  maxDisplay: number;
  enabled?: boolean;
}>();
defineEmits<{ selected: [index: number] }>();

const container = useTemplateRef("container");
const activeIndex = computed(() => body.activeIndex);
useScroll(container, activeIndex);
</script>

<template>
  <div
    ref="container"
    class="lists"
  >
    <div
      v-for="(cells, i) in body.rows"
      :key="i"
      :class="{ enabled, selected: body.activeIndex === i }"
      @click="$emit('selected', i)"
    >
      <div
        v-for="(cell, j) in cells"
        :key="j"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.lists {
  max-height: calc(var(--regular-height) * v-bind(maxDisplay) + 1px);
}
</style>