<template>
    <el-row class="tac">
        <el-col :span="24">
            <!-- <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ffcccc"
            text-color="#000"
            active-text-color="#cccc">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu> -->
            <el-menu default-active="2" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose"
            unique-opened
            router
            background-color="#ffcccc"
            text-color="#000"
            active-text-color="#cccc">
            <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                    <el-menu-item index="1-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
            </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>