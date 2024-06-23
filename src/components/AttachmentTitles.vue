<script setup lang="ts">
defineProps<{ titles: string[]; titleWidth: number }>();
</script>

<template>
  <div v-for="(title, i) in titles">
    <div class="row">
      <div class="title">{{ title }}</div>
      <slot :name="i"></slot>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  padding: 7px 0px 7px 0px;
}
.title {
  align-content: center;
  min-width: v-bind(titleWidth + "px");
  text-align: left;
}
</style>
