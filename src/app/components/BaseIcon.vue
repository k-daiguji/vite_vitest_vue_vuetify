<script setup lang="ts">
import type { icon } from "@/app/constants";
import type { Icon } from "@/app/types";

const { enabled = true, embedded = false } = defineProps<{
  icon: Icon;

  enabled?: boolean;
  embedded?: boolean;
}>();
</script>

<template>
  <span
    class="icon material-icons"
    :class="{ enabled, embedded }"
  >
    {{ icon }}
  </span>
</template>

<style scoped>
.icon {
  cursor: default;
  user-select: none;

  &:not(.enabled) {
    color: gray;
  }

  &.enabled.embedded {
    cursor: pointer;
  }
}
</style>