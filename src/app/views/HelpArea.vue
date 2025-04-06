<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseIcon from "@/app/components/BaseIcon.vue";
import { theme } from "@/app/constants/color";
import { icon } from "@/app/constants/icon";

const state = ref(false);
</script>

<template>
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
  <BaseIcon
    :icon="icon.unlock" 
    :theme="theme.primary"
  />
  <BaseIcon
    :enabled="false"
    :icon="icon.lock"
    :theme="theme.primary"
  />
</template>