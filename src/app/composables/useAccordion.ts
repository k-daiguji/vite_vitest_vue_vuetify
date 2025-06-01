import type { Component, ComputedRef } from "vue";
import { computed, ref, watch } from "vue";

export const useSection = (
  enabled: ComputedRef<boolean>,
  section: { header: string; body: Component },
  option = { finalize: () => undefined, reset: () => undefined },
) => {
  const cacheEnabled = ref(false);
  const nextEnabled = computed(() => cacheEnabled.value);

  const finalize = () => {
    if (enabled.value) {
      cacheEnabled.value = true;
      option.finalize();
    }
  };

  const reset = () => {
    cacheEnabled.value = false;
  };

  watch(enabled, () => {
    cacheEnabled.value = false;
    option.reset();
  });

  return { ...section, enabled, nextEnabled, finalize, reset };
};
