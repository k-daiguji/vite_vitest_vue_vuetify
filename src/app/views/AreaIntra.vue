<script setup lang="ts">
import { ref } from "vue";

import Button from "@/app/components/BaseButton.vue";
import { theme } from "@/app/constants/color";

const state = ref(false);
</script>

<template>
  <div>
    <p id="state">State: {{ state }}</p>
    <Button
      id="off-button"
      :class="theme.primary"
      @click="state = false"
    >
      OFF
    </Button>
    <Button
      id="on-button"
      :class="theme.primary"
      @click="state = true"
    >
      ON
    </Button>
  </div>
</template>
