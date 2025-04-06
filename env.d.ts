declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const component: DefineComponent<any, any, unknown>;
  export default component;
}
