<template>
    <div class="bgimg">
        <!-- <div class="bgimg">
            <img src="../iamges/mountain house.jpg" alt="" 
            height="1300px"
            width="2823px">
        </div> -->
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
            <div style="margin:20px">
            <el-button type="primary" style="display:block;margin:0 auto" plain @click="home">登陆</el-button>
            </div>
        </div>
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
                this.$router.push({path:'/home'})
          }else{
            this.$notify.error({
            title: '错误',
            message: '您输入错误'
            });
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
    margin:230px auto;
    border-radius: 10px;
    filter:alpha(Opacity=80);
    -moz-opacity:0.9;
    opacity: 0.9;
}
.bgimg{
    position           : absolute;
    width              : 100%;
    height             : 100%;
    background-image   : url("./../iamges/MHome.jpg");
    background-size    : cover;
    background-position: center;
}
</style>
