<!-- 门店账户密码组件 -->
<template>
<div class=''>
    <div class="store-account-cont">
        <section class="account-items" v-for="msg,index in msgs">
            <p>{{msg.text}}</p>
            <b>{{msg.cont}}</b>
            <span @click.stop="handleUpdateType(index)">{{msg.type}}</span>
            <input type="text" v-model="msg.cont" @blur="handleUpdateType(index)" v-show="msg.status">
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
    msgs:[
        {id:1,text:"登录账号",cont:"abcdrfg",type:"",status:false},
        {id:2,text:"管理员手机",cont:"12345678910",type:"修改",status:false},
        {id:3,text:"登录密码",cont:"********",type:"修改",status:false},
        {id:4,text:"支付宝账号",cont:"未绑定，请在手机端的[设置-设置与安全]中进行绑定",type:"",status:false},
        {id:5,text:"最近登录设备",cont:"Windows",type:"查看更多",status:false},
    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleUpdateType:function(i){
        this.msgs[i].status = !this.msgs[i].status
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
    .store-account-cont {
        .account-items {
            display: flex;
            height: 100px;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            p {
                font-weight: 900px;
                color: #000;
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