<script setup lang="ts">
const activeIndex = defineModel<number>({ required: true });
const { enabled = true } = defineProps<{
  lists: string[][];
  maxDisplay: number;
  enabled?: boolean;
}>();
</script>

<template>
  <div class="lists">
    <div
      v-for="(cells, i) in lists"
      :key="i"
      :class="{ enabled, selected: activeIndex === i }"
      @click="activeIndex = i"
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
  overflow: auto;
  scrollbar-gutter: stable;
}
</style>