<!--  -->
<template>
<div class="flow">
    <div>
        <h3>流量转化</h3>
        <el-tabs  @tab-click="handleClick" v-model="activeFatherZh">
            <el-tab-pane label="用户管理" name="first">
                <div>
                    
                    <el-tabs type="card" @tab-click="handleClick" v-model="activeSonZh">
                        <el-tab-pane v-for="(item,index) in user" :label="item.label" :name="item.name" :key="index+item"><flowuserzh :arrData="item.userArr"></flowuserzh></el-tab-pane>
                    </el-tabs>
                </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">新老客</el-tab-pane>
        </el-tabs>
    </div>


    <!-- <div>
        <h3>流量趋势</h3>
        <el-tabs  @tab-click="handleClick" v-model="activeFatherQs" type="card">
                <el-tab-pane v-for="item in flowQs" :key="item" :label="item.label" :name="item.name" >
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane v-for="data in item.flowQsArr" :key="data" :label="data.label" :name="data.name">
                            <flowqs :flowQs="data.data" ></flowqs>
                        </el-tab-pane>
                        
                    </el-tabs>
                </el-tab-pane>
        </el-tabs>
        
    </div> -->

    

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import flowuserzh from './flow/flow-zh-user'
import flowqs from './flow/flow-qs'
export default {
//import引入的组件需要注入到对象中才能使用
components: {flowuserzh,flowqs},
data() {
//这里存放数据
    return {
        activeFatherZh:'first',
        activeSonZh:'first',
        activeFatherQs:'first',
        activeFatherQs:'first',
        user:[
                {
                    name:'first',
                    label:'今天实时',
                    userArr:[
                                {
                                    name: "访问人数",
                                    mount: 9,
                                    time: "比前一周期",
                                    changeMount: 4,
                                    title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                {
                                    name: "下单次数",
                                    mount: 2,
                                    time: "比前一周期",
                                    changeMount: 4,
                                    title:
                                        "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                { name: "下单人数", mount: 2, time: "比前一周期", changeMount: 4,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                { name: "下单转化率", mount: 22.2, time: "比前一周期", changeMount: 4,title: "下单人数/访问人数",},
                        ],
                },
                {
                    name:'second',
                    label:'昨天',
                    userArr:[
                                {
                                    name: "访问人数",
                                    mount: 13,
                                    time: "比上一周",
                                    changeMount: 2,
                                    title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                {
                                    name: "下单次数",
                                    mount: 3,
                                    time: "比上一周",
                                    changeMount: 1,
                                    title:
                                        "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                { name: "下单人数", mount: 3, time: "比上一周", changeMount: 1,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                { name: "下单转化率", mount: 23.2, time: "比上一周", changeMount: 4.9,title: "下单人数/访问人数",},
                        ],
                },
                {
                    name:'third',
                    label:'近7天',
                    userArr:[
                                {
                                    name: "访问人数",
                                    mount: 76,
                                    time: "比前7日",
                                    changeMount: 28,
                                    title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                {
                                    name: "下单次数",
                                    mount: 28,
                                    time: "比前前7日",
                                    changeMount:8,
                                    title:
                                        "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                { name: "下单人数", mount: 24, time: "比前前7日", changeMount: 10,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                { name: "下单转化率", mount: 31.6, time: "比前前7日", changeMount: 2.4,title: "下单人数/访问人数",},
                            ],
                },
                {
                    name:'fourth',
                    label:'近30天',
                    userArr:[
                                {
                                    name: "访问人数",
                                    mount: 225,
                                    time: "比前30天",
                                    changeMount: 66,
                                    title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                {
                                    name: "下单次数",
                                    mount: 65,
                                    time: "比前30天",
                                    changeMount: 42,
                                    title:
                                        "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",
                                },
                                { name: "下单人数", mount: 61, time: "比前30天", changeMount: 39,title: "根据订单创建时间统计，本店或连锁店的有效订单完成数量；当前仅统计饿了么App、淘宝小程序、支付宝小程序；微信渠道的数据暂未统计。",},
                                { name: "下单转化率", mount: 27.1, time: "比前30天", changeMount:13.3,title: "下单人数/访问人数",},
                            ],
                },
        ],
        flowQs:[
            {
                name:'first',
                label:'今天实时',
                xAxis:['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
                flowQsArr:[
                    {
                        name:'first',
                        label:'访问人数',
                        data:[0,0,0,0,0,0,0,0,0,0,2,3,4,5,6,2,5,0,0,8,12,15,1]
                    },
                    {
                        name:'second',
                        label:'下单人数',
                        data:[0,0,0,0,0,0,0,0,0,0,2,1,3,0,1,0,2,0,0,0,1,0,0]
                    },
                    {
                        name:'third',
                        label:'下单转化率',
                        data:[0,0,0,0,0,0,0,0,0,0,'100%','33.3%','75%',0,'15%','40%',0,0,0,0,'8%',0,0]
                    },
                ]
            },
            {
                name:'second',
                label:'每天累计',
                xAxis:['07-21','07-22','07-23','07-24','07-25','07-26','07-27','07-28','07-29','07-30','07-31','08-01','08-02','08-03'],
                flowQsArr:[
                    {
                        name:'first',
                        label:'访问人数',
                        data:{
                            myShop:[21,24,12,32,40,12,42,34,45,56,35,53,47,50],
                            sameShop:[120,98,130,140,150,112,96,98,124,132,147,123,124,130]
                        },

                    },
                    {
                        name:'second',
                        label:'下单人数',
                        data:{
                            myShop:[2,3,5,6,5,7,9,12,13,5,17,9,8,14],
                            sameShop:[30,35,34,42,50,45,46,35,34,29,31,35,36,35]
                        }
                    },
                    {
                        name:'third',
                        label:'下单转化率',
                        data:{
                            myShop:['5%','6%','4%','3%','5%','6%','5%','7%','8%','9%','2%','5%','6%','4%'],
                            sameShop:['21%','30%','29%','32%','31%','30%','36%','35%','34%','36%','34%','31%','35%','36%']
                        }
                    },
                ]
            },
            {
                name:'third',
                label:'每周累计',
                xAxis:['06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21','06/15-06/21'],
                flowQsArr:[
                    {
                        name:'first',
                        label:'访问人数',
                        data:[30,35,50,45,51,29,36]
                    },
                    {
                        name:'second',
                        label:'下单人数',
                        data:[5,7,12,11,15,9,10]
                    },
                    {
                        name:'third',
                        label:'下单转化率',
                        data:['20%','12%','24%','18%','20%','14%','15%']
                    },
                ]
            },
            {
                name:'fourth',
                label:'每月累计',
                xAxis:['2020/02','2020/03','2020/04','2020/05','2020/06','2020/07','2020/08'],
                flowQsArr:[
                    {
                        name:'first',
                        label:'访问人数',
                        data:[450,460,470,485,500,498,470]
                    },
                    {
                        name:'second',
                        label:'下单人数',
                        data:[80,90,120,157,123,145,156]
                    },
                    {
                        name:'third',
                        label:'下单转化率',
                        data:['12%','20%','23%','31%','34%','21%','22%']
                    },
                ]
            },
        ]
    };
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleClick(tab, event) {
        console.log(tab, event);
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
.flow{
    width: 920px;
    margin: 0 auto;
    >div{
        margin-top: 30px;
    }
}
</style>