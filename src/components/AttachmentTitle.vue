<script setup lang="ts">
defineProps<{ title: string; titleWidth: number }>();
</script>

<template>
  <div class="row">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  padding: 7px 0;
}

.title {
  align-content: center;
  min-width: v-bind(titleWidth + "px");
  text-align: left;
}
</style>
