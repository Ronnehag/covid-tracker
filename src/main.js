import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


Vue.use(VueMaterial)

Vue.config.productionTip = false

Vue.filter('humanize', function(date){
  return new Date(date).toDateString();
})

new Vue({
  render: h => h(App),
}).$mount('#app')
