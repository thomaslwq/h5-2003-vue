<!-- 门店信息 -->
<template>
<div class=''>
    <div class="storeinfo-cont">
        <div class="stor-message-top">
            <p>门店信息</p>
            <span>如需帮助可联系<a href="#">以下人员</a></span>
        </div>
        <div class="stor-message-nav">
            <section :class="['store-nav-items',{'active':activeTab == msg.type}]" 
            @click.stop="handleUpdate(msg.type,index)"
            v-for="msg,index in msgs">{{msg.text}}</section>
            
        </div>
        <storeinfo v-show="activeTab=='baseinfo'"></storeinfo> 
        <storemarket v-show="activeTab=='marketing'"></storemarket>
        <storeattes v-show="activeTab=='attes'"></storeattes>
        <storeaccount v-show="activeTab=='account'"></storeaccount>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import storeinfo from '../../components/store/StoreBase'
import storemarket from '../../components/store/StoreMarketing'
import storeattes from '../../components/store/StoreAttestation'
import storeaccount from '../../components/store/StoreAccount'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    storeinfo,storemarket,storeattes,storeaccount
},
data() {
//这里存放数据
return {
    msgs:[
        {id:1,text:"基本信息",type:"baseinfo"},
        {id:2,text:"营业信息",type:"marketing"},
        {id:3,text:"资质认证",type:"attes"},
        {id:4,text:"账户密码",type:"account"},
    ],
    activeTab:"baseinfo",
    
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleUpdate:function(type,i){
        this.activeTab = type
        this.types = type
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
.storeinfo-cont {
    width: 980px;
    margin: 0 auto;
  .stor-message-top {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    p {
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }

    span {
        font-size: 12px;
        color: #000;
      a {
          color: #409EFF;
      }
    }
  }

  .stor-message-nav {
      height: 40px;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #999;
    .store-nav-items {
        height: 40px;
        margin-right: 20px;
        color: #000;
    }
    .active{
        color: #409EFF;
        border-bottom: 2px solid #409EFF;
    }
  }
}

</style>