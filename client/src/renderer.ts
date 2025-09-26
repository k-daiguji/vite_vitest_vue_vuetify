import { createApp } from "vue";

import App from "@/client/src/views/App.vue";
import { vuetify } from "@/plugins/vuetify";

createApp(App).use(vuetify).mount("#app");
