import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "tailwindcss/dist/tailwind.css";

const app = createApp(App);
app.mount("#app");
app.use(store);
