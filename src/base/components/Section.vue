<script setup lang="ts">
const { enabled = true } = defineProps<{
  enabled?: boolean;
  title: string;
}>();
</script>

<template>
  <v-expansion-panel
    :disabled="!enabled"
    :value="title"
  >
    <v-expansion-panel-title>
      {{ title }}
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot></slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style scoped>
  :deep(.v-expansion-panel-title) {
    max-height: 24px;
    min-height: 24px;
    padding: 0 8px;
  }

  .v-expansion-panel--active > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
    max-height: 32px;
    min-height: 32px;
  }

  :deep(.v-expansion-panel-text__wrapper) {
    padding: 8px;
  }
</style>