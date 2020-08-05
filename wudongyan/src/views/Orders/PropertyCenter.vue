<!-- 索赔中心 -->
<template>
<div class="property-center">
    <header>索赔中心</header>

    <el-tabs v-model="activeName">
    <el-tab-pane label="索赔申请" name="shenqing">
        <aside class="msg">
            <header>索赔规则</header>
            <p>索赔金额=商户实收金额x100%</p>
            <p>物流原因退款的订单可索赔(特殊情况如:未使用蜂鸟配送、超过索赔时效等场景不可发起索赔)<el-button type="text" size="small">查阅详细规则</el-button></p>
        </aside>    
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="orderId" label="流水号" ></el-table-column>
            <el-table-column prop="amount" label="金额" width="180"></el-table-column>
            <el-table-column prop="" label="操作" width="176">
                <el-button type="primary">发起</el-button>
                <el-button>查看</el-button>
            </el-table-column>
        </el-table>

    </el-tab-pane>


    <el-tab-pane label="索赔进度" name="jindu">
        <el-card class="info-card" style="margin-bottom:16px;padding:20px;" shadow="hover">
            <el-row>
                <el-col :span="8">
                    <header class="green"><b>0.00</b>元</header>
                    <p>已到账2单</p>
                </el-col>
                <el-col :span="8">
                    <header class="yellow"><b>0.00</b>元</header>
                    <p>待到账2单</p>
                </el-col>
                <el-col :span="8">
                    <header><b>0.00</b>元</header>
                    <p>审核中2单</p>
                </el-col>
            </el-row>
        </el-card>
        <el-row style="margin:0 0 10px">
        <el-select v-model="dateValue" :default-first-option="true">
            <el-option
            v-for="item in dateOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            ></el-option>
        </el-select>
        </el-row>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="orderId" label="流水号" width="180"></el-table-column>
            <el-table-column prop="amount" label="金额" width="180"></el-table-column>
            <el-table-column label="状态" >
                <template slot-scope="scope">
                    {{scope.row.status | transformStatus}}
                </template>
            </el-table-column>
            <el-table-column prop="" label="操作" width="176">
                <el-button>查看</el-button>
                <el-button>编辑</el-button>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
export default {
name: "",
components: {},
filters:{
    transformStatus(state) {  
        if(state == "NOT_COMPENSATED"){
            return "还未补偿"
        }else if(state == "COMPENSATED"){
            return "已补偿"
        }else if(state == "CANT_COMPENSATED"){
            return "不能补偿"
        }
    }
},
data() {
    return {
    activeName: "shenqing",
    dateOptions: [
        {
        value: "202008",
        label: "2020年8月",
        },
        {
        value: "202007",
        label: "2020年7月",
        },
        {
        value: "202006",
        label: "2020年6月",
        },
        {
        value: "202005",
        label: "2020年5月",
        },
        {
        value: "202004",
        label: "2020年4月",
        },
        {
        value: "202003",
        label: "2020年3月",
        },
    ],
    dateValue: "202008",
    tableData: [
        {
            orderId: "100027455049038461",
            amount: 31.54,
            date:"2020年6月6日",
            status: "CANT_COMPENSATED",
        },
        {
            orderId: "100027455049038461",
            amount: 31.54,
            date:"2020年6月6日",
            status: "NOT_COMPENSATED",
        },
        {
            orderId: "100027455049038461",
            amount: 31.54,
            date:"2020年6月6日",
            status: "COMPENSATED",
        },
        {
            orderId: "100027455049038461",
            amount: 31.54,
            date:"2020年6月6日",
            status: "NOT_COMPENSATED",
        }
    ],


    p: {
        id: "fbcae8d5-5708-4aef-8bea-6d0dc83f1740",
        result: {
        "123456": {
            orderId: "100027455049038461",
            amount: 31.54,
            status: "NOT_COMPENSATED",
        },
        },
        error: null,
    },
    p2: {
        id: "fbcae8d5-5708-4aef-8bea-6d0dc83f1740",
        result: {
        "123456": {
            orderId: "100027455049038461",
            amount: 31.54,
            compensable: false,
            applyReasons: ["TAKE_ORDER_TIMEOUT"],
            deniedReason: "非蜂鸟配送，不支持索赔",
        },
        },
        error: null,
    },
    shenqing: {
        orderId: "100027455049038461",
        reason: "FOOD_LOOKS_NOT_WELL",
        description: "食物不新鲜...",
    },
    };
},
computed: {},
watch: {},
methods: {
    getProperty:function (id){
        //获取一个索赔单详情
    }
},
created() {},
mounted() {},
beforeCreate() {},
beforeMount() {},
beforeUpdate() {},
updated() {},
beforeDestroy() {},
destroyed() {},
activated() {},
};
</script>
<style lang='less'  scoped>
.property-center {
    max-width: 1220px;
    margin: 0 auto;
    > header {
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .msg{
        header{
            font-size: 16px;
            line-height: 32px;
            font-weight: 600;
        }
        .el-button{
            margin-left: 10px;
        }
    }
    .info-card{
        text-align: center;
        font-size: 18px;
        header{
            font-size: 30px;
            font-weight: 300;
            b{
                font-size: 44px;
                margin-right: 4px;
            }
        }
        .green{
            color: rgb(10, 175, 46);
        }
        .yellow{
            color: rgb(204, 102, 29);
        }
    }
}
</style>