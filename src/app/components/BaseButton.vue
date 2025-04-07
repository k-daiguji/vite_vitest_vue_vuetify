<script setup lang="ts">
import BaseIcon from "@/app/components/BaseIcon.vue";
import type { Icon, Theme } from "@/app/types";

const {
  appendIcon = "",
  enabled = true,
  icon = "",
  prependIcon = "",
  rounded = "xs",
  variant = "flat",
} = defineProps<{
  text: string;
  theme: Theme;

  appendIcon?: Icon;
  enabled?: boolean;
  icon?: Icon;
  prependIcon?: Icon;
  rounded?: "xl";
  variant?: "text";
}>();
defineEmits<{ click: [] }>();
</script>

<template>
  <v-btn
    :class="theme"
    :disabled="!enabled"
    :height="32"
    :ripple="false"
    :rounded="rounded"
    :variant="variant"
    @click="$emit('click')"
  >
    <BaseIcon
      v-if="prependIcon"
      embedded
      :icon="prependIcon"
    />
    <BaseIcon
      v-if="icon"
      embedded
      :icon="icon"
    />
    <span
      v-else
      class="text-none"
    >
      {{ text }}
    </span>
    <BaseIcon
      v-if="appendIcon"
      embedded
      :icon="appendIcon"
    />
  </v-btn>
</template>
