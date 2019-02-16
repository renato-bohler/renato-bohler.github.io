import Vue from "vue";
import Toasted from "vue-toasted";
import Tooltip from "v-tooltip";
import ScrollTo from "vue-scrollto";
import Icon from "vue-awesome";
import Moment from "vue-moment";
import moment from "moment";
import App from "./App.vue";
import i18n from "@/plugins/i18n";

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
Vue.use(Moment, { moment });

Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
