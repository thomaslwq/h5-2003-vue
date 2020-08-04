<!-- 小swiper -->
<template>
<div class='litterSwiper'>
    <div class="litterswiper-container">
        <swiper :options="swiperOptions" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
                <img :src="require('../assets/images/' + item.img)">
            </swiper-slide>
        </swiper>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
//import引入的组件需要注入到对象中才能使用
name: 'carrousel',
components: {
    Swiper,
    SwiperSlide
},

data() {
//这里存放数据
return {
    swiperOptions: {
        loop:true,
        slidesPerView : 5,
        grabCursor : true,
       
    },
    swiperList:[
        {
            id:'001',
            img:"brand-1.png"
            
        },
        {
            id:'002',
            img:"brand-2.png"
        },
        {
            id:'003',
            img:"brand-3.png"
        },
        {
            id:'004',
            img:"brand-4.png"
        },
        {
            id:'005',
            img:"brand-5.png"
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
    },1000)

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
<style lang="less" scoped>
.litterSwiper {
  background:#fff7f0;
  .litterswiper-container {
    width: 1110px;
    height: 226px;
    line-height: 226px;
    margin: 0 auto;
    .swiper-item{
        text-align: center;
    }
  }
}

</style>