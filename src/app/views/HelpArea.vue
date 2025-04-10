<script setup lang="ts">
import BaseButton from "@/app/components/BaseButton.vue";
import { themeColor } from "@/app/constants/themeColor";
import { ref } from "vue";

const state = ref(false);
</script>

<template>
  <p id="state">State: {{ state }}</p>
  <BaseButton
    id="off-button"
    text="OFF"
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="state = false"
  />
  <BaseButton
    id="on-button"
    text="ON"
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="state = true"
  />
</template>