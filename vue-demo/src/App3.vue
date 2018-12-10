<!--<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>-->
<template>
  <div title="sdfg">
    <p v-html="nihao"></p>
    <p v-text="hello"></p>
    {{ num+1 }}
    {{ hello }}
    {{ status ? 'success' : 'fail' }}
    <ul>
      <li v-for="(item ,index) in list" :class="{odd: index%2}">{{ item.name }} - {{ item.price }} - {{ index }}</li>
    </ul>
  <!--表单事件绑定-->
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ getmessageWithoutNum() }}</p>

    <input type="checkbox" value="apple" v-model="checkedNames">
    <label>apple</label>
    <input type="checkbox" value="banana" v-model="checkedNames">
    <label>banana</label>
    <input type="checkbox" value="orange" v-model="checkedNames">
    <label>orange</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>
    <input type="radio" value="男" v-model="checkRadio">
    <label>男</label>
    <input type="radio" value="女" v-model="checkRadio">
    <label>女</label>
    <br>
    <span>我是: {{ checkRadio }}</span>
    <br>
    <select name="名字" v-model="selectName">
      <option v-for="item in options" :value="item.value">{{ item.name }}</option>
    </select>
    <span>我是: {{ selectName }}</span>
    <br>
  </div>
</template>
<script>
  //import componentA from './components/a.vue'
  import Vue from 'vue' //全局定义Vue

  export default{

    data () {
    return{
        nihao: '<span>html</span>',
        hello: 'world',
        num: 1,
        status: true,
        list: [
          {
            name: 'apple',
            price: 34
        },
          {
            name: 'orgin',
            price: 15
          },
          {
            name: 'bananan',
            price: 43
          }
        ],
        message: '',
        checkedNames: [],
        checkRadio: '',
        selectName: '请选择',
        options: [
          {
            name: '小红',
            value: 0
          },
          {
            name: '花花',
            value: 1
          },
          {
            name: '天天',
            value: 2
          }
        ]
    }
  },
    watch:{
      message: function(val, oldVal){
          console.log(val, oldVal)
      }
    },
    computed:{
      messageWithoutNum (){
        return this.message.replace(/\d/g, '')
      }
    },
    methods: {
      getmessageWithoutNum (){
        return this.message.replace(/\d/g, '')
      }
    }
}
</script>

