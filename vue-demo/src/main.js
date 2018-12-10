// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from  './components/banana'
import Vuex from 'vuex'

Vue.use(VRouter) //全局使用vue-router 根组件才能使用
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
      totalPrice: 0
  },
  getters: {
    getTotal(state){
      return state.totalPrice
    }
  },
  mutations: {
    increment(state, price){
      state.totalPrice +=price
    },
    decrement(state, price){
      state.totalPrice -=price
    }
  },
  actions: {
    increase(context ,price){
      context.commit('increment', price)
    }
  }
})

let router = new VRouter({ //实例化VueRouter
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/apple'
    },
    {
      path: '/apple/:color',
      name: 'apple',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})

router.push
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: {App}
  // render: function(h){
  //    return h(App)
  //  }
})
