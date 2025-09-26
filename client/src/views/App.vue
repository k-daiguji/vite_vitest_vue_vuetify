<script setup lang="ts">
import { ref } from "vue";

const title = ref("App");
</script>

<template>
  <div class="root">{{ title }}</div>
</template>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vuetify/styles";
@import "@/utilities/css/global.css";

.root {
  --bg-color: #f0f0f0;
  --height: 32px;

  background-color: var(--bg-color);
  height: 100vh;
}
</style>
