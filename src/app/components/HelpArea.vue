<script setup lang="ts">
import BaseButton from "@/app/components/BaseButton.vue";
import { themeColor } from "@/app/constants/themeColor";
</script>

<template>
  <BaseButton
    text="Cancel"
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="console.log('cancel')"
  />
  <BaseButton
    text="OK"
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="console.log('ok')"
  />
</template>