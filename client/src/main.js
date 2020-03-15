import Vue from "vue"
import App from "./App.vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import VueRouter from "vue-router"
import store from "./store"
import router from "./router"
import moment from "moment";
import lodash from "lodash";
import Vuex from "vuex";

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)

Vue.use(Vuex);

Vue.prototype.$lodash = lodash;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
