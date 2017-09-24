// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import Auth from './auth'
import App from './App'

Vue.use(VueResource)
Vue.config.productionTip = false

/* View Material */
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
})
require('vue-material/dist/vue-material.css')

/* Semantic UI */
require('semantic-ui-css/semantic.js')
require('semantic-ui-css/semantic.css')

/* Plugins */
Vue.use(Auth)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function() {
    window.Vue = this
  },
  store,
  router,
  template: '<App/>',
  render: h => h(App)
});
