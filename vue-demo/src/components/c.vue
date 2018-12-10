<template>
  <div>
    {{ hello }}
    <button @click="AvueEvent">emit</button>
  </div>
</template>
<script>
  export default {

    data (){
      return {
        hello: 'i am components c'
      }
    },
    methods:{
      AvueEvent(){
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>
