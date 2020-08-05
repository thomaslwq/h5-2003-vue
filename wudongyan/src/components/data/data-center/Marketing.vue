<!-- 总览 -->
<template>
    <div class="overview">
        <!-- 今日实时看板开始 -->
        <div class="overview-today-timing">
        <!-- 今日实时看板头部开始 -->
        <div class="today-timing-top">
            <div>
                <p v-for="(item,index) in nav" :key="item+index" :class="{'nav-active':isNavActive}"><span>{{item.name}}</span></p>
            </div>
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
                    <i>|</i>
                    <b>{{item.float}}</b>
                </p>
                
                    
            </li>
            </ul>
            <div class="today-timing-formula-warp">
                <div class="today-timing-formula" v-if="formulaObj.show>0">
                    <span>
                        <em>{{formulaObj.name}}</em>
                        <em>{{formulaObj.mount}}</em>
                    </span>
                    <span>=</span>
                    <span>
                        <em>{{formulaObj.totalName}}</em>
                        <em>{{formulaObj.totalMount}}</em>
                    </span>
                    <span>{{formulaObj.type}}</span>
                    <span>
                        <em>{{formulaObj.footName}}</em>
                        <em>{{formulaObj.footMount}}</em>
                    </span>
                </div>
            </div>
            <div></div>
        </div>
        <!-- 图标结束 -->
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            todayTiming:[
                {name:'收入',mount:40.99,float:11.5,isTodayTiming:true,totalName:'营业额',footName:'支出',type:'-',totalMount:71,footMount:30,show:1},
                {name:'顾客实付',mount:56,float:11,isTodayTiming:false,show:0},
                {name:'客单价',mount:18.67,float:3.83,isTodayTiming:false,totalName:'顾客实付',footName:'有效订单',type:'/',totalMount:56,footMount:3,show:1},
                {name:'有效订单',mount:3,float:1,isTodayTiming:false,show:0},
                {name:'无效订单',mount:0,float:0,isTodayTiming:false,show:0},                
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
            >div {
                display: flex;
                >p{
                    color: #303133;
                    font-size: 16px;
                    font-weight: 400;
                    padding: 10px 0;
                    
                    >span{
                        display: block;
                        height: 12px;
                        line-height: 12px;
                        padding-right: 15px;
                        padding-left: 15px;
                        border-right: 1px solid #959393;
                    }
                    
                }
                p:last-child{
                    >span{
                        border:none;
                    }
                }
                .nav-active{
                    background-color: #1989FA;
                    color: #fff;
                }
                >p:hover{
                    background-color: #1989FA;
                    color: #fff;
                }
                
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

    .history-data {
        .history-data-top {
        h3 {
        }

        p {
            a {
            }
        }

        div {
            ul {
            li {
            }
            }

            div {
            p {
            }
            }
        }
        }

        .history-data-content {
        }
    }
}
</style>
