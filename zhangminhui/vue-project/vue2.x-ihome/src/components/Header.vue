<template>
    <div>
        <div class="nav" ref="navScroll">
    <div class="logo">
      <img src="../assets/img/logo/logo-3.png" alt />
    </div>
    <div class="menu">
      <ul>
        <li class="menu-home">
          Home+
          <div class="menu-home-box">
            <ul class="menu-home-ul">
              <li>Home1</li>
              <li>Home2</li>
              <li>Home3</li>
              <li>Home4</li>
            </ul>
          </div>
        </li>
        <li>About</li>
        <li class="menu-shop">
          Shop+
          <div class="menu-shop-box">
            <ul class="menu-shop-ul">
              <li>Shop Grid</li>
              <li>Shop List</li>
              <li>Shop Details</li>
              <li>wish List</li>
            </ul>
          </div>
        </li>
        <li class="menu-pages">
          Pages+
          <div class="menu-pages-box">
            <ul class="menu-pages-ul">
              <li>Home1</li>
              <li>Home2</li>
              <li>Home3</li>
              <li>Home4</li>
            </ul>
          </div>
        </li>
        <li class="menu-blog">
          Blog+
          <div class="menu-blog-box">
            <ul class="menu-blog-ul">
              <li>Home1</li>
              <li>Home2</li>
              <li>Home3</li>
              <li>Home4</li>
            </ul>
          </div>
        </li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="nav-icon">
      <span class="iconfont icon-fangdajing"></span>
      <span class="nav-icon-shoucang">
        <i class="iconfont icon-shoucang"></i>
        <span class="icon-shoucang-tip">0</span>
      </span>
      <span class="nav-icon-gouwuche">
        <i class="iconfont icon-gouwuche"></i>
        <span class="icon-gouwuche-tip">0</span>
      </span>
      <span class="iconfont icon-caidan"></span>
    </div>
  </div>
  <div class="user">
      <div>
          X
      </div >
      <img src="../assets/img/logo/logo-3.png">
      <div class="userMessage">

      </div>
    </div>
    </div>
  
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
        user:[
            {id:1,text:123456789},
            {id:1,text:123456789},
            {id:1,text:123456789},
            {id:1,text:123456789},
            {id:1,text:123456789},
            {id:1,text:123456789},
        ]
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
          this.$refs.navScroll.className = 'nav-scroll nav'
      } else{
          this.$refs.navScroll.className = 'nav'
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      window.addEventListener('scroll', this.handleScroll)
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
.nav-scroll{
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index:9999;
}
.nav {
  width: 100%;
  height: 130px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 10px 50px;
  box-sizing: border-box;
  min-width: 1170px;
  .logo {
    flex: 2;
    cursor: pointer;
  }
  .menu {
    flex: 3;
    margin-left: 100px;
    z-index:999;
    ul {
      display: flex;
      li {
        list-style: none;
        flex: 1;
        cursor: pointer;
        color: #436372;
        height: 80px;
        line-height: 80px;
      }
      .menu-home {
           &:hover {
          .menu-home-box {
            display: block;
          }
        }
        .menu-home-box {
          display: none;
          position: relative;
          .menu-home-ul {
            background: white;
            position: absolute;
            width: 210px;
            height: 220px;
            border-top: 2px solid rgb(252, 215, 182);
            display: flex;
            flex-flow: column;
            box-sizing: border-box;
            li {
              flex: 1;
              line-height: 55px;
              &:hover {
                color: rgb(252, 215, 182);
              }
            }
          }
        }
      }
      .menu-shop {
           &:hover {
          .menu-shop-box {
            display: block;
          }
        }
        .menu-shop-box {
          display: none;
          position: relative;
          .menu-shop-ul {
            background: white;
            position: absolute;
            width: 210px;
            height: 220px;
            border-top: 2px solid rgb(252, 215, 182);
            display: flex;
            flex-flow: column;
            box-sizing: border-box;
            li {
              flex: 1;
              line-height: 55px;
              &:hover {
                color: rgb(252, 215, 182);
              }
            }
          }
        }
      }
      .menu-pages {
           &:hover {
          .menu-pages-box {
            display: block;
          }
        }
        .menu-pages-box {
          display: none;
          position: relative;
          .menu-pages-ul {
            background: white;
            position: absolute;
            width: 210px;
            height: 220px;
            border-top: 2px solid rgb(252, 215, 182);
            display: flex;
            flex-flow: column;
            box-sizing: border-box;
            li {
              flex: 1;
              line-height: 55px;
              &:hover {
                color: rgb(252, 215, 182);
              }
            }
          }
        }
      }
      .menu-blog {
        &:hover {
          .menu-blog-box {
            display: block;
          }
        }
        .menu-blog-box {
          display: none;
          position: relative;
          .menu-blog-ul {
            background: white;
            display: none;
            position: absolute;
            width: 210px;
            height: 220px;
            border-top: 2px solid rgb(252, 215, 182);
            display: flex;
            flex-flow: column;
            box-sizing: border-box;
            li {
              flex: 1;
              line-height: 55px;
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
    margin-left: 250px;
    box-sizing: border-box;
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
      .icon-shoucang {
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
      cursor: pointer;
      &:hover {
        background: rgb(252, 215, 182);
      }
    }
  }
}
 .user{
     display: none;
     width: 300px;
      height: 1000px;
      position: absolute;
      right: 0;
      top: 0;
      border: 1px solid #cccccc;
      z-index: 2;
      background: white;
  }
</style>