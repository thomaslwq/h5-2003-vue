<!--  -->
<template>
<div class='product-details'>
    <Header></Header>
    <!-- 产品详情跳转链接 -->
    <div class="product-details-top">
        <div class="details-top-content">
            <h2>产品详情</h2>
            <section class="details-top-link">
                <a href="/">主页</a><em>/</em><a href="">产品详情</a>
            </section>
        </div>
    </div>
    <!-- 产品详情选择项 -->
    <div class="product-details-select">
        <div class="details-select-content">
            <!-- 顶部选择商品 -->
            <section class="select-content-top">

                <!-- 左边的三张展示图片 -->
                <div class="content-top-left">
                    <div class="top-left-imgbox" 
                        @click="changeImg(item.name,item.price,item.type,item.productID)" 
                        v-for="item in imgList" 
                        :key="item.id">
                        <!-- <img :src="require('../assets/img/product/' + item.name)"> -->
                        <img :src="'http://175.24.122.212:8989/apiServer' + item.name">
                        
                    </div>
                </div>

                <!-- 中间的大图区域 -->
                <div class="content-top-center">
                    <div class="top-center-imgbox">
                      <transition name="fade">
                        <img :src="'http://175.24.122.212:8989/apiServer' + nowImg.name" alt="" v-if="nowImg.place=='show'">
                      </transition>  
                    </div>
                </div>

                <!-- 右边选择数量 -->
                <div class="content-top-right">
                    <section class="top-right-title">
                        {{nowImg.type}}
                    </section>
                    <section class="top-right-rank">
                        <ul>
                            <li><i class="iconfont icon-xingxing1"></i></li>
                            <li><i class="iconfont icon-xingxing1"></i></li>
                            <li><i class="iconfont icon-xingxing1"></i></li>
                            <li><i class="iconfont icon-xingxing1"></i></li>
                            <li><i class="iconfont icon-xingxing1"></i></li>
                        </ul>
                    </section>
                    <section class="top-right-price">
                        ${{nowImg.price}}.00
                    </section>
                    <section class="top-right-describe">
                        <p>{{nowImg.content}}</p>
                    </section>
                    <section class="top-right-select">
                        <div class="select-left">
                            <button @click="subProduct()">-</button><span>{{nowImg.num}}</span><button @click="addProduct()">+</button>
                        </div>
                        <div class="select-right">
                            <em @click="addToCart()">添加到购物车</em>
                        </div>
                    </section>
                    <section class="top-right-type">
                        <p>SKU : <em>014</em></p>
                        <p>分类 : <em>家具</em></p>
                        <p>标签 : <em>装饰</em></p>
                    </section>
                </div>
            </section>
            <!-- 顶部显示评论 -->
            <section class="select-content-comment">
                <div class="comment-box">
                    <!-- 顶部选择栏 -->
                    <div class="comment-box-btn">
                          <div v-for="item in commentList" 
                            :key="item.id" 
                            :class="['btn-item',{'active':item.type==btnType}]"
                            @click="changeBtn(item.type)"
                          >
                            {{item.msg}}
                          </div>
                    </div>
                    <!-- 底部信息切换 -->
                    <div class="comment-check">
                      <transition name="fade">
                        <p v-show="btnType=='des'" :key='1' :class="['check-item',{'active':btnType=='des'},{'noActive':btnType!='des'}]">
                            如果你希望成功，以恒心为良友，以经验为参谋，以小心为兄弟，以希望为哨兵。<br>
                            航海远行的人，比先定个目的地，中途的指针，总是指着这个方向走，恐怕永无达到的日子。
                        </p>
                      </transition>
                      <transition name="fade">
                        <p v-show="btnType=='msg'" :key='2' :class="['check-item',{'active':btnType=='msg'},{'noActive':btnType!='msg'}]">
                            生活的乐趣取决于生活都本身，而不是取决于工作或地点。<br>
                            梦想无论怎样模糊，总潜伏在我们心底，使我们的心境永远得不到宁静，直到这些梦想成为事实。
                        </p>
                       </transition>
                       <transition name="fade">
                        <p v-show="btnType=='comment'" :key='3' :class="['check-item',{'active':btnType=='comment'},{'noActive':btnType!='comment'}]">
                            积极的人在每一次忧患中都看到一个机会，而消极的人则在每个机会都看到某种忧患。<br>
                            岁月可以赢去我们的生命，却赢不去我们一路留下的欢声笑语，我们的祝福，无尽的爱意。
                        </p>
                        </transition>
                    </div>
                </div>
            </section>
        </div>

    </div>
    <!-- 产品轮播图 -->
    <div class="product-details-slideshow">
        <div class="litterswiper-container">
            <div class="rel-product">
                相关产品
                <div @click="prevOne()" class="swiper-prev-one"> <i class="iconfont icon-zuojiantou"></i></div>
                <div @click="nextOne()" class="swiper-next-two"> <i class="iconfont icon-youjiantou"></i> </div>
            </div>
            <swiper :options="swiperOptions" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
                    <Goods :item="item"></Goods>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <Article></Article>
    <Footer></Footer>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/Header";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import Article from "../components/Article";
import Goods from "../components/Goods";
import Footer from "../components/Footer"
import 'swiper/swiper-bundle.css';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Swiper,
    SwiperSlide,
    Goods,
    Article,
    Footer
},
data() {
//这里存放数据
return {
    swiperOptions: {
        loop:true,
        slidesPerView : 4,
        grabCursor : true,
        slidesPerGroupSkip: 0,
    },
    swiperList:[
        {
            id:"1",name:"木质收音机",price:"$29.00",img:"product-28.jpg",type:"furniture"
        },
        {
            id:"2",name:"木质收音机",price:"$29.00",img:"product-29.jpg",type:"chair"
        },
        {
            id:"3",name:"木质收音机",price:"$29.00",img:"product-30.jpg",type:"decorate"
        },
        {
            id:"4",name:"木质收音机",price:"$29.00",img:"product-31.jpg",type:"lamplight"
        },
        {
            id:"5",name:"木质收音机",price:"$29.00",img:"product-32.jpg",type:"decorate"
        },
        {
            id:"6",name:"木质收音机",price:"$29.00",img:"product-33.jpg",type:"chair"
        },
        {
            id:"7",name:"木质收音机",price:"$29.00",img:"product-34.jpg",type:"lamplight"
        },
        {
            id:"8",name:"木质收音机",price:"$29.00",img:"product-35.jpg",type:"furniture"
        }
    ],
    btnType:"des",
    commentList:[
        {
            id:"1",msg:"描述",type:"des"
        },
        {
            id:"2",msg:"附加信息",type:"msg"
        },
        {
            id:"3",msg:"评论",type:"comment"
        }
    ],
    nowImg:{name:"",price:"",type:"",num:"",place:"",productID:"",content:""},
    imgList:[
        {
            id:"1",name:"/uploads/110692.jpg",price:"129",type:"诗尼曼衣柜",productID:10028731596630792000,content:"让你坠入温柔乡"
        }, 
        {
            id:"2",name:"/uploads/product-28.jpg",price:"1299",type:"布艺沙发",productID:10029961596630864000,content:"躺着绝对不想动"
        }, 

    ]
};
},
//监听属性 类似于data概念
computed: {
     swiper() {
        return this.$refs.mySwiper.$swiper
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //添加到购物车
    async addToCart(){
      let res = await this.$axios.post("api/product/getAllCartByUserID",
        this.$qs.stringify({
          userID:this.userID
      }))
      console.log(res.results)
      if(res.code == 200 && res.results[0].productID == this.nowImg.productID){
        console.log(res)
        this.$notify({
            title: '添加失败',
            message: '购物车里面已经有了相同的宝贝了!',
            type: 'warning',
            offset: 100
        });
      }else{
         await this.$axios.post("api/product/addToCart",
              this.$qs.stringify({
                userID:this.userID || 10014841596696785000,
                productID:this.nowImg.productID || 10021071596632162000,
                count:this.nowImg.num
          })).then(res=>{
            console.log(res)
            if(res.code == 200){
              this.$notify({
                title: '添加成功',
                message: '快去购物车看看自己的宝贝吧!',
                type: 'success',
                offset: 100
              });
            }     

          }).catch(err=>{
            console.log(err)
        })
      }

     
    },
    //增加数量
    addProduct(){
      this.nowImg.num ++;
    },
    //减少数量
    subProduct(){
      if(this.nowImg.num-1<0){
        return false;
      }
      this.nowImg.num --;
    },
    //根据当前选项来选择展示页面
    changeImg(name,price,type,productID){
        this.nowImg.name = name;
        this.nowImg.price = price;
        this.nowImg.type = type;
        this.nowImg.num = 1;
        this.nowImg.place = "";
        this.nowImg.productID = productID;
        clearInterval(this.nowImg.timer)
        this.nowImg.timer = setInterval(()=>{
          this.nowImg.place = "show";
          clearInterval(this.nowImg.timer)
        },0)    
    },
    changeBtn(type){
        this.btnType = type;
    },
    prevOne(){
        this.swiper.slideNext(500);
    },
    nextOne(){
        this.swiper.slidePrev(500);
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  //先接受主页传过来的商品ID
  //根据商品ID请求数据，然后渲染到页面上
  this.userID = JSON.parse(localStorage.getItem("userID"));
  this.productID = this.$route.params.productID;
  // 请求数据
   this.$axios.post("api/product/getProductInfoByID",
    this.$qs.stringify({
      productID:this.productID || 10021461596631900000
   })).then(res=>{
    if(res.code == 200){
      var res = res.results[0];
      this.imgList.unshift({productID:res.productID,name:res.imgurl,price:res.price,type:res.productName,content:res.content})
      // 替换当前页面的数据
      this.nowImg = {name:res.imgurl,price:res.price,type:res.productName,num:"1",place:"show",productID:res.productID,content:res.content}

    }
  }).catch(err=>{
    console.log(err)
  })
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    var that = this;
    this.swiper.slideTo(0, 0, false);
    this.swiper.slidesPerGroupSkip = 0;
    //自动播放
    clearInterval(this.$el.timer)
     this.$el.timer = setInterval(function(){
        that.swiper.slideNext(200);
     },2000)
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
  this.swiper.destroy(false)
}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  lang="less" scoped>
.product-details {
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  //顶部链接样式
  .product-details-top {
    background: #EDF1F4;

    .details-top-content {
      width: 1140px;
      height: 144px;
      margin: 0 auto;

      h2 {
        font-size: 36px;
        font-weight: 300;
        text-align: center;
        line-height: 36px;
        padding: 30px 0 20px;
      }

      .details-top-link {
        text-align: center;

        a {
          color: #9a9ea2;
          font-size: 14px;
        }

        em {
          padding: 0 14px;
        }

        a:nth-child(3) {
          color: #fcd7b6;
        }
      }
    }
  }

  //选择商品详情样式
  .product-details-select {
    padding-top: 118px;

    .details-select-content {
      width: 1140px;
      margin: 0 auto;

      .select-content-top {
        display: flex;
        height: 620px;

        //左边三张展示图
        .content-top-left {
          .top-left-imgbox {
            width: 160px;
            height: 188px;
            border: 2px solid #f2f2f2;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .top-left-imgbox:nth-child(2) {
            margin: 28px 0;
          }
        }

        //中间大图展示区域
        .content-top-center {
          width: 500px;
          height: 620px;
          padding: 10px 30px;

          .top-center-imgbox {
            width: 440px;
            height: 596px;
            border: 2px solid #f2f2f2;
            .noActive{
              display:"none";
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        //右边商品信息区域
        .content-top-right {
          padding-top: 70px;

          .top-right-title {
            font-size: 40px;
            color: #333;
            line-height: 40px;
            font-weight: 400;
          }

          //评分
          .top-right-rank {
            margin: 28px 0 38px;

            ul {
              display: flex;

              li {
                margin-right: 6px;

                i {
                  line-height: 18px;
                  font-size: 18px;
                  color: #ffcc00;
                }
              }
            }
          }

          //价格
          .top-right-price {
            font-weight: 400;
            font-size: 28px;
            line-height: 28px;
          }

          //描述
          .top-right-describe {
            p {
              color: #243f4d;
              line-height: 30px;
              font-size: 16px;
              margin: 30px 0 26px;
            }
          }

          //数量选择
          .top-right-select {
            display: flex;

            .select-left {
              display: flex;
              margin-right: 14px;

              button {
                display: block;
                cursor: pointer;
                width: 50px;
                height: 50px;
                border: 1px solid #a3bbc8;
                background: none;
                font-size: 20px;
                color: #333333;
                transition: .5s;

                &:hover {
                  background: #a3bbc8;
                  color: #fff;
                }
              }

              span {
                display: block;
                width: 60px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                border: 1px solid #a3bbc8;
                border-left: none;
                border-right: none;
              }
            }

            .select-right {
              width: 196px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              background: #a3bbc8;
              color: #fff;
              transition: .5s;
              border-radius: 4px;
              cursor: pointer;
              &:hover {
                background: #FCD7B6;
              }
              em{
                display: block;
              }
            }
          }

          //商品类型
          .top-right-type {
            margin-top: 36px;

            p {
              color: #243f4d;
              font-size: 16px;
              line-height: 34px;

              em {
                transition: .5s;

                &:hover {
                  color: #FCD7C6;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      //底部评论区域
      .select-content-comment {
        padding-top: 100px;
        .comment-box {
          //顶部按钮切换
          .comment-box-btn {
            display: flex;
            font-size: 18px;
            color: #243f4d;
            justify-content: center;
            // 选项按钮样式
            .btn-item.active{
                background: #a3bbc8;
                color: #fff;
            }
            .btn-item {
                padding: 20px 23px;
                background: #edf1f4;
                border-radius: 12px;
                margin: 0 14px;
                transition: .5s;
                cursor: pointer;
                &:hover{
                    background: #a3bbc8;
                    color: #fff;
                }
            }

          }
          //底部信息切换
          .comment-check {
            padding-top: 26px;
            .check-item.noActive{
              display: none;
            }
            
            p {
                font-size: 16px;
                color: #243f4d;
                line-height: 32px;
            }
          }
        }
      }
    }
  }

  //产品轮播图样式
  .product-details-slideshow {
     padding:130px 0; 
    .litterswiper-container {
      width: 1140px;
      margin: 0 auto;
      .rel-product{
          font-size: 24px;
          font-weight: bolder;
          color:#191919;
          margin-bottom: 65px;
          position: relative;
          .swiper-prev-one{
            position: absolute;
            right:100px;
            top:0;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: 2px solid #A3BBC8;
            border-radius: 8px;
            background: none;
            transition: .5s;
            font-size: 24px;
            color:#A3BBC8;
            &:hover{
              background: #A3BBC8;
              color: #fff;
            }
         }
         .swiper-next-two{
            position: absolute;
            right: 10px;
            top:0;
            width: 50px;
            height: 50px;
            line-height: 50px;
            color:#A3BBC8;
            text-align: center;
            border: 2px solid #A3BBC8;
            border-radius: 8px;
            transition: .5s;
            font-size: 24px;
            &:hover{
              background: #A3BBC8;
              color: #fff;
            }
         }
      }

      //给轮播图增加阴影效果
      .swiper-item {
        .goods-show {
          width: 255px;  
          height: 365px;
          border: 1px solid #FAFAFA;
          box-shadow: 0 0 2px #FAFAFA;
          .item-imgbox{
              overflow: visible;
          }
        }
      }

    }
  }
  }
</style>