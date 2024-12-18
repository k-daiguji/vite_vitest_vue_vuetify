<script setup lang="ts">
import { ref } from "vue";

import { ICON, Icon, List, Switch } from "@/base";

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
  <List
    :enabled
    :labels="['List1', 'List2', 'List3']"
  />
</template>