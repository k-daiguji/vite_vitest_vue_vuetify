<script setup lang="ts">
import Button from "@/app/components/BaseButton.vue";
import Icon from "@/app/components/BaseIcon.vue";
import { themeColor } from "@/app/constants/themeColor";
</script>

<template>
  <Icon icon="home"/>
  <Icon :enabled="false" icon="home"/>
  <Button
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="console.log('1')"
  >
    <Icon
      embedded
      icon="home"
    />
    Home
  </Button>
  <Button
    :enabled="false"
    :theme-color="themeColor.primary"
    rounded="xl"
    @click="console.log('2')"
  >
    Home
    <Icon
      embedded
      icon="home"
    />
  </Button>
</template>