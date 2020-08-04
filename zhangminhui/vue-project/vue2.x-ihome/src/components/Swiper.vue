<!--  -->
<template>
<!-- slider 开始的位置 -->
<div class="slider-area slider-spacing">
    <!-- swiper开始的位置 -->
    <div class='swiper-container'>
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="imgsrc,index in imgs" :key="index">
                <img :src="imgsrc" :alt="'banner'+index">
            </div>
        </div>
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
                <img src="../assets/img/icon/icon-5.png" alt="">
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
                <img src="../assets/img/icon/icon-6.png" alt="">
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
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    imgs:[
        "./images/banner/banner-big1.jpg",
        "./images/banner/banner-big2.jpg",
        "./images/banner/banner-big3.jpg",
    ]
};
},
//监听属性 类似于data概念
computed: {},
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
    var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
            el: '.swiper-scrollbar',
            },
      })
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
        width:100%;
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