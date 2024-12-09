<script setup lang="ts">
import { ref } from "vue";

import { COLOR, ICON, Icon } from "@/base";
import type { Tab } from "@/base";

const tabs = defineModel<Tab[]>({ required: true });
defineProps<{
  isFixedLength: boolean;
  isShowAnimation: boolean;
}>();

const tabIndex = ref(0);

const close = (index: number) => {
  if (index <= tabIndex.value) {
    tabIndex.value--;
  }
  tabs.value = tabs.value.filter((_, i) => i !== index);
};
</script>

<template>
  <v-tabs
    v-model="tabIndex"
    :bg-color="COLOR.PRIMARY"
    :grow="isFixedLength"
    :show-arrows="true"
  >
    <v-tab
      class="text-none"
      v-for="(tab, i) in tabs"
      :key="i"
    >
      {{ tab.name }}
      <Icon
        v-if="!isFixedLength"
        :icon="ICON.CLOSE"
        @clicked="close(i)"
      />
    </v-tab>
  </v-tabs>
  <v-window v-model="tabIndex">
    <v-window-item
      v-for="(tab, i) in tabs"
      :key="i"
      :reverse-transition="isShowAnimation"
      :transition="isShowAnimation"
    >
      <div class="pt-3 pb-3">
        <component :is="tab.component" />
      </div>
    </v-window-item>
  </v-window>
</template>
