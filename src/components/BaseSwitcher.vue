<script setup lang="ts">
const switcher = defineModel<boolean>({ required: true });
</script>

<template>
  <v-switch
    v-model="switcher"
    color="primary"
    hide-details
  />
</template>

<style scoped>
:deep(.v-selection-control) {
  max-height: 32px;
  min-height: 32px;
}
</style>
