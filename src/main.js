import Vue from "vue";
import FlagIcon from "vue-flag-icon";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";

Vue.use(FlagIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
