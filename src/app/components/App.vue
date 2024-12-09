<script setup lang="ts">
import { Tabs } from "@/base";

import Sub from "@/app/components/Sub.vue";

const tabs = [
  { name: "Aaa", component: Sub },
  { name: "bBb", component: Sub },
];
</script>

<template>
  <Tabs
    v-model="tabs"
    is-fixed-length
    is-show-animation
  />
</template>
