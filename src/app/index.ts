import { createApp } from "vue";

import { vuetify } from "@/app/plugins/vuetify";
import App from "@/app/views/App.vue";

createApp(App).use(vuetify).mount("#app");
