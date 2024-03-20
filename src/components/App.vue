<script setup lang="ts">
import { ref } from "vue";

const detectBtn = ref("Detect");
</script>

<template>
  <v-app>
    <v-container>
      <v-btn class="text-capitalize text-primary">{{ detectBtn }}</v-btn>
    </v-container>
  </v-app>
</template>
