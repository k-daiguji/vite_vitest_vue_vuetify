<script setup lang="ts">
import Intra from "@/client/views/AreaIntra.vue";
import Settings from "@/client/views/AreaSettings.vue";
</script>

<template>
  <div class="root">
    <Intra/>
    <Settings class="pt-2"/>
  </div>
</template>

<style>
.root {
  --bg-color: #f0f0f0;
  --height: 32px;

  background-color: #f0f0f0;
  height: 100vh;
}

.primary {
  &:disabled,
  &:not(.enabled) {
    background-color: lightgray;
    color: #b0b0b0;
  }

  &:enabled,
  &.enabled {
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

.primary-table {
  thead > tr {
    background-color: deepskyblue;
  }

  tbody > tr:nth-child(even) {
    background-color: skyblue;
  }
}
</style>
