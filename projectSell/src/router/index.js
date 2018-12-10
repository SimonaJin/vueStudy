import Vue from 'vue'
import Router from 'vue-router'

//页面路径
import goodsPage from 'components/goods/goods.vue'
import ratingsPage from 'components/ratings/ratings.vue'
import sellerPage from 'components/seller/seller.vue'
//----------
Vue.use(Router)

//-------------
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/goods',
      name: 'goods',
      component: goodsPage
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratingsPage
    },
    {
      path: '/seller',
      name: 'seller',
      component: sellerPage
    },
  ]
})

