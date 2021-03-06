import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
  components: { App }
}).$mount('#app')
