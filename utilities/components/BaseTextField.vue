<script setup lang="ts">
import { computed } from "vue";
import type { Validator } from "@/utilities/types/validator";

const _input = defineModel<string>({ required: true });
const { validators = [] } = defineProps<{
  placeholder: string;
  validators?: Validator[];
}>();

const _error = computed(() => {
  try {
    validators.forEach(validator => validator.validate(_input.value));
    return "";
  } catch (error) {
    return error instanceof Error ? error.message : "Unknown validation error";
  }
});
</script>

<template>
  <div class="container">
    <input
      v-model="_input"
      name="input"
    />
    <label
      class="placeholder"
      for="input"
    >
      {{ placeholder }}
    </label>
    <span
      v-if="validators.length"
      class="error"
    >
      {{ _error }}
    </span>
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

  &:focus + .placeholder,
  &:valid + .placeholder {
    top: 25%;
    font-size: 12px;
  }

  &:focus + .placeholder {
    color: black;
  }
}

.placeholder {
  color: #555;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  transition:
    color .1s ease-in-out,
    font-size .1s ease-in-out,
    top .1s ease-in-out;
}
</style>
