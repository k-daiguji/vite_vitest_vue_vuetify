<script setup lang="ts">
import { ref } from "vue";

import Button from "@/app/components/BaseButton.vue";
import BaseDialog from "@/app/components/BaseDialog.vue";
import { theme } from "@/app/constants/color";
import { dialogSize } from "@/app/constants/dialog";

const isVisible = ref(false);
</script>

<template>
  <div>
    <Button
      :class="theme.primary"
      rounded="0"
      @click="isVisible = true"
    >
      Language
    </Button>
    <BaseDialog
      v-model="isVisible"
      :width="dialogSize.middle"
    >
      <div class="text-right">
        <Button
          :class="theme.primary"
          @click="isVisible = false"
        >
          Close
        </Button>
      </div>
    </BaseDialog>
  </div>
</template>
