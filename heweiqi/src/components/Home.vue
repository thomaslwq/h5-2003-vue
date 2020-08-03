<!-- 主页组件 -->
<template>
  <el-container>
    <!-- 主页的头部区域 -->
    <el-header>
      <div class="home-header-left">
        <img src="../assets/head.png" alt />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="loginOut">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <el-menu background-color="#262c34" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单模板区域 -->
          <el-submenu index="1">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>
            <!-- 二级菜单模板 -->
            <el-menu-item>
              <!-- 文本 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!--  -->
          
        </el-menu>
      </el-aside>
      <!-- 主体main区域 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    loginOut() {
      window.sessionStorage.clear()
      this.$message({
        message: '退出成功',
        type: 'success',
        duration: 700
      })
      this.$router.push('/login')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: #373d41;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0;
    .home-header-left {
      display: flex;
      align-items: center;
      img {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        margin-left: 15px;
      }
      span {
        color: #fff;
        font-size: 20px;
        margin-left: 15px;
      }
    }
    .el-button {
      margin-right: 15px;
    }
  }

  .el-container {
    .el-aside {
      background-color: #333744;
    }

    .el-main {
      background-color: #eaedf1;
    }
  }
}
</style>