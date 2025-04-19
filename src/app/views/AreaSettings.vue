<script setup lang="ts">
import { ref } from "vue";

import Button from "@/app/components/BaseButton.vue";
import BaseDialog from "@/app/components/BaseDialog.vue";
import Icon from "@/app/components/BaseIcon.vue";
import { theme } from "@/app/constants/color";
import { dialogSize } from "@/app/constants/dialog";
import { icon } from "@/app/constants/icon";

const isVisible = ref(false);
</script>

<template>
  <div>
    <Button
      :class="theme.primary"
      rounded="0"
      @click="isVisible = true"
    >
      <Icon
        :class="theme.primary"
        :icon="icon.settings"
      />
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
