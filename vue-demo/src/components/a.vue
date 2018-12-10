<template>
  <div>
    {{ hello }}
    {{ myValue }}
    <button @click="AvueEvent">emit</button>
    <slot name="header">no header</slot>
    <slot name="footer">no footer</slot>
  </div>
</template>
<script>
  export default {
    props: {
      'my-value': [Number, String]
    },
    data (){
      return {
        hello: 'i am components a'
      }
    },
    methods:{
      AvueEvent(){
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>
