<script setup lang="ts">
import { ref } from "vue";

const detectBtn = ref("Detect");
</script>

<template>
  <v-btn class="text-capitalize text-primary">{{ detectBtn }}</v-btn>
</template>
