import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import DemoOne from './components/DemoOne.vue'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("DemoOne", DemoOne);

app.mount("#app");
