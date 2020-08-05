<!-- 门店营业信息 -->
<template>
<div class=''>
    <div class="store-market">
        <section class="market-item" v-for="data,index in datas">
            <p>{{data.title}}</p>
            <b>{{data.text}}</b>
            <span @click.stop="handleType(index)">{{data.type}}</span>
            <input type="text" v-model="data.text" v-show="data.status" @blur="handleType(index)">
        </section>
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
    datas:[
        {id:1,title:"营业时间",text:"11:30-23:45",type:"修改",status:false},
        {id:1,title:"门店公告",text:"未填写",type:"修改",status:false},
        {id:1,title:"门店简介",text:"未填写",type:"修改",status:false},
        {id:1,title:"发票",text:"不提供",type:"修改",status:false},
        {id:1,title:"后厨摄像头",text:"未绑定",type:"绑定",status:false},
    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleType:function(i){
        this.datas[i].status = !this.datas[i].status
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
<style lang="less" scoped>
.store-market {
  .market-item {
      display: flex;
      height: 100px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
    p {
        font-weight: 900px;
    }

    b {
        width: 600px;
        font-weight: normal;
        font-weight: 500px;
        color: #999;
        font-size: 14px;
    }

    span {
        color: #409EFF;
        font-size: 14px;
        cursor: pointer;
    }
  }
}

</style>