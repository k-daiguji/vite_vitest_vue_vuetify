<script setup lang="ts">
import { ref } from "vue";

import BaseButton from "@/utilities/components/BaseButton.vue";
import BaseDialog from "@/utilities/components/BaseDialog.vue";
import { theme } from "@/utilities/constants/color";
import { dialogSize } from "@/utilities/constants/dialog";
import { icon } from "@/utilities/constants/icon";

const isVisible = ref(false);
</script>

<template>
  <div>
    <BaseButton
      :class="theme.primary"
      :left-icon="icon.settings"
      rounded="0"
      @click="isVisible = true"
    />
    <BaseDialog
      v-model="isVisible"
      :width="dialogSize.middle"
    >
      <div class="text-right">
        <BaseButton
          :class="theme.primary"
          text="Close"
          @click="isVisible = false"
        />
      </div>
    </BaseDialog>
  </div>
</template>
