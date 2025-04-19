<script setup lang="ts">
import Intra from "@/app/views/AreaIntra.vue";
import Settings from "@/app/views/AreaSettings.vue";
</script>

<template>
  <Intra/>
  <Settings class="pt-2"/>
</template>

<style>
.default-height {
  --height: 32px;
}

.bg-default {
  background-color: #eee;
}

.primary {
  &:disabled,
  &:not(.enabled) {
    background-color: lightgray;
    color: #b0b0b0;
  }

  &:enabled {
    background-color: aquamarine;
    color: #000;

    &:hover {
      background-color: aqua;
    }

    &:active,
    &.activated {
      background-color: aqua;
      color: #fff;
    }
  }
}
</style>
