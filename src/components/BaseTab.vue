<script setup lang="ts">
import { ref } from "vue";

import type { Tab } from "@/types/components";

const tabs = defineModel<Tab[]>({
  required: true,
});
defineProps<{
  isFixedLength: boolean;
  showTabBodyAnimation: true | "none";
}>();
defineEmits<{ modelValue: [tab: Tab] }>();

const tabIndex = ref(0);

const _close = (e: MouseEvent, index: number) => {
  e.stopPropagation();
  if (index <= tabIndex.value) {
    tabIndex.value--;
  }
  tabs.value = tabs.value.filter((_, i) => i !== index);
};
</script>

<template>
  <v-tabs
    v-model="tabIndex"
    bg-color="primary"
    :grow="isFixedLength"
  >
    <v-tab
      class="text-capitalize"
      v-for="(tab, i) in tabs"
      :key="i"
    >
      {{ tab.name }}
      <v-icon
        v-if="!isFixedLength"
        icon="mdi-close"
        @click="_close($event, i)"
      />
    </v-tab>
  </v-tabs>
  <v-window v-model="tabIndex">
    <v-window-item
      v-for="(tab, i) in tabs"
      :key="i"
      :reverse-transition="showTabBodyAnimation"
      :transition="showTabBodyAnimation"
    >
      <div class="pt-5 pb-5">
        <component :is="tab.component"/>
      </div>
    </v-window-item>
  </v-window>
</template>
