<script setup lang="ts">
import { COLOR } from "@/base";

const switcher = defineModel<boolean>({ required: true });
const { enabled = true } = defineProps<{ enabled?: boolean }>();
</script>

<template>
  <v-switch
    v-model="switcher"
    :color="COLOR.PRIMARY"
    :disabled="!enabled"
    hide-details
  />
</template>

<style scoped>
:deep(.v-selection-control) {
  max-height: 32px;
  min-height: 32px;
}
</style>
