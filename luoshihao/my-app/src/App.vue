<template>
  <div id="app">
    <el-container>
      <!-- header!!!!!!!!! -->
      <el-header style="height:8vh">
        <!-- log!!!!!!!! -->
        <img src="./assets/logo.png" alt="" />
       商品管理
      </el-header>
      <!-- 版心内容 -->
      <el-container style="height:92vh">
        <!-- 侧边导航栏 -->
        <el-aside width="200px">
          <!-- 用户信息 -->

          <!-- 导航栏 开始-->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">后台主页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>代理商</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">代理商管理</el-menu-item>
                <el-menu-item index="2-2">添加代理商</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-shopping-bag-2"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">商品添加</el-menu-item>
                <el-menu-item index="3-2">商品列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
              <i class="el-icon-s-data"></i>
              <span slot="title">统计报表</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">用户权限</span>
            </el-menu-item>
            <el-menu-item index="6">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">知识产权</span>
            </el-menu-item>
          </el-menu>
          <!-- 导航栏 结束-->
        </el-aside>
        <el-main>
          <!-- 这里是内容展示 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
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
};
</script>

<style lang="less">
body{
  padding: 0;
  margin: 0;
}
//  布局css
.el-header {
  background-color: #409EFF;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  font-size: 34px;
  img {
    width: 50px;
    height: 50px;
    float: left;
  }
}
.el-aside {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
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
//   侧边栏css
</style>
