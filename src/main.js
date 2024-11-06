import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { createPinia, PiniaVuePlugin } from 'pinia'
import i18n from './plugins/i18n.js';

//import "@/assets/scss/darkMode.scss"
import "@/assets/scss/LightMode.scss"

import "aos/dist/aos.css"
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  pinia,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
