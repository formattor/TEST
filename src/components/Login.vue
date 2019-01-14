<template>
    <div class="login">
        用户名：
        <el-input
            placeholder="请输入邮箱或用户名"
            v-model="input2">
        </el-input><br>
        密码：
        <el-input
            placeholder="请输入密码"
            v-model="input21">
        </el-input>
        <el-button type="primary" plain @click="home">登陆</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      input2: '',
      input21: ''
    }
  },
  methods: {
      home:function(){
          if(this.input2=='张与时'&&this.input21=='123'){
                this.$router.push({path:'/'})
          }else{
              alert("账号或者密码错误")
          }
      }
  }
}
</script>

<style>
.login{
    background-color: #ccffff;
    height: 200px;
    width: 250px;
    padding: 30px;
    color: blueviolet;
}
</style>
