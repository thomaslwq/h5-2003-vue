<template>
  <div class="bar">
    <div class="bar-left">
      <a href="#">饿了么商家版</a>
    </div>
    <div class="bar-right">
      <div class="search">
        <el-input
          placeholder="搜索订单"
          prefix-icon="el-icon-search"
          size="small"
          v-model="text"
        >
        </el-input>
      </div>
      <div class="shopname">{{ shopName }}</div>
      <div class="isopen">
        <a href="#" @click="isShow = true">{{
          isOpen ? "营业中" : "打烊了"
        }}</a>
        <i class="el-icon-caret-bottom"></i>
        <ul>
          <li><a href="#" @click="isOpen = true">open</a></li>
          <li><a href="#" @click="isOpen = false">close</a></li>
        </ul>
      </div>
      <div class="other">
        <a href="#">
          <i class="el-icon-bell"></i>
        </a>
        <a href="#">
          <i class="el-icon-question"></i>
        </a>
        <a href="#">
          <i class="el-icon-user"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.search .el-input__inner {
  // 修改 el-input 默认属性
  border-radius: 16px;
}
</style>
<style lang="scss" scoped>
.bar {
  height: 61px;
  border-bottom: 1px solid #e4e7ed;
  .bar-left {
    float: left;
    a {
      display: inline-block;
      // font-size: 14px;
      width: 104px;
      height: 57px;
      text-align: center;
      margin-left: 20px;
      line-height: 57px;
      color: #497db7;
      border-bottom: 2px solid #0091ea;
    }
  }
  .bar-right {
    float: right;
    width: 640px;
    height: 60px;
    .search {
      float: left;
      padding-top: 14px;
      width: 230px;
    }
    .shopname {
      float: left;
      line-height: 60px;
      width: 160px;
      text-align: center;
    }
    .isopen {
      text-align: center;
      width: 100px;
      float: left;
      line-height: 60px;
      a {
        padding: 0 10px;
      }
      ul {
        display: none;
        border: 1px solid #e4e7ed;
        li {
          line-height: 30px;
          margin-left: -13px;
        }
      }
    }
    .isopen:hover ul {
      display: block;
    }
    .other {
      float: left;
      line-height: 60px;
      a {
        font-size: 16px;
        padding: 0 12px;
        color: #777779;
      }
    }
  }
}
</style>
<script>
export default {
  name: "Bar",
  data() {
    return {
      shopName: "斟沏茶咖(杨村店)",
      isOpen: true,
      isShow: false,
      text: ""
    };
  }
};
</script>
