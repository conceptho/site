import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import fontLoader from './utils/fontLoader'
import smoothscroll from 'smoothscroll-polyfill'
import i18n from './i18n'
import Fragment from 'vue-fragment'
import '../node_modules/@fortawesome/fontawesome-pro/scss/fontawesome.scss'
import '../node_modules/@fortawesome/fontawesome-pro/scss/light.scss'

smoothscroll.polyfill()

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false
fontLoader()

new Vue({
  router,
  render: h => h(App),
  i18n,
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
