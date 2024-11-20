<script setup lang="ts">
import { watch } from "vue";

import Detail from "@/app/components/BaseDetail.vue";
import type { Accordion } from "@/app/types/accordion";

const activeTitle = defineModel<string>({ required: true });
const { enabled = true } = defineProps<{
  accordion: Accordion;
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
  <div class="container">
    <Detail
      v-for="({detail, enabled: enabledDetail}, key) in accordion.details"
      :key="key"
      :modelValue="detail.title === activeTitle"
      :enabled="enabled && enabledDetail"
      :detail="detail"
      @update:modelValue="switched(detail.title, $event)"
    />
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
