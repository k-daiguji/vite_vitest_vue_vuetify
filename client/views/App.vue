<script setup lang="ts">
import { ref } from "vue";

import Intra from "@/client/views/AreaIntra.vue";
import Settings from "@/client/views/AreaSettings.vue";
import Sandbox from "@/client/views/Sandbox.vue";

const _input = ref("");
</script>

<template>
  <div class="root">
    <Intra/>
    <Settings class="pt-2"/>
    <Sandbox
      class="pt-2"
      v-model="_input"
      placeholder="Test label"
    />
  </div>
</template>

<style>
@import "@mdi/font/css/materialdesignicons.css";
@import "vuetify/styles";

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
