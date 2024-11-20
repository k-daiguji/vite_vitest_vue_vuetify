<script setup lang="ts">
import { COLOR } from "@/base";
import { watch } from "vue";

const { enabled = true } = defineProps<{
  activeTitle: string;
  enabled?: boolean;
}>();
const emit = defineEmits<{ switched: [activeTitle: string] }>();

watch(
  () => enabled,
  () => {
    if (!enabled) emit("switched", "");
  },
);
</script>

<template>
  <v-expansion-panels
    class="disabled"
    :model-value="activeTitle"
    :color="enabled ? COLOR.PRIMARY : COLOR.ERROR"
    :readonly="!enabled"
    variant="accordion"
    @update:model-value="$emit('switched', String($event))"
  >
    <slot></slot>
  </v-expansion-panels>
</template>
