<script setup lang="ts">
import { ref, type Component } from "vue";

const tabs = defineModel<{ name: string; component: Component }[]>({
  required: true,
});
defineProps<{
  isFixedLength: boolean;
  showTabBodyAnimation: true | "none";
}>();
const tabIndex = ref(0);

const close = (e: MouseEvent, index: number) => {
  e.stopPropagation();
  if (0 < tabIndex.value && index <= tabIndex.value) tabIndex.value--;
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
        @click="close($event, i)"
      />
    </v-tab>
  </v-tabs>
  <v-window v-model="tabIndex">
    <v-window-item
      v-for="(tab, i) in tabs"
      :key="i"
      :transition="showTabBodyAnimation"
      :reverse-transition="showTabBodyAnimation"
    >
      <div class="pt-5 pb-5">
        <component
          id="tab-body"
          :is="tab.component"
        />
      </div>
    </v-window-item>
  </v-window>
</template>
