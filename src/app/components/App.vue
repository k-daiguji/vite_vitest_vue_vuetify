<script setup lang="ts">
import HelpArea from "@/app/components/HelpArea.vue";
</script>

<template>
  <HelpArea/>
</template>

<style>
.primary-theme-color {
  &:disabled {
    background-color: lightgray;
    color: gray;
  }

  &:enabled {
    background-color: aquamarine;
    color: #000;

    &:hover {
      background-color: aqua;
    }

    &:active {
      background-color: aqua;
      color: #fff;
    }
  }
}
</style>
