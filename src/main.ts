import { createApp } from "vue";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/theme.css";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
