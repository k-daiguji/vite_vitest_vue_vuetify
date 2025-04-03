<script setup lang="ts">
defineProps<{
  color: string;
  text: string;
  variant: "flat" | "text";
}>();
defineEmits<{ click: [event: PointerEvent] }>();
</script>

<template>
  <v-btn
    :color="color"
    :text="text"
    :variant="variant"
    @click="$emit('click', $event)"
  />
</template>