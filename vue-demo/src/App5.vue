
<template>
  <div>
    <!--<button v-on:click="show = !show">Toggle</button>-->
    <button v-on:click="toggleCom">Toggle</button>
    <!--<p v-color="'red'">hello world</p>-->
    <div class="ab">
      <transition name="fade" mode="out-in">
        <div :is="currentView" @my-event="onAvueEvent"></div>

        <!--<p v-show="show">I am show</p>-->
      </transition>
      <!--<transition name="tran">
        <p v-show="show">I am show</p>
      </transition>-->
    </div>
    <p v-css="{color:'red', 'font-size':'32px'}">你好</p>
    <input type="text" v-focus>


  </div>

</template>
<script>
  import componentB from './components/b.vue'
  import componentC from './components/c.vue'
  import Vue from 'vue' //全局定义Vue

  //    Vue.directive('css',{
  //      inserted(el, bind) {
  //        let styleObj =bind.value
  //        let arr = []
  //        for(let key in styleObj) {
  //          arr.push(key + ':' +styleObj[key])
  //        }
  //        arr = arr.join(';')
  //        el.style.cssText = arr
  //      }
  //    })

  export default{
    components: {
      componentB,
      componentC
    },
    directives:{
      css: {
        inserted(el, bind) {
          let styleObj =bind.value
          let arr = []
          for(let key in styleObj) {
            arr.push(key + ':' +styleObj[key])
          }
          arr = arr.join(';')
          el.style.cssText = arr
        }
      },
      focus: {
        inserted(el) {
          el.focus()
        }
      }
    },
    data () {
      return{
        show: true,
        currentView: 'componentB'
      }
    },
    methods: {
      onAvueEvent(parmfromA){
        console.log(' on avue Event ' +parmfromA )
      },
      toggleCom () {
        if(this.currentView === 'componentB'){
          this.currentView = componentC
        }else{
          this.currentView = componentB
        }
      }
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .tran-enter-active, .tran-leave-active {
    transition: all .5s ease-out
  }
  .tran-enter{
    transform: translateY(-500px);
  }
  .tran-leave-to {
    transform: translateY(500px);
    opacity: 0
  }
</style>




