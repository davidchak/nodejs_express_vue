import Vue from 'vue'
import Vuex from 'vuex'
import { Auth } from './modules/auth.js'
import { Cart } from './modules/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    store_auth: Auth,
	store_cart: Cart,
  },
})