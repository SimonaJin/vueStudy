
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <!--<button @click="getParam"> get param </button>-->
    <button @click="addOne"> add one </button>
    <button @click="minuOne"> minus one </button>
  </div>

</template>
<script>
  export default{
    data() {
      return {
        msg: 'I am Apple',
        price:5
      }
    },
    methods:{
      getParam() {
        console.log(this.$route.params)
      },
      addOne() {
        this.$store.dispatch('increase', this.price)
      },
      minuOne() {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>


