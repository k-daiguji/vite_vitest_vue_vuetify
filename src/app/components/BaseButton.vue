<script setup lang="ts">
import type { Theme } from "@/app/types/color";

const {
  enabled = true,
  rounded = "0",
  variant = "flat",
} = defineProps<{
  text: string;
  theme: Theme;

  enabled?: boolean;
  rounded?: "xl";
  variant?: "text";
}>();
defineEmits<{ click: [] }>();
</script>

<template>
  <v-btn
    class="text-none"
    :class="theme"
    :disabled="!enabled"
    :ripple="false"
    :rounded="rounded"
    :variant="variant"
    @click="$emit('click')"
  >
    {{ text }}
  </v-btn>
</template>
