<script setup lang="ts">
import Icon from "@/app/components/BaseIcon.vue";
import { icon } from "@/app/constants/icon";
import type { Detail } from "@/app/models/detail";

const isOpen = defineModel<boolean>({ required: true });
const { detail, enabled = true } = defineProps<{
  detail: Detail;
  enabled?: boolean;
}>();
</script>

<template>
  <details
    :class="{ disabled: !enabled }"
    :open="isOpen"
    @toggle="isOpen = $event.newState === 'open'"
  >
    <summary class="cursor-pointer default-height">
      <span class="mr-auto">{{ detail.title }}</span>
      <Icon :icon="isOpen ? icon.chevronUp : icon.chevronDown"/>
    </summary>
    <div class="pa-2">
      <component :is="detail.body"/>
    </div>
  </details>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  user-select: none;
}

summary {
  background-color: #f7f7f7;
  display: flex;
  height: var(--height);
  list-style: none;
}
</style>
