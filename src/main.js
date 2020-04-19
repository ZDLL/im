import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require("./untill/ant")//引入ant组建
import mixin from './mixin/index'
Vue.mixin(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
