import Vue from "vue";
import FlagIcon from "vue-flag-icon";
import Toasted from "vue-toasted";
import ScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import i18n from "@/plugins/i18n";

Vue.use(FlagIcon);
Vue.use(Toasted, {
  singleton: true,
  duration: 2000,
  position: "bottom-center",
  className: "toast"
});
Vue.use(ScrollTo, {
  offset: -100
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
