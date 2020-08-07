<!--  -->
<template>
  <div id="cart">
    <Header></Header>
    <div class="cart-title">
      <div class="container cart-container">
        <h3>购物车</h3>
        <p class="path">
          <a href="/">首页</a>/
          <a href="#">购物车</a>
        </p>
      </div>
    </div>
    <!-- table购物车 -->
    <div class="table wrapper">
      <div class="container">
        <div class="tr">
          <div>商品</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
        <div class="protab">
          <div class="th" style="display: flex;" v-for="(goodsitem,index) in cartList" :key="index">
            <div class="pro clearfix">
              <label class="fl">
                <input
                  type="checkbox"
                  :value="goodsitem"
                  v-model="checkedGoods"
                  :class="['check',{checked:checkedGoods.indexOf(goodsitem)>-1}]"
                  @change="checkHandle(goodsitem.goodsid)"
                />
                <span></span>
              </label>
              <a class="fl" href="#">
                <dl class="clearfix">
                  <dt class="fl">
                    <img
                      :src="'http://175.24.122.212:8989/apiServer'+ goodsitem.imgurl"
                      style="width:70px;height:70px"
                    />
                  </dt>
                  <dd class="fl">
                    <p>{{goodsitem.productName}}</p>
                    <p>颜色分类:</p>
                    <p>{{goodsitem.colorID}}</p>
                    <p style="margin-top:10px">库存：{{goodsitem.amount}}</p>
                  </dd>
                </dl>
              </a>
            </div>
            <div class="price">￥{{goodsitem.price}}</div>
            <div class="number">
              <p class="num clearfix">
                <img
                  class="fl sub numupdate"
                  src="../assets/images/sub.jpg"
                  @click="subNumHandle(goodsitem)"
                />
                <span class="fl neednum">{{goodsitem.count}}</span>
                <img
                  class="fl add numupdate"
                  src="../assets/images/add.jpg"
                  @click="addNumHandle(goodsitem)"
                />
              </p>
            </div>
            <div class="price sAll">￥{{goodsitem.price*goodsitem.count}}</div>
            <div class="price">
              <el-popconfirm
                confirmButtonText="好的"
                cancelButtonText="不用了"
                icon="el-icon-info"
                iconColor="red"
                title="确定删除当前商品吗？"
                @onConfirm="delHandle(goodsitem)"
              >
                <el-button slot="reference" @click="delOneShop(goodsitem.goodsid)">删除</el-button>
              </el-popconfirm>
            </div>
          </div>
        </div>
        <div class="goOn" v-show="cartList.length<=0">
          您的购物车空空如也~
          <a href="/productgrid">去逛逛</a>
        </div>
        <div class="tr clearfix">
          <label class="fl">
            <input
              id="checkAll"
              type="checkbox"
              :class="['checkAll',{checked:checked}]"
              :checked="checked"
              @change="checkAllHandle"
            />
            <span></span>
          </label>
          <p class="fl">
            <label for="checkAll">全选</label>
            <el-popconfirm
              confirmButtonText="好的"
              cancelButtonText="不用了"
              icon="el-icon-info"
              iconColor="red"
              title="确定删除所选商品吗？"
              @onConfirm="delCheckedHandle()"
            >
              <el-button slot="reference" @click="delMoreShop">删除</el-button>
            </el-popconfirm>
          </p>
          <p class="fr">
            <span>
              共
              <small id="sl">{{totalNum}}</small>件商品
            </span>
            <span>
              合计:&nbsp;
              <small id="all">￥{{totalPrice}}</small>
            </span>
            <a href="#" class="count">结算</a>
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer,
  },
  model: {
    event: "change",
  },
  data() {
    //这里存放数据
    return {
      cartList: [],
      checkedGoods: [],
    };
  },
  //监听属性 类似于data概念
  computed: {
    totalPrice() {
      var arr = this.checkedGoods.map((v) => {
        return v.price * v.count;
      });
      var total = 0;
      arr.forEach((v) => {
        total += v;
      });
      return total;
    },
    totalNum() {
      var arr = this.checkedGoods.map((v) => {
        return v.count;
      });
      var total = 0;
      arr.forEach((v) => {
        total += v;
      });
      return total;
    },
    checked() {
      if (
        this.checkedGoods.length !== this.cartList.length ||
        this.cartList.length <= 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    checkHandle: function (goodsitem) {
      console.log(this.checkedGoods.indexOf(goodsitem));
      this.checkedGoods.push(goodsitem);
    },
    subNumHandle: function (item) {
      if (item.count <= 1) {
        this.$message.error("不能为零");
        return;
      } else {
        item.count--;
        this.$axios
          .post(
            "api/product/updateCart",
            this.$qs.stringify({
              cartID: item.goodsid,
              count: item.count,
            })
          )
          .then((res) => {
            if (res.code == 200) {
              console.log(res);
            }
          })
          .catch((err) => console.log(err));
      }
    },
    addNumHandle: function (item) {
      if (item.count >= item.amount) {
        this.$message.error("库存不足");
        return;
      } else {
        item.count++;
        this.$axios
          .post(
            "api/product/updateCart",
            this.$qs.stringify({
              cartID: item.goodsid,
              count: item.count,
            })
          )
          .then((res) => {
            if (res.code == 200) {
              console.log(res);
            }
          })
          .catch((err) => console.log(err));
      }
    },
    checkAllHandle: function (e) {
      if (e.target.checked == true) {
        this.checkedGoods = this.cartList;
      } else {
        this.checkedGoods = [];
      }
    },
    delHandle: function (item) {
      this.cartList = this.cartList.filter((v) => {
        return v != item;
      });
    },
    delCheckedHandle: function () {
      this.cartList = this.cartList.filter((v) => {
        return this.checkedGoods.indexOf(v) === -1;
      });
      this.checkedGoods = [];
    },
    delOneShop: function (id) {
      this.$axios
        .post(
          "api/product/deleteCart",
          this.$qs.stringify({
            cartID: id,
          })
        )
        .then((res) => {
          if (res.code == 200) {
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    },
    delMoreShop: function () {
      this.$axios
        .post(
          "api/product/deleteAllCart",
          this.$qs.stringify({
            cartID: this.checkedGoods[0],
          })
        )
        .then((res) => {
          if (res.code == 200) {
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    var userID = localStorage.getItem("userID");
    this.$axios
      .post(
        "api/product/getAllCartByUserID",
        this.$qs.stringify({
          userID: userID,
        })
      )
      .then((res) => {
        if (res.code == 200) {
          console.log(res.results);
          var res = res.results;
          // console.log(this.cartList);
          var that = this;
          res.forEach(function (item, index, arr) {
            that.cartList.push({
              goodsid: item.cartID,
              imgurl: item.imgurl,
              productName: item.productName,
              amount: item.amount,
              price: item.price,
              colorID: item.colorID,
              count: item.count,
            });
          });
        }
      })
      .catch((err) => console.log(err));
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},

  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.container {
  width: 1140px;
  margin: 0 auto;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.cart-title {
  background: #edf1f4;
  .cart-container {
    text-align: center;
    padding: 40px 0;
    h3 {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 12px;
    }
    .path {
      color: #9a9ea2;
      a {
        font-size: 14px;
        line-height: 14px;
        padding: 4px 10px;
        transition: 1s;
        &:hover {
          color: #f7dbbb;
        }
        &:last-child {
          color: #f7dbbb;
        }
      }
    }
  }
}
.table {
  font-size: 12px;
  text-align: center;
  margin: 50px auto;
  color: #436372;
}
.table .th {
  display: flex;
  height: 146px;
  border-bottom: 1px solid #ebebeb;
}
.table .tr:first-child {
  display: flex;
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
}
.table .th:last-child {
  border-bottom: none;
}

.table .tr {
  height: 40px;
  line-height: 40px;
  border-bottom: none;
}
.table .th:last-child {
  display: block;
}
.table .th div:nth-child(1),
.table .tr:first-child div:nth-child(1) {
  flex: 3;
}
.table .th div:nth-child(2),
.table .tr:first-child div:nth-child(2) {
  flex: 1;
}
.table .th div:nth-child(3),
.table .tr:first-child div:nth-child(3) {
  flex: 2;
}
.table .th div:nth-child(4),
.table .tr:first-child div:nth-child(4) {
  flex: 1;
}
.table .th div:nth-child(5),
.table .tr:first-child div:nth-child(5) {
  flex: 1;
}
.table .th a.del {
  text-decoration: underline;
}
.table .th .price {
  line-height: 146px;
}
.table .th .pro {
  text-align: left;
  display: flex;
  align-items: center;
}
.table .th .pro dl {
  margin-top: 13px;
}
.table .th .pro dl dt {
  margin-left: 20px;
  margin-right: 25px;
  margin-top: 10px;
  border: 1px double #ebebeb;
}
.table .th .pro dl dd {
  position: relative;
  color: #436372;
  padding: 0 10px 10px;
  text-align: left;
}
.table .th .pro dl dd span.edit {
  position: absolute;
  right: 0;
  bottom: 0;
  color: #c10000;
}
.table .th .pro dl dd div.change {
  position: absolute;
  right: 0;
  top: -10px;
  width: 300px;
  height: 300px;
  background: #fff;
  display: none;
}
.table .th .pro dl dd.on {
  border: 1px dashed #c10000;
}
.table .th .pro dl dd p {
  line-height: 20px;
}
.table .th .pro dl dd p:nth-child(1) {
  color: #345869;
  line-height: 30px;
}
.table .th .number p {
  width: 81px;
  margin: 60px auto 0;
}
.table .th .number p span {
  width: 27px;
  height: 27px;
  line-height: 27px;
  text-align: center;
}
.table label {
  width: 16px;
  height: 16px;
  margin: 0px 17px 0 20px;
  position: relative;
}
.table .tr label {
  margin: 13px 17px 0 20px;
}
.table label input[type="checkbox"] {
  opacity: 0;
  width: 16px;
  height: 16px;
  position: absolute;
}
.table label input[type="checkbox"] + span {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  background: url("../assets/images/check.jpg");
}
.table label input[type="checkbox"].checked + span {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  background: url("../assets/images/checkOn.jpg");
}
.table .tr p:last-child a,
.table .tr p:last-child span {
  float: left;
}
.table .tr p:last-child span:first-child {
  margin-right: 90px;
  color: #436372;
}
.table .tr p:last-child a {
  margin-left: 40px;
  font-size: 18px;
  width: 150px;
  text-align: center;
  color: #fff;
  background: #a3bbc8;
  transition: 1s;
  &:hover {
    background: #fcd7b6;
  }
}
.table .tr p small {
  color: #c10000;
}
.table .tr p .del {
  margin-left: 20px;
}
.table .goOn {
  height: 200px;
  line-height: 200px;
  font-size: 16px;
  color: #436372;
  text-align: center;
}
.table .goOn a {
  color: #c10000;
  text-decoration: underline;
}
</style>