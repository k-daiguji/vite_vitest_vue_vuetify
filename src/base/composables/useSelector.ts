import { onMounted, watch } from "vue";

export const useSelector = (tagName: string, enabled: () => boolean) => {
  onMounted(() => {
    const tags = document.getElementsByTagName(tagName);
    for (const tag of tags) {
      if (!enabled()) {
        tag.classList.add("disabled");
      }
      tag.onclick = () => {
        for (const tag of tags) {
          tag.classList.remove("active");
        }
        tag.classList.add("active");
      };
      tag.onmouseenter = () => tag.classList.add("hover");
      tag.onmouseleave = () => tag.classList.remove("hover");
    }
  });

  watch(enabled, enabled => {
    const tags = document.getElementsByTagName(tagName);
    for (const tag of tags) {
      if (enabled) {
        tag.classList.remove("disabled");
      } else {
        tag.classList.add("disabled");
      }
      tag.classList.remove("active");
    }
  });
};
