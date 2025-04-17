<script setup lang="ts">
const {
  enabled = true,
  rounded = "xl",
  variant = "flat",
} = defineProps<{
  enabled?: boolean;
  rounded?: "0";
  variant?: "text";
}>();
defineEmits<{ click: [] }>();
</script>

<template>
  <v-btn
    class="text-none"
    :disabled="!enabled"
    :ripple="false"
    :rounded="rounded"
    :variant="variant"
    @click="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>
