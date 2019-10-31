// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// eslint-disable-next-line no-unused-vars
import VueRouter from 'vue-router'
// eslint-disable-next-line no-unused-vars
import Vant from 'vant'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vant/lib/index.css';
// eslint-disable-next-line no-unused-vars
import VueResource from 'vue-resource'
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// eslint-disable-next-line no-unused-vars
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import 'babel-polyfill'

Vue.use(Vant);
Vue.use(VueResource);
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(VueRouter);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
