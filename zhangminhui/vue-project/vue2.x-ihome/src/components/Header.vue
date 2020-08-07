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
    <div class="navbox" :id="navScroll">
      <div class="nav">
        <div class="logo" @click="go">
          <img src="../assets/img/logo/logo.png" alt />
        </div>
        <div class="menu">
          <ul>
            <li class="menu-item" @click="go">
              主页
            </li>
            <li class="menu-item" @mouseenter="currentMenu='series'" @mouseleave="currentMenu=''">
              家居用品
              <div class="menu-item-box" v-show="currentMenu==='series'">
                <ul class="menu-item-ul">
                  <li v-for="(newItem,index) in seriesMenu" :key="newItem.seriesID+index"
                  @click="goProductGrid(newItem.seriesID)"
                  >{{newItem.seriesName}}</li>
                </ul>
              </div>
            </li>
            <li class="menu-item" @mouseenter="currentMenu='sort'" @mouseleave="currentMenu=''">
              品牌
              <div class="menu-item-box" v-show="currentMenu==='sort'">
                <ul class="menu-item-ul">
                  <li v-for="(newItem,index) in sortMenu" :key="newItem.sortID+index"
                  @click="goProductGrid(newItem.sortID)"
                  >{{newItem.sortName}}</li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              装饰品
              <div class="menu-item-box" v-show="currentMenu==='ornament'">
                <ul class="menu-item-ul">
                  <li v-for="(newItem) in seriesMenu" :key="newItem.seriesID">{{newItem.seriesName}}</li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              家纺
              <div class="menu-item-box" v-show="currentMenu==='textiles'">
                <ul class="menu-item-ul">
                  <li v-for="(newItem) in seriesMenu" :key="newItem.seriesID">{{newItem.seriesName}}</li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              儿童
              <div class="menu-item-box" v-show="currentMenu==='children'">
                <ul class="menu-item-ul">
                  <li v-for="(newItem) in seriesMenu" :key="newItem.seriesID">{{newItem.seriesName}}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-icon">
          <span class="iconfont icon-fangdajing" @click="searchShow"></span>
          <span class="nav-icon-shoucang"  @click="GotoWish">
            <i class="iconfont icon-aixin"></i>
            <span class="icon-shoucang-tip">{{wishNember}}</span>
          </span>
          <span class="nav-icon-gouwuche"  @click="GotoCart">
            <i class="iconfont icon-gouwuche"></i>
            <span class="icon-gouwuche-tip">0</span>
          </span>
          <span class="iconfont icon-caidan" @click="move"></span>
        </div>
      </div>
      <div class="userBox" ref="userBox">
        <div class="user" ref="users">
          <div class="close" @click="close">X</div>
          <div class="NOLogin" v-if="!isLogin">
            还没登录哦，点我去
            <span @click="Login">登录</span>
          </div>
          <div v-else>
            <div class="userMessage">
              <div class="userImg">
                <img :src="'http://175.24.122.212:8989/apiServer'+user.headPortrait" alt />
              </div>
              <span>{{user.username}}</span>
            </div>
            <div class="email">
              <div>我的邮箱</div>
              <span>{{user.email}}</span>
            </div>
            <div class="phone">
              <div>电话号码</div>
              <span>{{user.telephone}}</span>
            </div>
            <div class="address">
              <div>我的地址</div>
              <span>{{user.addresses}}</span>
            </div>
            <div class="changeMessage">
              <button class="btn1" @click="change">修改信息</button>
              <button class="btn2" @click="quit">退出登录</button>
            </div>
          </div>
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
      navScroll:false,
      wishNember:0,
      currentMenu:'',
      isLogin: false,
      hidden: false,
      searchHiddle: false,
      seriesMenu:[],
      sortMenu:[],
      user: {},
      chengeMess: { name: false, email: false, phone: false, address: false },
      touxiang:""
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
      if (scrollY > 130) {
        this.navScroll = "navScroll"
        this.hidden = true;
      } else {
        this.navScroll = false
        this.hidden = false;
      }
    },
    go(){
      if(this.$route.name==="Home"){
        return
      }else{
        this.$router.push("/")
      }
    },
    move() {
      this.$refs.userBox.style.display = "block";
      this.$refs.userBox.style.background = "rgba(0,0,0,.5)";
      this.$refs.users.className = "openUser user";
    },
    close() {
      this.$refs.users.className = "closeUser user";
      this.$refs.userBox.style.background = "rgba(0,0,0,0)";
      setTimeout(() => {
        this.$refs.userBox.style.display = "none";
      }, 500);
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
    GotoWish() {
      this.$router.push("/Wish");
    },
    goProductGrid:function(id){
      console.log(this.$route.name)
      if(this.$route.name==="Productgrid"){
        this.$emit('post-id',id)
      }else{
        this.$router.push({
              name:'Productgrid',
              params:{
                  id:id
              }
          })
      }
    },
     GotoCart() {
        this.$router.push("/Cart");
    },
    quit() {
      localStorage.removeItem("userID");
      this.isLogin = false
      this.$router.push("/")
    },
    Login() {
      this.$router.push("/Login");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.$axios.get('api/admin/getAllSeries').then(res=>{
      this.seriesMenu = res.results
    });
    this.$axios.get('api/admin/getAllSort').then(res=>{
      this.sortMenu = res.results
    })
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
    var userID = localStorage.getItem("userID");
    window.addEventListener("scroll",this.handleScroll);
    if (userID) {
      this.isLogin = true;
      // console.log(userID);
      this.$axios
        .post(
          "api/user/getUserInfoByID",
          this.$qs.stringify({
            userID: userID,
          })
        )
        .then((res) => {
          if (res.code == 200) {
            this.user = res.results[0];
            console.log(res.results)
          }
        });
      //   this.$axios
      // .post(
      //   "api/product/getWishList",
      //   this.$qs.stringify({
      //     userID: userID,
      //   })
      // )
      // .then((res) => {
      //   if (res.code == 200) {
      //     this.wishNember = res.results.length
      //   }else{
      //     this.wishNember = 0
      //   }
      // });
    }else{
      this.isLogin = false;
    }
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
  #navScroll {
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 9999;
    animation: go 1s linear;
  }
  @keyframes go {
    from {
      top: -130px;
    }
    to {
      top: 0;
    }
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
      cursor: pointer;
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
      animation: gogo 0.5s linear;
    }
    .closeUser {
      animation: to 0.5s linear;
    }
    @keyframes gogo {
      from {
        right: -300px;
      }
      to {
        right: 0;
      }
    }
    @keyframes to {
      from {
        right: 0;
      }
      to {
        right: -300px;
      }
    }
    .userBox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      overflow: hidden;
      .user {
        position: absolute;
        width: 300px;
        min-height: 600px;
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
        .NOLogin {
          width: 100%;
          text-align: center;
          margin: 300px auto;
          span {
            color: rgb(163, 187, 200);
            cursor: pointer;
            &:hover {
              color: rgb(252, 215, 182);
            }
          }
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
            height: 50px;
            text-align: center;
            line-height: 60px;
            font-size: 18px;
            font-weight: bolder;
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
          .btn1 {
            width: 100px;
            height: 30px;
            border-radius: 5px;
            margin: 10px 100px;
            border: 0;
            font-weight: bolder;
            background: rgb(163, 187, 200);
            outline: none;
            color: white;
            cursor: pointer;
            &:hover {
              background: rgb(252, 215, 182);
              transition: 0.5s;
            }
          }
          .btn2 {
            width: 100px;
            height: 30px;
            border-radius: 5px;
            margin: 0px 100px 20px 100px;
            border: 0;
            font-weight: bolder;
            background: rgb(163, 187, 200);
            color: white;
            outline: none;
            cursor: pointer;
            &:hover {
              background: rgb(252, 215, 182);
              transition: 0.5s;
            }
          }
        }
      }
    }
  }
}
</style>