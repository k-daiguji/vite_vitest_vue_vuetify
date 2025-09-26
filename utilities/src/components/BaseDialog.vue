<script setup lang="ts">
import type { dialogSize } from "@/utilities/src/constants/dialog";

const isVisible = defineModel<boolean>({ required: true });
const { closableOutside = false, width = "auto" } = defineProps<{
  closableOutside?: boolean;
  width?: (typeof dialogSize)[keyof typeof dialogSize];
}>();
</script>

<template>
  <v-dialog
    v-model="isVisible"
    no-click-animation
    :persistent="!closableOutside"
    :width="width"
  >
    <div class="bg-default pa-2">
      <slot></slot>
    </div>
  </v-dialog>
</template>
