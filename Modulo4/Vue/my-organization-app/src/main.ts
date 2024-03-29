import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "vuetify/dist/vuetify.min.css";
import "./assets/main.css";

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
