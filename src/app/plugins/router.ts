import { createMemoryHistory, createRouter } from "vue-router";

import PageMain from "@/app/views/PageMain.vue";

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/", component: PageMain }],
});
