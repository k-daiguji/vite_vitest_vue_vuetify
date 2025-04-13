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
      text="Language"
      :theme="theme.primary"
      @click="isVisible = true"
    />
    <BaseDialog
      v-model="isVisible"
      :theme="theme.primary"
      :width="dialogSize.middle"
    >
      <div class="text-right">
        <BaseButton
          rounded="xl"
          text="Close"
          :theme="theme.primary"
          @click="isVisible = false"
        />
      </div>
    </BaseDialog>
  </div>
</template>
