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
      <el-aside :width="collapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleFold">|||</div>
        <el-menu
          background-color="#262c34"
          text-color="#fff"
          active-text-color="#4ca0fb"
          :unique-opened="true"
          :collapse="collapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- router == :router='true' 简写-->
          <!-- 一级菜单模板区域 -->
          <!-- index只接受字符串，所以id后面加个空字符转字符串-->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <template slot="title">
              <!-- 图标 -->
              <i :class="icons[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单模板 -->
            <!-- 开启router模式后 拼接路径/path-->
            <el-menu-item
              :index="'/'+val.path"
              v-for="val,idx in item.children"
              :key="val.id"
              @click="activeState('/'+val.path)"
            >
              <!-- 文本 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <span>{{val.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!--  -->
        </el-menu>
      </el-aside>



      <!-- 主体main区域 -->
      <el-main>
        <!-- main区域设置个占位符 内容出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 菜单栏的数据
      menulist: [],
      // 一级菜单的iconfont
      icons: {
        '125': 'iconfont icon-yonghuguanli',
        '103': 'iconfont icon-zhangshangcaifuyemianshoujiban345 ',
        '101': 'iconfont icon-liebiao1',
        '102': 'iconfont icon-dingdan',
        '145': 'iconfont icon-caidanshujutongji-copy-copy-copy'
      },
      // 侧边栏折叠
      collapse: false,
      // 二级菜单被激活项
      activePath: ''
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 退出触发事件
    loginOut() {
      window.sessionStorage.clear()
      this.$message({
        message: '退出成功',
        type: 'success',
        duration: 700
      })
      this.$router.push('/login')
    },
    // 页面创建时获取菜单栏数据
    // 因为http返回值是promise，用async和await简化
    async getMenuList() {
      const res = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    },
    // 菜单栏 折叠按钮
    toggleFold() {
      this.collapse = !this.collapse
    },
    // 保存二级菜单激活的状态，动态绑定
    activeState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
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
        font-size: 22px;
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
      .toggle-button {
        color: #fff;
        font-size: 14px;
        background-color: #4b5063;
        text-align: center;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        letter-spacing: 1px;
      }
      .el-menu {
        border: none;
      }
      .iconfont {
        margin-right: 10px;
      }
    }

    .el-main {
      background-color: #eaedf1;
    }
  }
}
</style>