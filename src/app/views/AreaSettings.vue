<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseDialog from "@/app/components/BaseDialog.vue";
import { theme } from "@/app/constants/color";
import { dialogSize } from "@/app/constants/dialog";

const isVisible = ref(false);
</script>

<template>
  <div>
    <BaseButton
      :class="theme.primary"
      rounded="0"
      @click="isVisible = true"
    >
      Language
    </BaseButton>
    <BaseDialog
      v-model="isVisible"
      :width="dialogSize.middle"
    >
      <div class="text-right">
        <BaseButton
          :class="theme.primary"
          @click="isVisible = false"
        >
          Close
        </BaseButton>
      </div>
    </BaseDialog>
  </div>
</template>
