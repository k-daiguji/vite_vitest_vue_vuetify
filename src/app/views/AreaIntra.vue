<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseTable from "@/app/components/BaseTable.vue";
import { theme } from "@/app/constants/color";

const state = ref(false);

const table = {
  headers: ["", "Header 2", "Header 3", "Header 4"],
  bodies: [
    [{ cell: "test1", indent: 0 }, { cell: 1 }, { cell: 2 }, { cell: 3 }],
    [{ cell: "test1-1", indent: 2 }, { cell: 4 }, { cell: 5 }, { cell: 6 }],
    [{ cell: "test1-1-1", indent: 4 }, { cell: 7 }, { cell: 8 }, { cell: 9 }],
    [
      { cell: "test1-1-2", indent: 4 },
      { cell: 10 },
      { cell: 11 },
      { cell: 12 },
    ],
    [{ cell: "test2", indent: 0 }, { cell: 13 }, { cell: 14 }, { cell: 15 }],
    [{ cell: "test2-1", indent: 2 }, { cell: 16 }, { cell: 17 }, { cell: 18 }],
    [{ cell: "test2-2", indent: 2 }, { cell: 19 }, { cell: 20 }, { cell: 21 }],
    [{ cell: "test2-3", indent: 2 }, { cell: 22 }, { cell: 23 }, { cell: 24 }],
    [{ cell: "test3", indent: 0 }, { cell: 25 }, { cell: 26 }, { cell: 27 }],
    [{ cell: "test4", indent: 0 }, { cell: 28 }, { cell: 29 }, { cell: 30 }],
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
    <BaseTable :table="table" />
  </div>
</template>
