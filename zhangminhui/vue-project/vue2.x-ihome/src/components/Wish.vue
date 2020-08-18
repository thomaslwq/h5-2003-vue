<template>
  <div class="box">
    <Header></Header>
    <div class="NoLogin" v-if="!isLogin">
      还没有登录哦，点我去
      <span @click="goLogin">登录</span>
    </div>
    <div v-else>
      <div class="title">
        <h2>愿望清单</h2>
        <div class="from">
          <span>家</span>/
          <span>愿望清单</span>
        </div>
      </div>
      <div class="Nowish" v-if="Nowish">
        心愿单是空的哦，点我去
        <span @click="goHome">添加</span>吧
      </div>
      <div class="wishList" v-else>
        <table>
          <tr class="wishList-title">
            <th>产品展示</th>
            <th>商品名</th>
            <th>价格</th>
            <th>库存</th>
            <th>添加购物车</th>
            <th>删除</th>
          </tr>
          <tr v-for="(item,index) in wishList" :key="index">
            <td>
              <div class="wishListImg">
                <img :src="'http://175.24.122.212:8989/apiServer'+item.imgurl" />
              </div>
            </td>
            <td>{{item.productName}}</td>
            <td>{{item.price}}</td>
            <td>{{item.amount}}</td>
            <td>
              <button
                class="CanBuy"
                v-if="item.amount>0"
                @click="addCart(item.productID)"
              >添加到购物车</button>
              <button class="NOBuy" v-else>卖光了</button>
            </td>
            <td @click="closeList(item.wishID,index)" style="cursor: pointer">x</td>
          </tr>
        </table>
        <div class="wishList-btm">
          <span @click="$router.push('/cart')">购物车</span>
          <span @click="$router.push('productgrid')">继续购物</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header";
import Footer from "./Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer,
  },
  data() {
    //这里存放数据
    return {
      isLogin: false,
      wishList: [],
      Nowish: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    wishList() {
      if (this.wishList.length == 0) {
        this.Nowish = true;
      } else {
        this.Nowish = false;
      }
    },
  },
  //方法集合
  methods: {
    closeList(wishID, index) {
      this.wishList.splice(index, 1);
      this.$axios
        .post(
          "api/product/deleteWish",
          this.$qs.stringify({
            wishID: wishID,
          })
        )
        .then((res) => {
          if (res.code == 200) {
            console.log(res);
          }
        });
    },
    goHome() {
      this.$router.push("/productgrid");
    },
    goLogin() {
      this.$router.push("/Login");
    },
    addCart(productID) {
      var userID = localStorage.getItem("userID");
      this.$axios
        .post(
          "api/product/getAllCartByUserID&ProductID",
          this.$qs.stringify({
            userID: userID,
            productID: productID,
          })
        )
        .then((res) => {
          if (res.results.length == 0) {
            this.$axios
              .post(
                "api/product/addToCart",
                this.$qs.stringify({
                  userID: userID,
                  productID: productID,
                  count: 1,
                })
              )
              .then((res) => {
                if (res.code == 200) {
                  this.$message({
                    message: "添加成功",
                    duration: 1000,
                    type: "success",
                  });
                }
              });
          } else {
            this.$message({
              message: "购物车已经有这件商品了哦",
              duration: 1000,
              type: "error",
            });
          }
        });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var userID = localStorage.getItem("userID");
    if (this.wishList.length == 0) {
      this.Nowish = true;
    } else {
      this.Nowish = false;
    }
    if (userID) {
      this.isLogin = true;
      this.$axios.post(
        "api/product/getWishList",
        this.$qs.stringify({
          userID: userID,
        })
      )
      .then((res) => {
        if (res.code == 200) {
          this.wishList = res.results;
          console.log(res);
        }
      });
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
<style lang="less" scoped>
.box {
  width: 100%;
  //   height: 100%;
  min-width: 1280px;
  .NoLogin {
    width: 100%;
    height: 400px;
    text-align: center;
    line-height: 400px;
    font-weight: bold;
    span {
      color: rgb(163, 187, 200);
      cursor: pointer;
      &:hover {
        color: rgb(252, 215, 182);
      }
    }
  }
  .title {
    width: 100%;
    height: 140px;
    padding: 20px 0;
    box-sizing: border-box;
    background: rgb(237, 241, 244);
    H2 {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
    }
    .from {
      width: 100px;
      margin: 0 auto;
      span {
        display: inline-block;
      }
      :nth-child(1) {
        margin-right: 3px;
        cursor: pointer;
        &:hover {
          color: rgb(252, 215, 182);
          transition: 0.5s;
        }
      }
      :nth-child(2) {
        margin-left: 3px;
        color: rgb(252, 215, 182);
      }
    }
  }
  .Nowish {
    width: 1200px;
    margin: 60px auto;
    height: 200px;
    line-height: 200px;
    text-align: center;
    span {
      color: rgb(163, 187, 200);
      cursor: pointer;
      &:hover {
        color: rgb(252, 215, 182);
      }
    }
  }
  .wishList {
    width: 1000px;
    margin: 60px auto;
    table {
      width: 100%;
      tr {
        display: flex;
        flex-direction: row;
        border-top: 1px solid rgb(235, 235, 235);
        border-bottom: 1px solid rgb(235, 235, 235);
      }
      th {
        flex: 1;
        height: 56px;
        line-height: 56px;
        font-size: 24px;
        color: #436372;
      }
      td {
        flex: 1;
        text-align: center;
        height: 90px;
        line-height: 90px;
        font-size: 15px;
        font-weight: bold;
        color: #171717;
        .wishListImg {
          width: 70px;
          height: 70px;
          margin: 10px auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .CanBuy {
          padding: 10px 20px;
          color: white;
          background: rgb(163, 187, 200);
          outline: none;
          border: 0;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          &:hover {
            background: rgb(252, 215, 182);
            transition: 0.5s;
          }
        }
        .NOBuy {
          padding: 10px 20px;
          color: #7d7d7d;
          background: rgb(237, 241, 244);
          outline: none;
          border: 0;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
        }
      }
      .wishList-title {
        border: 0;
      }
    }
    .wishList-btm {
      margin: 20px;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #436372;
      font-weight: bold;
      span {
        cursor: pointer;
        &:hover {
          color: rgb(252, 215, 182);
          transition: 0.5s;
        }
      }
    }
  }
}
</style>