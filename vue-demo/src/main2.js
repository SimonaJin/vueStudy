// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false
var myHeaderChild ={
  template:'<p>I am my HeaderChild</p>'
}
var myHeader = {
  template: '<p><my-header-child></my-header-child>I am my header</p>',
  components: {
    'my-header-child': myHeaderChild
  },
  data: function(){
    return{
      f:1,
      d:2
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  },
  data:{
     word:'hello world2'
  },
  // router,
  // template: '<App/>',
  components: {
    'my-header': myHeader
  }
})
