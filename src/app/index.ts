import { createApp } from "vue";

import { router } from "@/app/plugins/router";
import { vuetify } from "@/app/plugins/vuetify";
import App from "@/app/views/App.vue";

createApp(App).use(router).use(vuetify).mount("#app");
