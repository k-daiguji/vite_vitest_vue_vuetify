import { createApp } from "vue";

import { vuetify } from "@/common/plugins/vuetify";
import App from "@/editor/views/App.vue";

createApp(App).use(vuetify).mount("#app");
