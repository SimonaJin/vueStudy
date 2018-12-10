<template>
  <div id="app">
    <!--123-->
    <!--<router-view></router-view>-->
    <!--<router-link :to="{ name: 'apple', params: {color: 'red'}}">to apple</router-link>-->
    <!--<router-link :to="{ path:'banana'}">to banana</router-link>-->

    {{ totalPrice }}
    <apple></apple>
    <banana></banana>
  </div>

</template>


<script>
  import Apple from './components/apple.vue'
  import Banana from './components/banana.vue'
  export default {
    name:'app',
    components: {
      Apple,Banana
    },
    computed: {
      totalPrice(){
//        return this.$store.state.totalPrice
        return this.$store.getters.getTotal
      }
    }
  }
</script>
