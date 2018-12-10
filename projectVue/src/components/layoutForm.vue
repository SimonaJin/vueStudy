<template>
  <div class="login-form">
      <div class="g-form">
          <div class="g-form-line">
            <span class="g-form-label">用户名：</span>
            <div class="g-form-input">
              <input type="text" class="g-form-input" placeholder="请输入用户名" v-model="usernameModel">
            </div>
            <span class="g-form-error">{{ userErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
            <span class="g-form-label">密码：</span>
            <div class="g-form-input">
              <input type="text" class="g-form-input" placeholder="请输入密码" v-model="passwordModel">
            </div>
            <span class="g-form-error">{{ passErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
            <div class="g-form-btn">
              <a class="button" @click="onLogin">登录</a>
            </div>
          </div>
          <p>{{ errorText }}</p>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      userFlag: false,
      passwordFlag: false
    }
  },
  computed:{
    userErrors (){
      let errorText, status
      if(!/@/g.test(this.usernameModel)){
          status = false
          errorText = '不包含@'
      }else{
        status = true
        errorText = ''
      }
      if(!this.userFlag){
        errorText = ''
        this.userFlag = true
      }
      return{
        status: status,
        errorText
      }
    },
    passErrors (){
      let errorText, status
      if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status = false
        errorText = '密码不是1-6位'
      }else{
        status = true
        errorText = ''
      }
      if(!this.passwordFlag){
        errorText = ''
        this.passwordFlag = true
      }
      return{
        status: status,
        errorText
      }
    }
  },
  methods:{
    onLogin(){
      if(!this.userErrors.status || !this.passErrors.status ){
        this.errorText = '部分选项不通过'
      }else{
        this.errorText = ''
        this.$http.post('api/login')
          .then((resdata) => {
            this.$emit('has-log', resdata)
          }),(error) => {
            console.log(error)
        }

      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
