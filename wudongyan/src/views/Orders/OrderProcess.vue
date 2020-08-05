<!-- 订单处理 -->
<template>
<div class='order-container'>
    <el-tabs v-model="activeName" class="skity">
        <el-tab-pane label="新订单" name="newOrder">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="预订单提醒" name="orderNitification">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="配送异常" name="orderError">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="索赔" name="orderProperty">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="催单" name="cuidan">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="取消单" name="cancel">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>
        <el-tab-pane label="退单" name="reject">
            <div class="container">
                <order class="center" v-for="(order,index) in orders" :key="index" :order="order"></order>
            </div>
        </el-tab-pane>

    </el-tabs>
</div>
</template>

<script>
import order from '@/components/order/oneorder.vue'
export default {
    name:'',
    components: {
        order
    },
    data() {
        return {
            tempOrders:[],
            orders:[],
            activeName:"newOrder"
        };
    },
    computed: {

    },
    watch: {
        activeName:function(){
            var i = parseInt(Math.random()*3)
            this.orders = this.tempOrders.filter((value,index)=>{
                return index==i
                
            })
        }
    },
    methods: {

    },
    created() {},
    mounted() {
        var _this = this
        this.$axios("http://39.105.114.242/elemeorder/").then(res=>{
            _this.tempOrders = res.result.orders;
            var i = parseInt(Math.random()*3)
            _this.orders = _this.tempOrders.filter((value,index)=>{
                return index==i
            })
        })
    },
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
}
</script>
<style lang='less'  scoped>
.container{
    height: calc(100vh - 155px);
    overflow-y:scroll;
}
.center{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    max-width: 1220px;
}
</style>