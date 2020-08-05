<!--  -->
<template>
     <div class="exchange-top">
       <div class="back">
            <i></i>
            <span @click="backRouter">返回</span>
            <b>
                |
            </b>
       </div>
       <div class="title">
           新建代金券
           <div class="warn">
               !可与平台级及店铺级红包或券(包括饿了么超级会员红包、代金券、商品券、配送券等)同享，可与店铺满减、特价菜等店铺活动同享。相同类型的外卖券只能用- 张。
           </div>
       </div>
   </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    backRouter:function(){
         this.$router.go(-1);
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
b,strong{
    font-weight: normal;
}
.exchange-top {
        font-size: 12px;
        border-bottom: 2px solid #E7EAEF;
        padding-bottom: 20px;
    
  .back {
      float: left;
      font-size: 14px;
    b{
        margin: 0 20px;
        color: #E8E9ED;
    }
    span{
        cursor: pointer;
    }
  }

  .title {
      margin-left: 60px;
      font-size: 18px;
   
      
    .warn {
        color:#CAA672;
        background-color: #FDF7EB;
        padding: 5px;
        font-size: 12px;
           margin-top: 10px;
        margin-left: 15px;
    }
  }

}
</style>