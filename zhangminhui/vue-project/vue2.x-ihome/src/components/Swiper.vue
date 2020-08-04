<!--  -->
<template>
<!-- slider 开始的位置 -->
<div class="slider-area slider-spacing">
    <!-- swiper开始的位置 -->
    <div class='swiper-container'>
        <swiper class="swiper" :options="swiperOption"  ref="bigSwiper">
            <swiper-slide class="swiper-slide" v-for="item,index in imgList" :key="item.id">
                <img :src="require('../assets/img/banner/' + item.img)" :alt="'banner'+index">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    <!-- swiper结束的位置 -->
    <div class="support">
        <div class="support-wrap">
            <div class="icon">
                <img src="../assets/img/icon/icon-7.png" alt="">
            </div>
            <div class="content">
                <h4>
                    在线服务 24/7
                </h4>
                <p>
                    如有需要请联系，我们将7天24小时在线为您服务
                </p>
            </div>
        </div>
    
        <div class="support-wrap">
            <div class="icon">
                <img src="../assets/img/icon/icon-8.png" alt="">
            </div>
            <div class="content">
                <h4>
                    运输服务
                </h4>
                <p>
                    全国范围免费配送
                </p>
            </div>
        </div>
        <div class="support-wrap">
            <div class="icon">
                <img src="../assets/img/icon/icon-9.png" alt="">
            </div>
            <div class="content">
                <h4>
                    100%支付安全保证
                </h4>
                <p>
                    我们采用PEV技术保证支付安全
                </p>
            </div>
        </div>
    </div>
</div>
<!-- slider 开始的结束 -->
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
name:"bigSwiper",
//import引入的组件需要注入到对象中才能使用
components: {
    Swiper,
    SwiperSlide
},
data() {
//这里存放数据
return {
    swiperOption: {
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        },
    imgList:[
        {
            id:"001",
            img:"banner-big1.jpg",
        },
        {
            id:"002",
            img:"banner-big2.jpg",
        },
        {
            id:"003",
            img:"banner-big3.jpg",
        },
    ]
};
},
//监听属性 类似于data概念
computed: {
    swiper() {
        return this.$refs.bigSwiper.$swiper
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    var that = this;
    this.swiper.slideTo(0, 0, false)
    //自动播放
    setInterval(function(){
        that.swiper.slideNext(1000);
    },5000)
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
    @media (min-width: 1500px){
        .slider-spacing {
            padding: 0 55px;
        }
    }
    @media (max-width: 1499px) and (min-width: 768px){
    .slider-spacing {
        padding: 0 15px;
    }}
    @media (max-width: 767px){
    .slider-spacing {
        padding: 0px;
    }}
    .swiper-container{
        min-width: 1200px;
        height:48vw;
        overflow: hidden;
        img{
            width:100%;
        }
    }
    .support {
        display: flex;
        flex-wrap: wrap;
        background:#fef7f0;
    .support-wrap {
        flex: 1;
        padding:40px 30px;
        border-right: 1px solid #e8e4df;
        display: flex;
        &:last-child{
            border:none;
        }
        .icon {
            width:50px;
            margin-right: 25px;
        img {
            width: 100%;
        }
        }

        .content {
        h4 {
            font-size: 18px;
            color:#414141;
            font-weight: 700;
            margin-bottom: 10px;
        }

        p {
            color:#585858;
            line-height: 30px;
        }
        }
    }         
}
</style>