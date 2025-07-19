<script setup lang="ts">
import BaseTextField from "@/utilities/components/BaseTextField.vue";

const input = defineModel<string>({ required: true });
defineProps<{ placeholder: string }>();
</script>

<template>
  <div>
    <v-text-field
      v-model="input"
      bg-color="rgb(128, 255, 212)"
      :label="placeholder"
      :rules="[
        () => !!input || 'This field is required',
        () => !!input && input.length <= 25 || 'Address must be less than 25 characters',
      ]"
      variant="solo"
      class="mb-4"
    />
    <BaseTextField
      v-model="input"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

input {
  height: 48px;
  width: 100%;
  background-color: aquamarine;
  border-radius: 4px;
  box-shadow: 0 1px 2px #777;
  outline: none;
  padding-top: 16px;
  padding-bottom: 4px;
  padding-left: 8px;

  &:focus + .placeholder-text,
  &:valid + .placeholder-text {
    top: 25%;
    font-size: 12px;
  }

  &:focus + .placeholder-text {
    color: black;
  }
}

.placeholder-text {
  color: #555;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  transition:
    top .1s ease-in-out,
    font-size .1s ease-in-out,
    color .1s ease-in-out;
}
</style>
