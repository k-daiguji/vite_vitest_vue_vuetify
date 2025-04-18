<script setup lang="ts">
import { computed } from "vue";

const { enabled = true, rounded } = defineProps<{
  enabled?: boolean;
  rounded?: "0";
}>();
defineEmits<{ click: [] }>();

const borderRadius = computed(() => {
  if (rounded === "0") {
    return "";
  }
  return "rounded-full";
});
</script>

<template>
  <button
    class="button"
    :class="borderRadius"
    :disabled="!enabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<style>
.button {
  height: 32px;
  padding: 0 16px;
}

.rounded-full {
  border-radius: calc(32px / 2);
}
</style>
