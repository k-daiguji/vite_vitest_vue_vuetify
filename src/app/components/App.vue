<script setup lang="ts">
import { ICON, Icon } from "@/base";
</script>

<template>
  <Icon
    :icon="ICON.CLOSE"
    @clicked="console.log('clicked1')"
  />
  <Icon
    enabled
    :icon="ICON.COPY"
    @clicked="console.log('clicked2')"
  />
  <Icon
    :enabled="false"
    :icon="ICON.COPY"
    @clicked="console.log('clicked3')"
  />
</template>
