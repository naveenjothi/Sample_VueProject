import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
// import Names from './components/Names.vue'

Vue.use(VueRouter)
// Vue.component('names',Names)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
