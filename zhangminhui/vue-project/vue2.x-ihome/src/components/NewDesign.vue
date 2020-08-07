<template>
  <div class="design">
    <span class="design-span">新设计</span>
    <div class="design-title">
      <span @click="showAll">所有</span>
      <span v-for="(item,index) in title" :key="index" @click="changeDesign(item)">{{item.seriesName}}</span>
    </div>
    <div class="designMore" @click="$router.push('/Productgrid')">查看更多</div>
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
      title: [],
      product: [],
      originList:[],
    }; 
  },
  //监听属性 类似于data概念
  computed: {},
  methods: {
    showAll:function(){
    this.product=this.originList;
  },
    changeDesign(item) {
      this.$axios.post('api/product/getTopProductBySeries',this.$qs.stringify(
                {
                seriesID:Number(item.seriesID)
                })
            ).then(res=>{
              if(res.code == 200){
                var arr = res.results.filter(v=>{
                  if(v.imgurl){
                    return v
                  }else{
                    v.imgurl = "/uploads/null.jpg";
                    return v
                  }
                })
                this.product = arr;
              }
            })
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
  created() {
  this.$axios.get('api/admin/getAllSeries').then(res=>{
      
      this.title = res.results.splice(0,4);
    });
},
  mounted(){
    this.$axios.get("api/product/getNewDesignProduct")
    .then(res=>{
      var arr=res.results.map(v=>{
        if(v.imgurl){
          return v
        }else{
          v.imgurl="/uploads/1029793003.jpg"
          return v
        }
      })
      this.originList = arr.splice(0,6);
      this.product = this.originList;
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
        background: rgb(255, 255, 255);
        position: relative;
        &:hover {
          .img-box {
            width: 270px;
            height: 183px;
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
          width: 260px;
          height: 168px;
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