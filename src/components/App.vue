<script setup lang="ts">
import { inject } from "vue";

const message = inject<string>("message");
</script>

<template>
  <v-app>
    <v-container>
      <div class="message">{{ message }}</div>
    </v-container>
  </v-app>
</template>
