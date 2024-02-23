import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import "./assets/main.css"; // 導入自定義 CSS 樣式
import i18n from "./plugins/i18n";

library.add(faCoffee); // 將icon添加到 Font Awesome 圖庫中

const app = createApp(App);

app.use(i18n); // 使用 i18n 插件

app.component("FontAwesomeIcon", FontAwesomeIcon); // 全域註冊 FontAwesomeIcon

app.mount("#app");
