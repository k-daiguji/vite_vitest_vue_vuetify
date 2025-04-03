<script setup lang="ts">
import BaseButton from "@/app/components/BaseButton.vue";
import BaseDialog from "@/app/components/BaseDialog.vue";
import { dialogSize } from "@/app/constants/dialog";
</script>

<template>
  <BaseDialog :width="dialogSize.middle">
    <template #default="{ isActive }">
      <BaseButton
        color="surface-variant"
        text="Close Dialog"
        variant="flat"
        @click="isActive.value = false"
      />
    </template>
  </BaseDialog>
</template>