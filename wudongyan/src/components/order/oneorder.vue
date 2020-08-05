
<!-- 订单 -->
<template>
<div class="box-card order">
    <el-row class="order-header">
        <el-col class="order-index" :span="1">
            {{order.daySn}}
        </el-col>
        <el-col class="clearfix" :span="23">
            <div>
                {{order.headPromptForAppV2[0].text}}
            </div>
            <div class="order-state">
                {{order.statusForPrint}}
            </div>
        </el-col>
    </el-row>
    <div class="order-content">
        <el-row class="order-user">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="user-info clearfix" :span="23">
                <div class="user-order">
                    <span class="un">{{order.consigneeName}}</span>·
                    <span class="phone">查看手机号</span>
                    <template v-for="(item, index) in order.userTips" >
                        ·<span :key="index" class="user-tip">{{item.content}}</span>
                    </template>
                </div>
                <div class="order-position">
                    <span class="tip">{{order.consigneeAddress}}</span>
                    <span class="distance">{{order.distance}}</span>
                    <span class="map">查看地图</span>
                </div>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="ready-time">
            <el-col class="" :span="1">
                <i class="el-icon-dish-1"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <span>备餐时间 </span>
                <span>{{order.mealCompleteButton.prepareTime | secondToTime}}</span>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="order-timeline">
            <el-col class="" :span="1">
                <i class="el-icon-wind-power"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <el-button v-if="timelinestate" @click="timelinestate=!timelinestate" type="text" class="open-btn">展开</el-button>
                <el-button v-else @click="timelinestate=!timelinestate" type="text" class="open-btn">合并</el-button>
                <div class="clearfix el-col el-col-23">
                    <ul class="el-timeline" :class="{'hide':timelinestate}">
                        <li class="el-timeline-item" v-for="(item,index) in order.distTraceView.timeLines" :key="index">
                            <div class="el-timeline-item__tail"></div>
                            <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                            <div class="el-timeline-item__wrapper">
                                <div class="el-timeline-item__timestamp is-bottom">{{item.time.message}}</div>
                                <div class="el-timeline-item__content"> {{item.status.message}} </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row class="productions">
            <el-col class="" :span="1">
                <i class="el-icon-shopping-bag-1"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <div>{{order.goodsSummary}}</div>
                <el-row class="items" v-for="group in order.newGroups" :key="group.type">
                    <section v-for="item in group.items" :key="item.vfoodId">
                        <el-col :span="8" class="name">{{item.name}}</el-col>
                        <el-col :span="14" class="count">x{{item.quantity}}</el-col>
                        <el-col :span="2" class="price">{{parseFloat(item.price).toFixed(2)}}</el-col>
                    </section>

                </el-row>
                <el-divider></el-divider>
                <section :span="8" class="other">
                    <section>
                        <header class="title">其他</header>
                        <el-col :span="8" class="name">配送费</el-col>
                        <el-col :span="16" class="price">{{order.deliveryFee | formatMoney}}</el-col>
                    </section>
                </section>
                <section :span="8" class="onsale">
                    <header class="title">优惠</header>
                    <section v-for="(item,index) in order.activities" :key="index">
                        <el-col :span="8" class="name">{{item.name}}</el-col>
                        <el-col :span="16" class="price">{{item.amount | formatMoney}}</el-col>
                    </section>
                </section>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="user-pay">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23">
                <section>
                    <el-col :span="8" class="name">顾客实付</el-col>
                    <el-col :span="16" class="price">已支付 ¥ {{order.payAmount | formatMoney}}</el-col>
                </section>
                <section>
                    <el-col :span="8" class="name">本次收入</el-col>
                    <el-col :span="16" class="income price">¥ {{order.income | formatMoney}}</el-col>
                </section>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="options">
            <el-col class="" :span="1">
                <i class="el-icon-user"></i>
            </el-col>
            <el-col class="clearfix" :span="23"> 
                <section>
                    <el-col :span="8" class="msgs">
                        <p>完成时间 : {{order.settledTime | formatDate}}</p>
                        <p>下单时间 : {{order.activeTime | formatDate}}</p>
                        <p>单号 : {{order.id}}</p>
                    </el-col>
                    <el-col :span="16" class="btns">
                        <el-button>打印</el-button>
                        <el-button>订单退款</el-button>
                    </el-col>
                </section>
            </el-col>
        </el-row>
    </div>
</div>

</template>

<script>
import formatDate from '@/utils/date.js'
export default {
    name:'',
    components: {},
    filters:{
        formatDate(time) {
            let date = new Date(time)
            return formatDate( 'yyyy-MM-dd hh:mm',date);
        },
        formatMoney(money){
            return parseFloat(money).toFixed(2)
        },
        secondToTime(sec){
            return parseInt(sec/60) + "分" + sec%60 + "秒";
        }
    },
    props:["order"],
    data() {
        return {
            timelinestate:true,
        };
    },
    computed: {},
    watch: {},
    methods: {
    },
    created() {},
    mounted() {
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
.order{
    margin-top: 20px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 1px 5px 8px #67789975;
    align-items: center;
    line-height: 30px;
    >.el-row{
        padding: 20px;
    }
    .order-header{
        background-color: #f0f3f9;
        line-height: 30px;
        position: relative;
        .order-index{
            font-size: 30px;
            color: #1989fa;
            font-weight: 600;
        }
        .order-state{
            position: absolute;
            font-size: 14px;
            line-height: 30px;
            right: 26px;
            top:20px;
        }
    }
    .order-content{
        padding: 20px;
        .el-divider{
            margin: 12px 0;
        }
        .order-user{
            font-size: 14px;
            font-weight: 500;
            .user-info{
                span{
                    font-size: 14px;
                    font-weight: 300;
                    margin:0 10px;
                }
                .user-order{
                    .un{
                        font-weight: 600;
                        margin-left: 0;
                    }
                    .phone{
                        color:#4e8cfa;
                        cursor: pointer;
                    }
                    .user-tip{
                        font-size: 14px;
                        font-weight: 300;
                        margin:0 10px;
                    }
                }
                .order-position{
                    .tip{
                        margin-left: 0;
                    }
                    .distance{

                    }
                    .map{
                        color:#4e8cfa;
                        cursor: pointer;
                    }
                }
                
            }
        }
        .ready-time{
            span{
                margin-right: 10px;
            }
        }
        .order-timeline{
            .el-timeline{
                transition: .3s ease-in-out;
                li{
                    padding-bottom: 34px;
                    .el-timeline-item__node{
                        top: 4px;
                        left: 4px;
                    }
                    .el-timeline-item__tail{
                        top: 4px;
                        left: 10px;
                    }
                }
                li:first-child{
                    .el-timeline-item__node{
                        background-color: #1989fa;
                    }
                }
                .el-timeline-item__wrapper{
                    div{
                        float: left;
                        margin-right: 15px;
                    }
                }
            }
            .el-timeline.hide{
                height: 30px;
                overflow: hidden;
            }
        }
        .productions{
            .name,.count,.price{
                color: #5a5e66;
            }
            .count,.price{
                text-align: right;
                opacity: .8;
            }
            .price{
                padding-right: 8px;
            }
            .items{
            
            }
            .other,.onsale{
                header{
                    font-size: 12px;
                    opacity: .5;
                }
            }
        }
        .user-pay{
            line-height: 30px;
            .name{
                font-size: 16px;
                font-weight: 500;
            }
            .price{
                font-size: 16px;
                text-align: right;
                padding-right: 10px;
            }
            .income{
                color: red;
            }
        }
        .options{
            .msgs{
                p{
                    font-size: 12px;
                    color: rgb(99, 99, 99);
                    line-height: 16px;
                }
            }
            .btns{
                .el-button{
                    margin:10px 10px 0;
                    float: right;
                }
            }
        }
    }

}
</style>