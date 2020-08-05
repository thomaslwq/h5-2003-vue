<!--  -->
<template>
<div id='productgrid'>
    <Header></Header>
    <div class="pg-title">
        <div class="container tit-container">
            <h3>商品分类</h3>
            <p class="path">
                <a href="/">首页</a>/<a href="#">商品分类</a>
            </p>
        </div>
    </div>
    <!-- productgrid内容开始位置 -->
    <div class="pg-content">
        <div class="container con-container">
            <el-container>
                <!-- aside侧边的导航开始位置 -->
                <el-aside class="asideMenu" width="210px">
                    <div class="pro-widget">
                        <h4>品类</h4>
                        <ul>
                            <li v-for="(gategory,index) in gategories" :key="gategory.id">
                                <a href="">
                                    <span>{{gategory.name}}</span>
                                    <i class="el-icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="pro-widget">
                        <h4>品牌</h4>
                        <ul>
                            <li v-for="(gategory,index) in gategories" :key="gategory.id">
                                <a href="">
                                    <span>{{gategory.name}}</span>
                                    <i class="el-icon-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </el-aside>
                <!-- aside侧边的导航开始位置 -->
                <!-- main商品部分开始位置 -->
                <el-container style="display:block">
                    <div class="pro-content">
                        <div class="pro-item" v-for="(product,index) in currentList" :key="product.id" @click="seeDetails(product.id)">
                            <dl>
                                <dt>
                                    <img :src="require('../assets/img/product/'+product.img)" :alt="product.name">
                                    <div class="pro-action">
                                        <a class="act-btn"><i class="iconfont icon-fangdajing"></i></a>
                                        <a class="act-btn"><i class="iconfont icon-gouwuche"></i></a>
                                        <a class="act-btn"><i class="iconfont icon-aixin"></i></a>
                                    </div>
                                </dt>
                                <dd>
                                    <h4>{{product.name}}</h4>
                                    <p>￥{{product.price}}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <!-- 分页器 -->
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="Math.ceil(goodsList.length/15)*10"
                    v-on:current-change="currentPage"
                    hide-on-single-page>
                    </el-pagination>
                    <!-- 分页器 -->
                </el-container>
                <!-- main商品部分结束位置 -->
            </el-container>
        </div>
    </div>
    <!-- productgrid内容结束位置 -->
    <Footer></Footer>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
name:"Productgrid",
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Footer
},
data() {
//这里存放数据
return {
    gategories:[
        {
            id:"001",
            name:"桌子"
        },
        {
            id:"002",
            name:"椅子"
        },
        {
            id:"003",
            name:"床"
        },
        {
            id:"004",
            name:"衣柜"
        },
    ],
    goodsList:[
        {
            id:"goods01",
            name:"单人沙发",
            price:300,
            img:"product-28.jpg"
        },
        {
            id:"goods02",
            name:"单人沙发",
            price:300,
            img:"product-29.jpg"
        },
        {
            id:"goods03",
            name:"单人沙发",
            price:300,
            img:"product-30.jpg"
        },
        {
            id:"goods04",
            name:"单人沙发",
            price:300,
            img:"product-31.jpg"
        },
        {
            id:"goods05",
            name:"单人沙发",
            price:300,
            img:"product-32.jpg"
        },
        {
            id:"goods06",
            name:"单人沙发",
            price:300,
            img:"product-33.jpg"
        },
        {
            id:"goods07",
            name:"单人沙发",
            price:300,
            img:"product-34.jpg"
        },
        
        {
            id:"goods08",
            name:"单人沙发",
            price:300,
            img:"product-28.jpg"
        },
        {
            id:"goods09",
            name:"单人沙发",
            price:300,
            img:"product-29.jpg"
        },
        {
            id:"goods10",
            name:"单人沙发",
            price:300,
            img:"product-30.jpg"
        },
        {
            id:"goods11",
            name:"单人沙发",
            price:300,
            img:"product-31.jpg"
        },
        {
            id:"goods12",
            name:"单人沙发",
            price:300,
            img:"product-32.jpg"
        },
        {
            id:"goods13",
            name:"单人沙发",
            price:300,
            img:"product-33.jpg"
        },
        {
            id:"goods14",
            name:"单人沙发",
            price:300,
            img:"product-34.jpg"
        },
        
        {
            id:"goods15",
            name:"单人沙发",
            price:300,
            img:"product-28.jpg"
        },
        {
            id:"goods16",
            name:"单人沙发",
            price:300,
            img:"product-29.jpg"
        },
        {
            id:"goods17",
            name:"单人沙发",
            price:300,
            img:"product-30.jpg"
        },
        {
            id:"goods18",
            name:"单人沙发",
            price:300,
            img:"product-31.jpg"
        },
        {
            id:"goods19",
            name:"单人沙发",
            price:300,
            img:"product-32.jpg"
        },
        {
            id:"goods20",
            name:"单人沙发",
            price:300,
            img:"product-33.jpg"
        },
        {
            id:"goods21",
            name:"单人沙发",
            price:300,
            img:"product-34.jpg"
        },
        
        {
            id:"goods22",
            name:"单人沙发",
            price:300,
            img:"product-28.jpg"
        },
        {
            id:"goods23",
            name:"单人沙发",
            price:300,
            img:"product-29.jpg"
        },
        {
            id:"goods24",
            name:"单人沙发",
            price:300,
            img:"product-30.jpg"
        },
        {
            id:"goods25",
            name:"单人沙发",
            price:300,
            img:"product-31.jpg"
        },
        {
            id:"goods26",
            name:"单人沙发",
            price:300,
            img:"product-32.jpg"
        },
        {
            id:"goods27",
            name:"单人沙发",
            price:300,
            img:"product-33.jpg"
        },
        {
            id:"goods28",
            name:"单人沙发",
            price:300,
            img:"product-34.jpg"
        }
    
    ],
    currentpage:1,
    perpagenum:15
};
},
//监听属性 类似于data概念
computed: {
    currentList:function(){
        var index = (this.currentpage-1)*this.perpagenum;
        return this.goodsList.filter((value,idx)=>{
            return idx>=index && idx<index+15;
        })
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    currentPage:function(page){
        this.currentpage = page;
    },
    seeDetails:function(id){
        this.$router.push({
            name:'Cart',
            params:{
                name:'about',
                code:111
            }
        })
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
@import url("../assets/css/reset.css");
.container{
    width: 1140px;
    margin:0 auto;
}
.pg-title {
    background: #edf1f4;
  .tit-container {
      text-align: center;
      padding:40px 0;
    h3 {
        font-size: 24px;
        line-height: 24px;
        margin-bottom:12px;
    }
    .path {
        color:#9a9ea2;
      a {
          font-size:14px;
          line-height:14px;
          padding:4px 10px;
          transition: 1s;
          &:hover{
              color:#f7dbbb;
          }
          &:last-child{
              color:#f7dbbb;
          }
      }
    }
  }
}
.pg-content {
    padding:110px 0;
  .con-container {
      padding-top:20px;
      .asideMenu {
        .pro-widget {
            margin-bottom:60px;
          h4 {
              padding-left: 5px;
              font-size:18px;
              line-height:18px;
              font-weight: 600;
              &::after{
                  content: "";
                  display: inline-block;
                  width: 38px;
                  height:2px;
                  border-radius: 2px;
                  background: #a3bbc8;
                  margin-left:10px;
                  vertical-align: middle;
              }
          }

          ul {
              margin-top:30px;
            li {
                font-size: 14px;
                a{
                display: flex;
                justify-content: space-between;
                border-radius: 10px;
                transition: .5s;
                align-items: center;
                color: #243f4d;
                padding: 16px 22px 16px 15px;
                background: transparent;
                    &:hover{
                        background: #d0e0ec;
                    }
                }
            }
          }
        }
      }
      .pro-content {
          &::after{
              content:"";
              display:block;
              height:0;
              clear: both;
              overflow: hidden;
              visibility: hidden;
          }
          .pro-item {
              float: left;
              overflow: hidden;
              border-radius: 5px;
              box-shadow: 0px 6px 47px 3px rgba(37, 37, 37, 0.06);
              margin-left:20px;
              margin-right: 20px;
              margin-bottom: 30px;
            dl {
                dt {
                position: relative;
                overflow: hidden;
                    img {
                        width:100%;
                        transition: 1s;
                    }

                    .pro-action {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        text-align: center;
                        visibility: hidden;
                        opacity: 0;
                        z-index: 3;
                        transition: 1s;
                        .act-btn {
                            display: inline-block;
                            width: 45px;
                            height: 45px;
                            line-height: 45px;
                            background: #fff;
                            color: #91b3c5;
                            font-size: 18px;
                            text-align: center;
                            margin: 0 8px;
                            border-radius: 50%;
                            transition:1s;
                            &:hover{
                                background: #91b3c5;
                                color:#fff;
                            }
                        }
                    }
                }

                dd {
                    text-align: center;
                    padding: 20px 15px;
                    h4 {
                        font-size: 16px;
                        line-height: 26px;
                        font-weight: 500;
                        margin-bottom: 8px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 26px;
                        font-weight: 700;
                        color: #a3bbc8;
                    }
                }
            }
            &:hover{
                dl dt img{
                    transform: scale(1.1);
                }
                .pro-action{
                    visibility: visible;
                    bottom:10px;
                    opacity: 1;
                }
            }
        }
      }
      .el-pagination{
          width:500px;
          margin:30px auto;
          button[type="button"]{
              width:50px;
              height:50px;
              line-height: 50px;
              font-size: 18px;
          }
          .el-pager li{
              width: 50px;
              height:50px;
              line-height: 50px;
              transition:.5s;
              &:hover{
                background: #a3bbc8;
                color:#fff;
              }
          }
          .el-pager li.active{
              background: #a3bbc8;
              color:#fff;
          }
      }
    }
  }

</style>