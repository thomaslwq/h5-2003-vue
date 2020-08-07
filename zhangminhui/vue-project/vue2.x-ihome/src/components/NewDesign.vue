<template>
  <div class="design">
    <span class="design-span">新设计</span>
    <div class="design-title">
      <span v-for="(item,index) in title" :key="index" @click="changeDesign(item)">{{item}}</span>
    </div>
    <div class="designMore">查看更多</div>
    <div class="design-list">
      <ul>
        <li v-for="(item,index) in product" :key="index" @click="seeDetails(item.productID)">
          <span class="design-list-title">{{item.productName}}</span>
          <span class="design-list-tip">{{item.tip}}</span>
          <div class="img-box">
            <img :src="'http://175.24.122.212:8989/apiServer'+ item.imgurl" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  //
  components: {},
  data() {
    //这里存放数据
    return {
      title: ["所有", "家具", "椅子", "灯光", "装潢"],
      product: [],
      newProduct: [
        {
          id: 1,
          title: "Beat扁平吊坠黑色",
          tip: "经典",
          type: "家具,",
          src: require("../assets/img/product/product-36.png"),
        },
        {
          id: 2,
          title: "Lampe Sur Pieds Bamboo",
          tip: "经典",
          type: "椅子,灯光",
          src: require("../assets/img/product/product-37.png"),
        },
        {
          id: 3,
          title: "藤摇椅",
          tip: "经典",
          type: "灯光,",
          src: require("../assets/img/product/product-38.png"),
        },
        {
          id: 4,
          title: "藤摇椅",
          tip: "经典",
          type: "家具,装潢",
          src: require("../assets/img/product/product-39.png"),
        },
        {
          id: 5,
          title: "藤摇椅",
          tip: "经典",
          type: "椅子,装潢",
          src: require("../assets/img/product/product-40.png"),
        },
        {
          id: 6,
          title: "藤摇椅",
          tip: "经典",
          type: "灯光,",
          src: require("../assets/img/product/product-41.png"),
        },
      ],
    }; 
  },
  //监听属性 类似于data概念
  computed: {},
  methods: {
    changeDesign(type) {
      if (type == "家具") {
        this.product = [...this.newProduct];
        this.product = this.product.filter((item, idexx) => {
          return item.type.indexOf("家具") > -1;
        });
      } else if (type == "椅子") {
        this.product = [...this.newProduct];
        this.product = this.product.filter((item, idexx) => {
          return item.type.indexOf("椅子") > -1;
        });
      } else if (type == "灯光") {
        this.product = [...this.newProduct];
        this.product = this.product.filter((item, idexx) => {
          return item.type.indexOf("灯光") > -1;
        });
      } else if (type == "装潢") {
        this.product = [...this.newProduct];
        this.product = this.product.filter((item, idexx) => {
          return item.type.indexOf("装潢") > -1;
        });
      } else {
        this.product = [...this.newProduct];
      }
    },
    seeDetails:function(id){
        this.$router.push({
            name:'ProductDetails',
            params:{
                productID:id
            }
        })
    }
  },
  mounted(){
    this.$axios.get("api/product/getNewDesignProduct")
    .then(res=>{
      var arr=res.results.map(v=>{
        if(v.imgurl){
          return v
        }else{
          v.imgurl="/uploads/null.jpg"
          return v
        }
      })
      this.product = arr.splice(0,6);
    })
  }
};
</script>
<style lang="less" >
.design {
  width: 1140px;
  height: 930px;
  padding: 90px 0;
  box-sizing: border-box;
  min-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  .design-span {
    display: inline-block;
    width: 100%;
    text-align: center;
    line-height: 36px;
    font-size: 36px;
    font-weight: bolder;
  }
  .design-title {
    width: 350px;
    margin: 40px auto;
    display: flex;
    justify-content: space-around;
    span {
      display: inline-block;
      flex: 1;
      color: rgb(139, 139, 154);
      cursor: pointer;
    }
  }
  .designMore {
    font-size: 18px;
    float: right;
    cursor: pointer;
    font-weight: bolder;
    margin-right: 70px;
  }
  .design-list {
    width: 1140px;
    margin: 0 auto;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 15px;
      li {
        list-style: none;
        margin: 15px;
        width: 350px;
        height: 250px;
        background: rgb(248, 248, 248);
        position: relative;
        &:hover {
          .img-box {
            width: 210px;
            height: 133px;
            transition: 1s;
          }
        }
        .design-list-title {
          display: block;
          margin: 20px;
          font-size: 20px;
          color: black;
          font-weight: bolder;
          cursor: pointer;
          &:hover {
            color: rgb(252, 215, 182);
          }
        }
        .design-list-tip {
          display: block;
          margin: 20px;
          font-size: 20px;
          color: rgb(163, 187, 200);
          font-weight: bolder;
        }
        .img-box {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 123px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>