<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/app/components/BaseButton.vue";
import BaseDialog from "@/app/components/BaseDialog.vue";
import BaseIcon from "@/app/components/BaseIcon.vue";
import { theme } from "@/app/constants/color";
import { dialogSize } from "@/app/constants/dialog";
import { icon } from "@/app/constants/icon";

const isVisible = ref(false);

let sub: Window | null = null;
const open = () => {
  sub = window.open("", "_blank", "width=400, height=600");
};
const close = () => {
  sub?.close();
};
</script>

<template>
  <div>
    <BaseButton
      :theme="theme.primary"
      @click="isVisible = true"
    >
      <BaseIcon
        :icon="icon.lock"
        :theme="theme.primary"
      />
    </BaseButton>
    <BaseDialog
      v-model="isVisible"
      :width="dialogSize.middle"
    >
      <div class="text-right">
        <BaseButton
          :theme="theme.primary"
          @click="isVisible = false"
        >
          Close
        </BaseButton>
      </div>
    </BaseDialog>
  </div>
</template>
