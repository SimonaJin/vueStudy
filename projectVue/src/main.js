// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import Vrouter from 'vue-router'
import Vresouce from 'vue-resource'
import IndexPage from './pages/index.vue'
import orderListPage from './pages/orderList.vue'
import DetailPage from './pages/detail.vue'
import ForecastPage from './pages/detail/forecast.vue'
import CountPage from './pages/detail/count.vue'
import AnalysisPage from './pages/detail/analysis.vue'
import PublishPage from './pages/detail/publish.vue'
// import Data from './util/mock'

Vue.use(Vrouter)
Vue.use(Vresouce)
// Vue.config.productionTip = false
let router = new Vrouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderListPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'forecast',
          name: 'forecast',
          component: ForecastPage
        },
        {
          path: 'count',
          name: 'count',
          component: CountPage
        },
        {
          path: 'analysis',
          name: 'analysis',
          component: AnalysisPage
        },
        {
          path: 'publish',
          name: 'publish',
          component: PublishPage
        },
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
