import type { ComputedRef, ShallowRef } from "vue";
import { watch } from "vue";

export const useScroll = (
  container: Readonly<ShallowRef<HTMLDivElement | null>>,
  activeIndex: ComputedRef<number>,
) => {
  const scrollToActiveIndex = () => {
    const child = container.value?.children.item(activeIndex.value);
    if (container.value && child) {
      const { top: containerTop, bottom: containerBottom } =
        container.value.getBoundingClientRect();
      const { top: childTop, bottom: childBottom } =
        child.getBoundingClientRect();
      if (childTop < containerTop) {
        const top = childTop - containerTop;
        container.value.scrollBy({ behavior: "smooth", top });
      } else if (childBottom > containerBottom) {
        const top = childBottom - containerBottom;
        container.value.scrollBy({ behavior: "smooth", top });
      }
    }
  };

  watch(activeIndex, scrollToActiveIndex);
};
