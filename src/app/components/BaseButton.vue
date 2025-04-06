<script setup lang="ts">
import type { themeColor } from "@/app/constants/themeColor";

const {
  enabled = true,
  rounded = "xs",
  variant = "flat",
} = defineProps<{
  themeColor: (typeof themeColor)[keyof typeof themeColor];

  enabled?: boolean;
  rounded?: "xl";
  variant?: "text";
}>();
defineEmits<{ click: [] }>();
</script>

<template>
  <v-btn
    :class="themeColor"
    :disabled="!enabled"
    :height="32"
    :ripple="false"
    :rounded="rounded"
    :variant="variant"
    @click="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>
