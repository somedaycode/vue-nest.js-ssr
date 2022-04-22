import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import createVuexStore from "./store";

Vue.config.productionTip = false;

const router = createRouter();
const store = createVuexStore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
