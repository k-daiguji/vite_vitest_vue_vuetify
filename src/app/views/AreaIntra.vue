<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";

const state = ref(false);
</script>

<template>
  <div>
    <p id="state">State: {{ state }}</p>
    <BaseButton
      id="off-button"
      text="OFF"
      :theme="theme.primary"
      rounded="xl"
      @click="state = false"
    />
    <BaseButton
      id="on-button"
      text="ON"
      :theme="theme.primary"
      rounded="xl"
      @click="state = true"
    />
  </div>
</template>
