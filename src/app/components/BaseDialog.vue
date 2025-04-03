<script setup lang="ts">
import BaseButton from "@/app/components/BaseButton.vue";
import type { dialogSize } from "@/app/constants/dialog";

const { width = "auto" } = defineProps<{
  width?: (typeof dialogSize)[keyof typeof dialogSize];
}>();
</script>

<template>
  <v-dialog :width="width">
    <template #activator="{ props }">
      <BaseButton
        color="surface-variant"
        text="Open Dialog"
        variant="flat"
        @click="props.onClick($event)"
      />
    </template>

    <template #default="{ isActive }">
      <slot :isActive="isActive"/>
    </template>
  </v-dialog>
</template>