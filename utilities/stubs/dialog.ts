import { defineComponent } from "vue";

export const dialogStub = defineComponent({
  props: {
    modelValue: { required: true, type: Boolean },
    closableOutside: { default: false, type: Boolean },
    width: { default: "auto", type: Number },
  },
  template: "<slot></slot>",
});
