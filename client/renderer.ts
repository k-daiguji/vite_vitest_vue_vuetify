import { createApp } from "vue";

import App from "@/client/views/App.vue";
import { vuetify } from "@/plugins/vuetify";

createApp(App).use(vuetify).mount("#app");
