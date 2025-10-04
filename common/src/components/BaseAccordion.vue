<script setup lang="ts">
import type { Component, ComputedRef } from "vue";
import { watch } from "vue";

import Icon from "@/common/components/BaseIcon.vue";
import { icon } from "@/common/constants/icon";

const activeTitle = defineModel<string>({ required: true });
const { enabled = true } = defineProps<{
  sections: {
    enabled: ComputedRef<boolean>;
    nextEnabled: ComputedRef<boolean>;
    finalize: () => void;
    reset: () => void;
    header: string;
    body: Component;
  }[];
  enabled?: boolean;
}>();

watch(
  () => enabled,
  () => {
    if (!enabled) {
      activeTitle.value = "";
    }
  },
);

const switched = (title: string, isOpen: boolean) => {
  if (isOpen) {
    activeTitle.value = title;
  } else if (title === activeTitle.value) {
    activeTitle.value = "";
  }
};
</script>

<template>
  <details
    v-for="({ enabled, header, body, finalize, reset }, key) in sections"
    :key="key"
    :class="{ disabled: !enabled.value }"
    :open="header === activeTitle"
    @toggle="switched(header, $event.newState === 'open')"
  >
    <summary class="cursor-pointer default-height">
      <span class="mr-auto">{{ header }}</span>
      <Icon :icon="header === activeTitle ? icon.chevronUp : icon.chevronDown"/>
    </summary>
    <div class="pa-2">
      <component
        :is="body"
        @finalize="finalize"
        @reset="reset"
      />
    </div>
  </details>
</template>

<style scoped>
.disabled {
  pointer-events: none;
  user-select: none;
}

summary {
  display: flex;
  height: var(--height);
  list-style: none;
}
</style>
