import { createApp } from "vue";

import App from "@/app/components/App.vue";
import { vuetify } from "@/app/plugins/vuetify";

createApp(App).use(vuetify).mount("#app");
