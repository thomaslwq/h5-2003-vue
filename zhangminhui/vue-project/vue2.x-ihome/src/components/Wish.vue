<template>
  <div class="box">
      <Header></Header>
    <div class="title">
      <h2>愿望清单</h2>
      <div class="from">
          <span>家</span>/<span>愿望清单</span>
      </div>
    </div>
    <div class="Nowish" v-if="Nowish">
        心愿单是空的哦，点我去<span @click="goHome">添加</span>吧
    </div>
    <div class="wishList" v-else>
        <table>
            <tr class="wishList-title">
                <th>产品展示</th>
                <th></th>
                <th>价格</th>
                <th>库存</th>
                <th></th>
                <th></th>
            </tr>
            <tr v-for="(item,index) in wishList" :key="index">
                <td>
                    <img :src="item.src">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.repertory}}</td>
                <td>
                    <button class="CanBuy" v-if="item.buy" >添加到购物车</button>
                    <button class="NOBuy" v-else>{{item.repertory}}</button>
                </td>
                <td @click="closeList(index)" style="cursor: pointer">x</td>
            </tr>
        </table>
        <div class="wishList-btm">
            <span>更新购物车</span>
            <span>继续购物</span>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header"
import Footer from "./Footer"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
      Header,
      Footer
  },
  data() {
    //这里存放数据
    return {
        wishList:[
            {id:1,src:require("../assets/img/product/product-56.jpg"),name:"木椅",price:"$240.00",repertory:"有库存",buy:true},
            {id:2,src:require("../assets/img/product/product-57.jpg"),name:"吊灯",price:"$240.00",repertory:"缺货",buy:false},
            {id:3,src:require("../assets/img/product/product-58.jpg"),name:"复古表",price:"$240.00",repertory:"卖光了",buy:false}
        ],
        Nowish:false
    };
  },
  //监听属性 类似于data概念
  computed: {
     
  },
  //监控data中的数据变化
  watch: {
       wishList(){
          if(this.wishList.length==0){
              this.Nowish=true
          }else{
              this.Nowish=false
          }
      }
  },
  //方法集合
  methods: {
      closeList(index){
          this.wishList.splice(index,1)
      },
      goHome(){
          this.$router.push("/")
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
          if(this.wishList.length==0){
              this.Nowish=true
          }else{
              this.Nowish=false
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
    .from{
        width: 100px;
        margin: 0 auto;
        span{
            display: inline-block;
        }
        :nth-child(1){
            margin-right: 5px;
            cursor: pointer;
            &:hover{
                color: rgb(252,215,182);
                transition: .5s;
            }
        }
        :nth-child(2){
            margin-left: 5px;
            color:rgb(252,215,182);
        }
    }
  }
  .Nowish{
      width: 1000px;
      margin: 60px auto;
      height: 200px;
      line-height: 200px;
      text-align: center;
      span{
          color: rgb(163,187,200);
          cursor: pointer;
          &:hover{
              color: rgb(252,215,182);
          }
      }
  }
  .wishList{
      width: 1000px;
      margin: 60px auto;
      table{
          width: 100%;
          tr{
              display: flex;
              flex-direction: row;
              border-top: 1px solid rgb(235,235,235);
              border-bottom: 1px solid rgb(235,235,235);
              img{
                  margin: 10px;
              }
              .CanBuy{
                  padding: 10px 20px;
                  color: white;
                  background: rgb(163,187,200);
                  outline: none;
                  border: 0;
                  font-size: 16px;
                  font-weight: 700;
                  cursor: pointer;
                  &:hover{
                      background: rgb(252,215,182);
                      transition: .5s;
                  }
              }
              .NOBuy{
                  padding: 10px 20px;
                  color: #7d7d7d;
                  background: rgb(237,241,244);
                  outline: none;
                  border: 0;
                  font-size: 16px;
                  font-weight: 700;
                  cursor: pointer;
              }
              th{
                  flex: 1;
                  height: 56px;
                  line-height: 56px;
                  font-size: 24px;
                  color: #436372;
              }
              td{
                  flex: 1;
                  text-align: center;
                  height: 90px;
                  line-height: 90px;
                  font-size: 18px;
                  color: #171717;
              }
          }
          .wishList-title{
              border: 0;
          }
      }
      .wishList-btm{
          margin: 20px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #436372;
          font-weight: bold;
          span{
              cursor: pointer;
              &:hover{
                  color: rgb(252,215,182);
                  transition: .5s;
              }
          }
      }
      
  }
}
</style>