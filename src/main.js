import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import fontLoader from './utils/fontLoader'

Vue.config.productionTip = false
fontLoader()

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
