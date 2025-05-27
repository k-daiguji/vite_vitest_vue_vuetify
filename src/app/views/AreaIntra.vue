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
const data2 = {
  headers: [
    "Header 1",
    "Header 2",
    "Header 3",
    "Header 4",
    "Header 5",
    "Header 6",
  ],
  rows: [
    ["test1", 1, 2, 3, 4, 5],
    ["test2", 6, 7, 8, 9, 10],
    ["test3", 11, 12, 13, 14, 15],
    ["test4", 16, 17, 18, 19, 20],
    ["test5", 21, 22, 23, 24, 25],
    ["test6", 26, 27, 28, 29, 30],
  ],
};
</script>

<template>
  <div>
    <p id="state">State: {{ state }}</p>
    <BaseButton
      id="off-button"
      :class="theme.primary"
      text="OFF"
      @click="state = false"
    />
    <BaseButton
      id="on-button"
      :class="theme.primary"
      text="ON"
      @click="state = true"
    />
  </div>
  <BaseTable
    :data="data"
    height="180px"
  />
  <BaseTable
    class="mt-2"
    :data="data2"
    height="111px"
  />
</template>
