<script setup lang="ts">
import { shallowRef } from "vue";

import BaseTab from "@/components/BaseTab.vue";
import DummyBtn from "@/components/DummyBtn.vue";

const dummyTabs = [
  { name: "Sample1", component: DummyBtn },
  { name: "Sample2", component: DummyBtn },
  { name: "Sample3", component: DummyBtn },
];
const dummyTabs2 = shallowRef([
  { name: "Sample4", component: DummyBtn },
  { name: "Sample5", component: DummyBtn },
  { name: "Sample6", component: DummyBtn },
]);
</script>

<template>
  <v-app>
    <v-container>
      <BaseTab
        v-model="dummyTabs"
        :is-fixed-length="true"
        :show-tab-body-animation="true"
      />
      <BaseTab
        v-model="dummyTabs2"
        :is-fixed-length="false"
        show-tab-body-animation="none"
      />
    </v-container>
  </v-app>
</template>
