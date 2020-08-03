<!-- 小swiper -->
<template>
<div class='litterSwiper'>
    <div class="swiper-container">
        <swiper :options="swiperOptions" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
            111
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
         // 参数选项,显示小点
        pagination: {
            el: '.swiper-pagination'
        },
        //循环
        // loop:true,
        //每张播放时长3秒，自动播放
        // autoplay:1000,
        //滑动速度
        // speed:1000,
        // delay:1000
        　
    },
    
    swiperList:[
                {
                    id:'001',
                   
                },
                {
                    id:'002',
                   
                },
                {
                    id:'003',
                   
                }
    ]
};
},
//监听属性 类似于data概念
computed: {
    swiper() {
        // return this.$refs.mySwiper.$swiper
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
  background: rgba(252, 215, 182, 0.2);
  .swiper-container {
    width: 1110px;
    height: 226px;
    margin: 0 auto;
  }
}

</style>