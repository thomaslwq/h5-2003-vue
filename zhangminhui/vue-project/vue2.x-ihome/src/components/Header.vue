<template>
  <div class="box">
    <div class="hidden" v-show="hidden"></div>
    <div class="search" v-show="searchHiddle">
      <span @click="searchHid">X</span>
      <div class="search-box">
        <input type="text" />
        <i class="iconfont icon-fangdajing"></i>
      </div>
    </div>
    <div class="navbox" ref="navScroll">
      <div class="nav">
        <div class="logo">
          <img src="../assets/img/logo/logo.png" alt />
        </div>
        <div class="menu">
          <ul>
            <li class="menu-item" v-for="(item,index) in navmenu" :key="index">
              {{item.text}}
              <div class="menu-item-box" v-show="item.tag">
                <ul class="menu-item-ul">
                  <li v-for="(newItem,ind) in item.childrenMenu" :key="ind">{{newItem}}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-icon">
          <span class="iconfont icon-fangdajing" @click="searchShow"></span>
          <span class="nav-icon-shoucang">
            <i class="iconfont icon-aixin"></i>
            <span class="icon-shoucang-tip">0</span>
          </span>
          <span class="nav-icon-gouwuche">
            <i class="iconfont icon-gouwuche"></i>
            <span class="icon-gouwuche-tip">0</span>
          </span>
          <span class="iconfont icon-caidan" @click="move"></span>
        </div>
      </div>
      <div class="user" ref="users">
        <div class="close" @click="close">X</div>
        <div class="userMessage">
          <div class="userImg">
            <img src="../assets/img/touxiang.png" alt />
          </div>
          <span>{{user.name}}</span>
        </div>
        <div class="email">
          <div>我的邮箱</div>
          <span>{{user.email}}</span>
        </div>
        <div class="phone">
          <div>电话号码</div>
          <span>{{user.phone}}</span>
        </div>
        <div class="address">
          <div>我的地址</div>
          <span>{{user.address}}</span>
        </div>
        <div class="changeMessage">
          <button class="btn" @click="change">修改信息</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      hidden: false,
      searchHiddle: false,
      navmenu: [
        {
          id: 1,
          tag: false,
          text: "主页",
        },
        {
          id: 2,
          tag: true,
          text: "家居用品",
          childrenMenu: ["保暖防护", "收纳用品", "浴室洗晒", "居家布艺"],
        },
        {
          id: 3,
          tag: true,
          text: "品牌",
          childrenMenu: ["顾家家居", "喜临门", "中派", "舍己屋"],
        },
        {
          id: 4,
          tag: true,
          text: "装饰品",
          childrenMenu: ["装饰画", "照片墙", "十字绣"],
        },
        {
          id: 5,
          tag: true,
          text: "家纺",
          childrenMenu: ["清凉夏被", "抱枕靠垫"],
        },
        {
          id: 6,
          tag: true,
          text: "儿童",
          childrenMenu: ["儿童纺织", "儿童饰品", "儿童灯具"],
        },
      ],
      user: {
        name: "杨洋",
        email: "1239201872@qq.com",
        phone: 13156879024,
        address: "广东省深圳市宝安区西部硅谷",
      },
      chengeMess: { name: false, email: false, phone: false, address: false },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleScroll() {
      let scrollY = document.documentElement.scrollTop;
      if (scrollY > 200) {
        this.$refs.navScroll.id = "nav-scroll";
        this.hidden = true;
      } else {
        this.$refs.navScroll.id = "";
        this.hidden = false;
      }
    },
    move() {
      this.$refs.users.style.display = "block";
    },
    close() {
      this.$refs.users.style.display = "none";
    },
    change() {
      this.$router.push("/changeMessage");
    },
    searchShow() {
      this.searchHiddle = true;
    },
    searchHid() {
      this.searchHiddle = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  #nav-scroll {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 9999;
  }
  .hidden {
    width: 100%;
    height: 130px;
  }
  .search-box {
    width: 730px;
    height: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      width: 730px;
      height: 70px;
      border-radius: 35px;
      border: 0;
      outline: none;
      padding-left: 20px;
      box-sizing: border-box;
    }
    i {
      display: inline-block;
      width: 50px;
      height: 50px;
      background: rgb(252, 215, 182);
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      font-size: 30px;
      color: white;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .search {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.5);
    min-width: 1280px;
    span {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      position: absolute;
      background: white;
      font-weight: bolder;
      font-size: 18px;
      color: rgb(252, 215, 182);
      top: 5%;
      right: 5%;
      cursor: pointer;
    }
  }
  .navbox {
    width: 100%;
    position: relative;
    z-index: 9999;
    .nav {
      width: 100%;
      height: 130px;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding: 10px 50px;
      box-sizing: border-box;
      min-width: 1280px;
      .logo {
        flex: 2;
        cursor: pointer;
        img {
          width: 150px;
          height: 40px;
        }
      }
      .menu {
        flex: 3;
        margin-left: 50px;
        ul {
          display: flex;
          li {
            list-style: none;
            flex: 1;
            cursor: pointer;
            color: #436372;
            height: 80px;
            line-height: 80px;
            font-size: 18px;
            text-align: center;
            font-weight: 500;
          }
          .menu-item {
            &:hover {
              .menu-item-box {
                display: block;
              }
            }
            .menu-item-box {
              display: none;
              position: relative;
              .menu-item-ul {
                background: white;
                position: absolute;
                width: 200px;
                border-top: 2px solid rgb(252, 215, 182);
                display: flex;
                flex-flow: column;
                box-sizing: border-box;
                li {
                  flex: 1;
                  height: 55px;
                  line-height: 55px;
                  box-sizing: border-box;
                  text-align: left;
                  padding-left: 20px;
                  font-size: 16px;
                  font-weight: 400;
                  &:hover {
                    color: rgb(252, 215, 182);
                  }
                }
              }
            }
          }
        }
      }

      .nav-icon {
        flex: 2;
        position: relative;
        margin-left: 50px;
        display: flex;
        justify-content: flex-end;
        .icon-fangdajing {
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgb(237, 241, 244);
          text-align: center;
          line-height: 50px;
          color: white;
          cursor: pointer;
          &:hover {
            background: rgb(252, 215, 182);
          }
        }

        .nav-icon-shoucang {
          display: inline-block;
          width: 60px;
          height: 50px;
          border-radius: 25px 0 0 25px;
          background: rgb(252, 215, 182);
          margin-left: 30px;
          padding: 10px 20px;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          &:hover {
            color: white;
            transition: 0.5s;
            .icon-shoucang-tip {
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              transition: 0.5s;
              color: rgb(252, 215, 182);
            }
          }
          .icon-aixin {
            display: inline-block;
            width: 30px;
            text-align: center;
            line-height: 30px;
          }
          .icon-shoucang-tip {
            font-weight: 100;
            font-size: 12px;
            display: block;
            position: absolute;
            top: 5px;
            left: 40px;
            width: 15px;
            height: 15px;
            background: white;
            color: black;
            border-radius: 50%;
            text-align: center;
            line-height: 15px;
          }
        }
        .nav-icon-gouwuche {
          display: inline-block;
          width: 60px;
          height: 50px;
          border-radius: 0 25px 25px 0;
          margin-right: 30px;
          background: rgb(252, 215, 182);
          padding: 10px 20px 10px 0;
          box-sizing: border-box;
          position: relative;
          cursor: pointer;
          &:hover {
            color: white;
            transition: 0.5s;
            .icon-gouwuche-tip {
              width: 20px;
              height: 20px;
              text-align: center;
              line-height: 20px;
              transition: 0.5s;
              color: rgb(252, 215, 182);
            }
          }
          .icon-gouwuche {
            margin-right: 70px;
            padding-left: 20px;
            border-left: 1px solid white;
            box-sizing: border-box;
            display: inline-block;
            text-align: center;
            line-height: 30px;
          }
          .icon-gouwuche-tip {
            font-weight: 100;
            font-size: 12px;
            display: block;
            position: absolute;
            top: 5px;
            left: 30px;
            width: 15px;
            height: 15px;
            background: white;
            color: black;
            border-radius: 50%;
            text-align: center;
            line-height: 15px;
          }
        }
        .icon-caidan {
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgb(163, 187, 200);
          text-align: center;
          line-height: 50px;
          font-size: 26px;
          cursor: pointer;
          transition: all 0.5s;
          &:hover {
            background: rgb(252, 215, 182);
            color: #fff;
          }
        }
      }
    }
    .openUser {
      transition: go 2s;
    }
    .user {
      display: none;
      position: absolute;
      top: 0;
      width: 300px;
      height: 600px;
      position: absolute;
      right: 0;
      top: 0;
      border: 1px solid #cccccc;
      z-index: 2;
      background: white;
      .close {
        margin: 20px;
        cursor: pointer;
        font-weight: bolder;
      }
      .userMessage {
        width: 100px;
        margin: 10px auto;
        .userImg {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          display: inline-block;
          width: 100px;
          height: 30px;
          text-align: center;
          line-height: 30px;
        }
        .users-inp {
          width: 200px;
          height: 30px;
          outline: none;
        }
      }
      .email {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        div {
          margin: 10px 0;
          font-size: 22px;
          font-weight: bold;
          color: rgb(252, 215, 182);
        }
      }
      .phone {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        margin: 10px 0;
        div {
          margin: 10px 0;
          font-size: 22px;
          font-weight: bold;
          color: rgb(252, 215, 182);
        }
      }
      .address {
        width: 100%;
        height: 100px;
        padding: 10px;
        box-sizing: border-box;
        div {
          margin: 10px 0;
          font-size: 22px;
          font-weight: bold;
          color: rgb(252, 215, 182);
        }
      }
      .changeMessage {
        width: 100%;
        .btn {
          width: 100px;
          height: 30px;
          border-radius: 5px;
          margin: 10px 100px;
          border: 0;
          font-weight: bolder;
          background: rgb(252, 215, 182);
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>