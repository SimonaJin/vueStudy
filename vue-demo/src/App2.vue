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
    <!--方法一：-->
    <!--<ul>-->
      <!--<li v-for="item in list" v-text="item.name + '-' + item.price"></li>-->
    <!--</ul>-->
    <!--方法二 序号-->
    <ul>
      <li v-for="(item ,index) in list" :class="{odd: index%2}">{{ item.name }} - {{ item.price }} - {{ index }}</li>
    </ul>
    <!--<ul>-->
      <!--<li v-for="(value, key) in ojbList">{{ key + '-' + value }}</li>-->
    <!--</ul>-->
    <!--<avue  v-for="(value, key) in ojbList" :key="key"> </avue>-->
    <button v-on:click="addItem">addItem</button>
    <a v-bind:href="link" title="hello" :class="[classA, {'red-font':hasError}]" :style="linkCss">To baidu </a>
    <!--<avue v-bind:dataA="dataA"></avue>-->
    <a v-if="ispartA">partA</a>
    <a v-else>no Data</a>
    <!--<a v-show="!ispartA">partB</a>-->
    <button v-on:click="toggle">toggle</button>
    <input @keydown.enter="onKeydown">
    <avue @my-event="onAvueEvent"></avue>
  </div>
</template>
<script>
  import componentA from './components/a.vue'
  import Vue from 'vue' //全局定义Vue
  export default{
    components: {
      avue: componentA
    },
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
        ojbList: {
          name: 'strawberry',
          price: 56,
          color: 'red',
          weight:10
        },
        link: 'http://www.baidu.com',
        dataA: 'baidu',
        classStr: 'red',
        className: {
          'color': true,
          'fontSize': true
        },
        classList: ['blue', 'red'],
        classA: 'black',
        hasError: true,
        linkCss: {
          'color': 'red',
          'font-size': '20px'
        },
        ispartA: true
    }
  },
    methods: {
      addItem: function(){ //简写 addItem (){}
//        this.list.push({
//          name: 'pinapple',
//          price: 234
//        })
        Vue.set(this.list, 1,{//Vue 需全局定义
          name: 'pinapple',
          price: 234
        })
      },
      toggle (){
        this.ispartA= !this.ispartA;
      },
      onKeydown(){
         console.log(' on key down ')
      },
      onAvueEvent(parmfromA){
        console.log(' on avue Event ' +parmfromA )
      }
    }
}
</script>
<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
