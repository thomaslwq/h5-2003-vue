<!-- 总览 -->
<template>
    <div class="overview">
        <!-- 今日实时看板开始 -->
        <div class="overview-today-timing">
        <!-- 今日实时看板头部开始 -->
        <div class="today-timing-top">
            <h3>今日实时看板</h3>
            <ul>
            <li>时间</li>
            <li>
                <span>比昨日</span>
                <ul>
                <li>比昨日</li>
                <li>比上一周</li>
                </ul>
            </li>
            </ul>
        </div>
        <!-- 今日实时看板头部结束 -->
        <!-- 图标开始 -->
        <div class="today-timing-table">
            <ul>
            <li v-for="(item,index) in todayTiming" :key="item+index" :class="{'today-timing-active':item.isTodayTiming}" @click="todayTimingAna(item,index)">
                <span>
                    <span>{{item.name}}</span>
                    <i>?</i>
                </span>
                <em>{{item.mount}}</em>
                <p>
                    <span>比上周一</span>
                    <i v-show="item.float!=''">^</i>
                    <b>{{item.float}}</b>
                </p>
                
                    
            </li>
            </ul>
            <div></div>
        </div>
        <!-- 图标结束 -->
        </div>
        <!-- 今日实时看板结束 -->
        <!-- 历史数据概览开始 -->
        <div class="history-data">
            <div class="history-data-top">
                <h3>历史数据概览</h3>
                <p>
                此处展示为真实数据，不影响用户端排名保护与销量展示。详情请见&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">疫情期间月售数据保护说明</a>
                </p>
                <div class="history-data-nav">
                    <div class="history-data-nav-right">
                        <p v-for="(item,index) in nav" :key="index+item" :class="{'navActive':item.isNavActive}"><span>{{item.name}}</span></p>
                    </div>
                    <div class="history-data-nav-left">
                        <p>时间</p>
                        <p>
                        比前
                        <em></em>
                        </p>
                    </div>
                </div>
                <div class="history-data-content"></div>
            </div>
        </div>
        <!-- 历史数据概览结束 -->
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            todayTiming:[
                {name:'预计收入',mount:0,float:'',isTodayTiming:true,},
                {name:'营业额',mount:0,float:'',isTodayTiming:false,},
                {name:'有效订单',mount:0,float:'',isTodayTiming:false,},
                {name:'访问次数',mount:3,float:3,isTodayTiming:false,},
                {name:'访问人数',mount:3,float:'',isTodayTiming:false,},                
                {name:'下单转化率',mount:0,float:'',isTodayTiming:false,},                
            ],
            nav:[
                {name:'昨天',isNavActive:true},
                {name:'近7天',isNavActive:false},
                {name:'近30天',isNavActive:false},
                {name:'自定义',isNavActive:false},
                {name:'按周',isNavActive:false},
                {name:'按月',isNavActive:false},
                ],
            formulaObj:{name:'收入',mount:40.99,float:11.5,isTodayTiming:true,totalName:'营业额',footName:'支出',type:'-',totalMount:71,footMount:30,show:1},
        };
    },
    computed: {},
    watch: {},
    methods: {
        todayTimingAna:function(obj,index){
            this.formulaObj=obj
            this.todayTiming.forEach(function(item){item.isTodayTiming=false})
            this.todayTiming[index].isTodayTiming=true
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
<style lang="less" scoped>
.overview {
    width: 920px;
    margin: 0 auto;
    .overview-today-timing {
        margin-bottom:20px ;
        .today-timing-top {
            display: flex;
            justify-content: space-between;
            h3 {
                color: #303133;
                font-size: 16px;
                font-weight: 400;
            }
            >ul {
                display: flex;
                justify-content: space-evenly;
                color: #303133;
                font-size: 12px;
                font-weight: 400;
                >li{
                    padding-right: 20px;
                    line-height: 12px;
                    height: 12px;
                    padding-left: 20px;
                }
                >li:nth-child(2){
                    border-left: 1px #666667 solid;
                    position: relative;
                    >ul {
                        position: absolute;
                        width: 70px;
                        height: 70px;
                        border: 1px solid rgb(189, 186, 186);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        background-color: #fff;
                        align-items: center;
                        margin-left:-20px;
                        margin-top: 10px;
                        display: none;
                    }
                }
            }
        }
    
        .today-timing-table {
            width: 100%;
            height: 600px;
            border:1px solid rgb(135, 132, 132);
            ul {
                height: 150px;
                border-bottom:1px solid rgb(135, 132, 132);
                display: flex;
                background-color: #c2cbd8;
                li {
                    flex: 1;
                    border-left:1px solid rgb(135, 132, 132);
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    padding-left: 20px;
                >span {
                    >span {
                        color: #666667;
                        font-size: 16px;
                        font-weight: 500;
                    }

                    >i {
                    }
                }

                em {
                    color: #1989FA;
                    font-size: 16px;
                    font-weight: bold;
                }

                >p {
                        span {

                        }

                        i {
                        }

                        b {
                            color: #79C592;
                        }
                    }
                }
                .today-timing-active{
                    border-top:2px solid #1989FA;
                }
            }
            >.today-timing-formula-warp{
                min-height: 40px;
                padding-top:15px;
                padding-bottom:15px;
                background-color: rgb(220, 203, 203);
                >.today-timing-formula {
                    display: flex;
                    justify-content: start;
                    align-items: center;
                    >span{
                        display: flex;
                        justify-content: start;
                        align-items: center;
                        flex-direction: column;
                        margin-left: 30px;
                        >em{
                            margin-top: 10px;
                        }
                    }
                }
            }
            
            div {

                }
            }
        }
    }
    
    .history-data {
        .history-data-top {

            h3 {
                color: #303133;
                font-size: 16px;
                font-weight: 400;
            }

            p {
                height: 30px;
                line-height: 30px;
                a {
                    color:#1A89FA;
                }
            }

            .history-data-nav {
                display: flex;
                justify-content: space-between;
                .history-data-nav-right {
                    display: flex;
                    justify-content: start;
                    p {
                        padding: 10px 0;
                        span {
                            padding-left:15px;
                            padding-right: 15px;
                            display: block;
                            height: 12px;
                            line-height: 12px;
                            border-right:1px solid rgb(174, 171, 171)
                        }
                    }
                    >p:last-child{
                        span{
                            border:none;
                        }
                    }
                    p:hover{
                        color:#fff;
                        background-color: #1989FA;
                    }
                    .navActive{
                        color:#fff;
                        background-color: #1989FA;
                    }
                }

                .history-data-nav-left {
                    display: flex;
                    justify-content: space-evenly;
                    p {

                    }
                }
            }
        }   
        .history-data-content {

        }
        
}
</style>
