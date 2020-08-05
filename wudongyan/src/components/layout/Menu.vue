<template>
  <div>
    <el-menu
      class="menu"
      :collapse="isCollapse"
      default-active="1"
      :router="isRouter"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(menu, index) in menulist">
        <el-menu-item
          v-if="!menu.childList"
          :index="menu.router"
          :key="index"
        >
          <i :class="menu.icon"></i>
          <span>{{ menu.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="menu.router" :key="index">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(item, i) in menu.childList"
              :tabindex="i"
              :index="item.router"
              :key="i"
              >{{ item.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      isCollapse: false,
      isRouter: true,
      menulist: [
        {
          name: "首页",
          router: "/index",
          icon: "el-icon-s-home",
        },
        {
          name: "订单",
          router: "/order",
          icon: "el-icon-s-order",
          childList: [
              {name:"订单处理",router:"/orders/process"},
              {name:"订单查询",router:"/orders/search"},
              {name:"索赔中心",router:"/orders/property"},
              {name:"订单设置",router:"/orders/setting"},
              {name:"企业订单",router:"/orders/reservation"}
          ]
        },
        {
          name: "商品",
          router: "/goods",
          icon: "el-icon-s-goods",
          childList: [{ name: "商品详情", router: "/goods/detail" }]
        },
        {
          name: "外卖券",
          router: "/ticket",
          icon: "el-icon-s-ticket",
          childList: [{ name: "demo", router: "/goods/demo" }]
        },
        {
          name: "顾客",
          router: "/customer",
          icon: "el-icon-s-custom",
          childList: [{ name: "demo", router: "/customer/demo" }]
        },
        {
          name: "营销",
          router: "/marketing",
          icon: "el-icon-s-marketing",
          childList: [
            {name:"营销中心",router:"/marketing/center"},
            {name:"我的活动",router:"/marketing/activities"}
          ]
        },
        {
          name: "数据",
          router: "/data",
          icon: "el-icon-s-data",
          childList: [                        
            {name:"数据中心",router:"/datacenter"},
            {name:"营销分析",router:"/mkAnalytics"},
            {name:"数据下载",router:"/datadownload"},
            {name:"行业复苏",router:"/recovery"}
          ]
        },
        {
          name: "财务",
          router: "/finance",
          icon: "el-icon-s-finance",
          childList: [{ name: "demo", router: "/customer/demo" }]
        },
        {
          name: "门店",
          router: "/store",
          icon: "el-icon-s-shop",
          childList: [{ name: "门店信息", router: "/store/info" }]
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {},
  mounted: function() {
    const that = this;
    window.onresize = () => {
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      if (w < 960) {
        that.isCollapse = true;
      }
      if (w >= 960) {
        that.isCollapse = false;
      }
    };
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang="scss" scoped>
.menu:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 61px);
}
</style>
