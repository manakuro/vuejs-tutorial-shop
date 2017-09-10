// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import Auth from './auth'
import App from './App'

Vue.use(VueResource)
Vue.config.productionTip = false

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('semantic-ui-css/semantic.js')
require('semantic-ui-css/semantic.css')

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
