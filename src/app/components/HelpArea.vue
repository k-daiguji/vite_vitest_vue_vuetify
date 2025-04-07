<script setup lang="ts">
import BaseButton from "@/app/components/BaseButton.vue";
import { icon, theme } from "@/app/constants";
</script>

<template>
  <BaseButton
    :icon="icon.settings"
    text="Settings"
    :theme="theme.primary"
    rounded="xl"
    @click="console.log('clicked')"
  />
</template>