<!-- 门店资质认证组件 -->
<template>
<div class=''>
    <div class="store-attes">
        <section class="attes-items" v-for="data,index in datas">
            <p>{{data.title}}</p>
            <b>{{data.text}}</b>
            <span @click.stop="handleUpdateStatus(index)">{{data.type}}</span>
            <input type="text" v-model="data.text" v-show="data.status" @blur="handleUpdateStatus(index)">
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
        {id:1,title:"营业资质认证",text:"已认证",type:"查看",status:false},
        {id:2,title:"个人身份认证",text:"已认证",type:"查看",status:false},
        {id:1,title:"食品安全等级",text:"未上传",type:"上传",status:false},
    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleUpdateStatus:function(i){
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
.store-attes {
  .attes-items {
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