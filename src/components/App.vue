<script setup lang="ts">
import { shallowRef } from "vue";

import BaseTab from "@/components/BaseTab.vue";
import BaseSwitcher from "@/components/BaseSwitcher.vue";

const _dummyTabs = [
  { name: "Sample1", component: BaseSwitcher },
  { name: "Sample2", component: BaseSwitcher },
  { name: "Sample3", component: BaseSwitcher },
];
const _dummyTabs2 = shallowRef([
  { name: "Sample4", component: BaseSwitcher },
  { name: "Sample5", component: BaseSwitcher },
  { name: "Sample6", component: BaseSwitcher },
]);
</script>

<template>
  <v-app>
    <v-container>
      <BaseTab
        v-model="_dummyTabs"
        :is-fixed-length="true"
        :show-tab-body-animation="true"
      />
      <BaseTab
        v-model="_dummyTabs2"
        :is-fixed-length="false"
        show-tab-body-animation="none"
      />
    </v-container>
  </v-app>
</template>
