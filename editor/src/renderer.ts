import { createApp } from "vue";

import App from "@/editor/src/views/App.vue";
import { vuetify } from "@/plugins/vuetify";

createApp(App).use(vuetify).mount("#app");
