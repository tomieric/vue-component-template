import Vue from 'vue'
import compositionApi from '@vue/composition-api'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(compositionApi)
Vue.use(elementUI)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
