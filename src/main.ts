import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vRipple from "./directives/vRipple";

const app = createApp(App);

app.directive("ripple", vRipple);

app.mount("#app");
