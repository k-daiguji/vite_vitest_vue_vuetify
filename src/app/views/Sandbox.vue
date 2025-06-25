<script setup lang="ts">
import { useTemplateRef } from "vue";

const input = defineModel<string>();
defineProps<{ placeholder: string }>();

const inputField = useTemplateRef<HTMLInputElement>("inputField");
</script>

<template>
  <v-text-field
    v-model="input"
    bg-color="rgb(128, 255, 212)"
    :label="placeholder"
    variant="outlined"
    class="mb-4"
  />
  <div class="container">
    <input
      ref="inputField"
      v-model="input"
      :required="true"
      type="text"
    >
    <span class="placeholder-text">
      {{ placeholder }}
    </span>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

input {
  background-color: aquamarine;
  color: black;
  width: 100%;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    color: black;
  }

  &:valid + .placeholder-text,
  &:focus + .placeholder-text {
    top: -8px;
    font-size: 12px;
    color: #555;
  }
}

.placeholder-text {
  position: absolute;
  top: 16px;
  left: 4px;
  transform: translateY(-50%);
  transition:
    top .3s ease-in-out,
    font-size .3s ease-in-out,
    color .3s ease-in-out;
}
</style>
