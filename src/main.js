import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/submain.scss";
import "material-icons/iconfont/material-icons.css";

createApp(App).use(router).mount("#app");
