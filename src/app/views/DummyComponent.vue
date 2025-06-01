<script setup lang="ts">
defineEmits<{ finalize: []; reset: [] }>();
</script>

<template>
  <button @click="$emit('finalize')">Finalize</button>
  <button @click="$emit('reset')">Reset</button>
</template>
