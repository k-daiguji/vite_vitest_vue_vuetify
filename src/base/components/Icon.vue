<script setup lang="ts">
import type { ICON, Values } from "@/base";
import { COLOR } from "@/base";

const { enabled = true } = defineProps<{
  icon: Values<typeof ICON>;
  enabled?: boolean;
}>();
defineEmits<{ clicked: [] }>();
</script>

<template>
  <v-icon
    :color="COLOR.PRIMARY"
    :disabled="!enabled"
    :icon
    @click="$emit('clicked')"
  />
</template>
