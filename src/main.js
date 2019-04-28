import Vue from 'vue'
import App from './App'
import store from './store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载全局的vuex
Vue.prototype.$store = store

Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()
