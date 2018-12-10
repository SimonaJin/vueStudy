<template>
  <div id="app">
    <!--头部-->
    <v-header :seller="seller"></v-header>
    <!--切换-->
    <div  class="tab">
        <router-link  v-for="item in tabsList" tag="div" :to="{ name: item.path }" active-class="active" :key="item.path"  class="tab-item">
          <a>{{ item.name }}</a>
        </router-link>
    </div>
    <!--中间内容-->
    <div class="content">
      <keep-alive>
        <router-view :seller="seller">
        </router-view>
      </keep-alive>
    </div>
    <!--底部-->
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  const ERR_OK = 0;

export default {
  name: 'App',
  components: {
    VHeader: header
  },
  data() {
    return {
      tabsList: [
        {
          name: '商品',
          path: 'goods',
          active: true
        },
        {
          name: '评论',
          path: 'ratings',
          active: false
        },
        {
          name: '商家',
          path: 'seller',
          active: false
        },
      ],
      seller: {}
    }
  },
  created() {
    this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data);
      }
    });
  },

}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      //border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        &.active > a
          color: rgb(240, 20, 20)
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)


</style>
