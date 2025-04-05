<script setup lang="ts">
import type { themeColor } from "@/app/constants/themeColor";

const { enabled = true, variant = "flat" } = defineProps<{
  text: string;
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
    :ripple="false"
    :rounded="rounded"
    :variant="variant"
    @click="$emit('click')"
  >
    {{ text }}
  </v-btn>
</template>
