<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseTable from "@/app/components/BaseTable.vue";
import { theme } from "@/app/constants/color";

const state = ref(false);

const data = {
  headers: ["Header 1", "Header 2", "Header 3", "Header 4"],
  rows: [
    ["test1", 1, 2, 3],
    ["test2", 4, 5, 6],
    ["test3", 7, 8, 9],
    ["test4", 9, 8, 7],
    ["test5", 6, 5, 4],
    ["test6", 3, 2, 1],
  ],
};
</script>

<template>
  <div>
    <p id="state">State: {{ state }}</p>
    <BaseButton
      id="off-button"
      :class="theme.primary"
      @click="state = false"
    >
      OFF
    </BaseButton>
    <BaseButton
      id="on-button"
      :class="theme.primary"
      @click="state = true"
    >
      ON
    </BaseButton>
  </div>
  <BaseTable
    :data="data"
    height="180px"
    :theme="theme.primary"
  />
</template>
