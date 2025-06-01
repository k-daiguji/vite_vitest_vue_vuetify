<script setup lang="ts">
defineProps<{ message?: string }>();
</script>

<template>
  <div>{{ message ?? "111" }}</div>
</template>
