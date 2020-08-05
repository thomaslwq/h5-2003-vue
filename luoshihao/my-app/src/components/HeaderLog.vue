!<!--  -->
<template>
  <div class="app">
    <h2 class="app-span">啊翔</h2>

    <div class="app-pic">
      <span class="el-dropdown-link" @click.stop="showImg">
        <el-avatar
          class="app-img"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </span>
      <div class="app-menu" v-show="isBar">
        <div class="app-item-p">
          <i class="el-icon-user-solid"></i>
          <span>个人信息</span>
        </div>
        <div class="app-item-t">
          <i class="el-icon-error"></i>
          <span>退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isBar: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showImg() {
      this.isBar = !this.isBar;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // let _this = this;
    // _this.blurEvent = function () {
    //   _this.isBar = !_this.isBar;
    // };
    // window.addEventListener("click", _this.blurEvent);
    //   let _this = this;
    this.blurEvent = () => {
      this.isBar = false;
    };
    window.addEventListener("click", this.blurEvent);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    //   销毁事件
    window.removeEventListener("click", this.blurEvent);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.app {
  height: 100%;
  width: 100%;
  margin-right: 100px;
  display: flex;
  position: relative;
  .app-span {
    font-family: "Comic Sans MS";
    text-align: center;
    line-height: 110%;
    color: white;
    font-size: 20px;
  }

  .el-dropdown-link {
    margin-left: 20px;
    text-align: center;
    .app-img {
      width: 45px;
      height: 45px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
  .app-menu {
    position: absolute;
    background: #fff;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    top: 65px;
    right: 65px;
    padding: 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.4);
    flex-direction: column;
    border-radius: 10px;
    user-select: none;

    i {
      float: left;
      line-height: 30px;
      font-size: 20px;
    }
    .app-item-p {
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 10px;
      padding: 8px;
      border-radius: 10px;
      cursor: pointer;
    }
    .app-item-t {
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 10px;
      padding: 8px;
      border-radius: 10px;
      letter-spacing: 10px;
      cursor: pointer;
    }
    .app-item-p:hover {
      background: rgb(209, 203, 209);
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .app-item-t:hover {
      background: rgb(209, 203, 209);
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>