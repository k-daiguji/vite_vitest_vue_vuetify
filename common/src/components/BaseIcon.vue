<script setup lang="ts">
import type { icon } from "@/common/constants/icon";

const { enabled = true } = defineProps<{
  icon: (typeof icon)[keyof typeof icon];

  enabled?: boolean;
}>();
</script>

<template>
  <span
    class="icon"
    :class="{ [icon]: true, enabled }"
  ></span>
</template>

<style scoped>
.icon {
  align-items: center;
  display: flex;
  font-size: var(--height);
  height: var(--height);
  width: var(--height);
}
</style>