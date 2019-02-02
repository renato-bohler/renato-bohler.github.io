import Vue from "vue";
import FlagIcon from "vue-flag-icon";
import Toasted from "vue-toasted";
import Tooltip from "v-tooltip";
import ScrollTo from "vue-scrollto";
import App from "./App.vue";
import i18n from "@/plugins/i18n";

Vue.use(FlagIcon);
Vue.use(Toasted, {
  singleton: true,
  duration: 2000,
  position: "bottom-center",
  className: "toast"
});
Vue.use(Tooltip);
Vue.use(ScrollTo, {
  offset: -100
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
