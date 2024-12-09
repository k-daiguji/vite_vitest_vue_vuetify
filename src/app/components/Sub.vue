<script setup lang="ts">
import { ref } from "vue";

import { ICON, Icon, Switch } from "@/base";

const enabled = ref(true);
</script>

<template>
  <Switch v-model="enabled" />
  <Icon
    :icon="ICON.CLOSE"
    @clicked="console.log('clicked1')"
  />
  <Icon
    :enabled
    :icon="ICON.COPY"
    @clicked="console.log('clicked2')"
  />
</template>