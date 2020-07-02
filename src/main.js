import Vue from "vue";
import VueMaterial from "vue-material";
import App from "./App.vue";
import "vue-material/dist/theme/black-green-dark.css";
import "vue-material/dist/vue-material.min.css";
import { MdField, MdCard, MdToolbar, MdAvatar, MdButton, MdIcon } from "vue-material/dist/components";

Vue.use(VueMaterial);

Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdToolbar);
Vue.use(MdAvatar);
Vue.use(MdIcon);
Vue.use(MdButton);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
