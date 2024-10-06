<script setup lang="ts">
const _switcher = defineModel<boolean>({ required: true });
</script>

<template>
  <v-switch
    v-model="_switcher"
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
