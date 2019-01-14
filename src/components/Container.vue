<template>
    <el-container>
        <el-header>绩效考核</el-header>
            <el-container>
                <el-aside width="200px">
                    <Aside></Aside>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
    </el-container>
</template>

<script>
    //es5写法，引入侧边栏
     export default {
        components: {
            Aside:require('./Aside.vue').default
        },
        methods: {},
    }
</script>


<style>
  .el-header, .el-footer {
    background-color: #ffffcc;
    color: #333;
    text-align: left;;
    line-height: 60px;
    margin: 0;
  }
  
  .el-aside {
    background-color: #ffcccc;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #ccffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>