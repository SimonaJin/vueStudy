
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <button @click="addOne"> add one </button>
    <button @click="minuOne"> minus one </button>
  </div>

</template>
<script>
  export default{
    data() {
      return {
        msg: 'I am Banana',
        price: 15
      }
    },
    methods:{
      getParam() {
        console.log(this.$route.params)
      },
      addOne() {
        this.$store.commit('increment', this.price)
      },
      minuOne() {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>


