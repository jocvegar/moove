import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const myApp = createApp(App);
myApp.use(router);
myApp.use(AOS.init());
myApp.mount("#app");
