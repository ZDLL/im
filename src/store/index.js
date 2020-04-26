import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import LoginModule from './login/loginModule'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    LoginModule
  },
  plugins:[persistedState({ storage: window.sessionStorage })]
})
