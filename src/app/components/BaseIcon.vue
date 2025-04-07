<script setup lang="ts">
import type { icon } from "@/app/constants/icon";
import type { Theme } from "@/app/types/color";

const { enabled = true } = defineProps<{
  icon: (typeof icon)[keyof typeof icon];
  theme: Theme;

  enabled?: boolean;
}>();
</script>

<template>
  <span
    class="icon"
    :class="icon, theme, { enabled }"
  ></span>
</template>

<style scoped>
.icon {
  align-items: center;
  display: flex;
  font-size: 32px;
  height: 32px;
  width: 32px;
}
</style>