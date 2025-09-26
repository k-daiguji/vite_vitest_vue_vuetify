<script setup lang="ts">
import { computed } from "vue";

import BaseIcon from "@/utilities/src/components/BaseIcon.vue";
import type { icon } from "@/utilities/src/constants/icon";

const { enabled = true, rounded } = defineProps<{
  enabled?: boolean;
  leftIcon?: (typeof icon)[keyof typeof icon];
  rightIcon?: (typeof icon)[keyof typeof icon];
  rounded?: "0";
  text?: string;
}>();
defineEmits<{ click: [] }>();

const borderRadius = computed(() => (rounded === "0" ? "" : "rounded-full"));
</script>

<template>
  <button
    class="button"
    :class="borderRadius"
    :disabled="!enabled"
    @click="$emit('click')"
  >
    <BaseIcon
      v-if="leftIcon"
      :icon="leftIcon"
    />
    {{ text }}
    <BaseIcon
      v-if="rightIcon"
      :icon="rightIcon"
    />
  </button>
</template>

<style>
.button {
  height: var(--height);
  padding: 0 16px;
}

.rounded-full {
  border-radius: calc(var(--height) / 2);
}
</style>
