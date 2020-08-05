<!-- 订单查询 -->
<template>
<div class='container'>
    <el-row class="options">
            <el-row class="option">
                <span :span="3" style="line-height:40px;margin:0 20px">订单类型:</span>
                        <el-radio-group v-model="orderType">
                            <el-radio-button  label="全部"></el-radio-button>
                            <el-radio-button  label="预订单"></el-radio-button>
                        </el-radio-group>
            </el-row>
            <el-row class="option">
                <span :span="3" style="line-height:40px;margin:0 20px">订单类型:</span>
                <el-radio-group v-model="orderDate">
                    <el-radio-button  label="近两日"></el-radio-button>
                </el-radio-group>
                <el-dropdown trigger="click" :hide-on-click="false" style="margin-left:20px">
                    <span class="el-dropdown-link">
                        具体日期<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <el-calendar  :range="['2019-3-04', '2019-03-24']" style="width:500px" v-model="calenderDate"></el-calendar>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
            <el-row class="option">
                <span :span="3" style="line-height:40px;margin:0 20px">订单类型:</span>
                        <el-radio-group v-model="orderStatus">
                            <el-radio-button  label="全部"></el-radio-button>
                            <el-radio-button  label="进行中"></el-radio-button>
                            <el-radio-button  label="已完成"></el-radio-button>
                            <el-radio-button  label="已取消/退单"></el-radio-button>
                            <el-radio-button  label="出餐慢"></el-radio-button>
                        </el-radio-group>
            </el-row>
    </el-row>
    <el-row class="order-wrap">
        <order v-for="(order,index) in orders" :key="index" :order="order"></order>
    </el-row>
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
            orders:[],
            orderType:"全部",
            calenderDate:"",
            orderDate:"",
            orderStatus:"全部",
        };
    },
    computed: {},
    watch: {
        calenderDate:function(date){
            this.orderDate = ""
            //用date做筛选
        }
    },
    methods: {},
    created() {},
    mounted() {
        this.$axios("http://39.105.114.242/elemeorder/").then(res=>{
            this.orders = res.result.orders;
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
    max-width: 1220px;
    margin:0 auto;
    position: relative;
    .order-wrap{
        
    }
    .options{
        position: sticky;
        top: 0;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 -30px 0px 30px rgb(255, 255, 255), 0px 0px 10px 0px rgba(19, 19, 19, 0.26);
        z-index: 10;
        width: 100%;
        .option{
            margin-bottom: 12px;
        }
    }
}

</style>