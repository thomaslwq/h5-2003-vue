<!-- 营销 -->
<template>
<div class=''>
    <div class="center-cont">
        <h1 class="center-title">营销中心</h1>
        <div class="center-cont-middle">
            <div class="center-cont-left">
                <p class="center-title-cont">
                    <b><i class="el-icon-info"></i>【店外营销红包】和【超级会员红包】升级啦！</b><span>查看详情</span>
                </p>
                <div class="center-market-cont">
                    <p class="market-top">
                        <b><i>[智能满减]</i> 即日下线</b>
                        <a href="#">详情点击</a>
                    </p>
                    <p class="market-title">
                        <b>限时报名</b>
                        <i>更多活动></i>
                    </p>
                    <div class="center-active">
                        <div class="center-active-left">
                            <p class="active-title">8月限时秒杀招商！【热卖商品限时热卖】</p>
                            <div class="active-title-bottom">
                                <div class="active-label">
                                    <p class="active-label-top">
                                        <span>首页专区</span>
                                        <span>引流神器</span>
                                    </p>
                                    <i>49797家店已报名</i>
                                </div>
                                <div class="active-button">
                                    <span>去报名</span>
                                </div>
                            </div>
                        </div>
                        <div class="center-active-left">
                            <p class="active-title">超级会员活动</p>
                            <div class="active-title-bottom">
                                <div class="active-label">
                                    <p class="active-label-top">
                                        <span>首页流量</span>
                                        
                                    </p>
                                    <i>1524家店已报名</i>
                                </div>
                                <div class="active-button">
                                    <span>去报名</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="market-title">
                        <b>下午茶商家都在用</b>
                    </p>
                    <div class="market-bottom">
                        <section class="market-bottom-items" v-for="msg,index in msgs">
                            <p>{{msg.text}}</p>
                            <b>{{msg.title}}</b>
                        </section>
                    </div>
                </div>
            </div>
            <div class="center-cont-right">
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'',
    components: {},
    data() {
        return {
            msgs:[
                {id:1,text:"减配送费",title:"订单量提升14%"},
                {id:2,text:"超值换购",title:"每单多赚3元"},
                {id:3,text:"门店新客立减",title:"新客增加9%"},
            ]
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
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
.center-cont {
    width: 980px;
    margin: 0 auto;
  .center-title {
      height: 50px;
      padding-left: 15px;
      color: #000;
  }
  .center-cont-left{
      width: 500px;
        .center-title-cont {
            height: 40px;
            width: 487px;
            background-color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 15px;
            padding:0 15px;
            b{
                font-weight: normal;
                font-size: 13px;
                .el-icon-info {
                    margin-right: 5px;
                }
            }
            span {
                color: #409EFF;
            }
        }
        .center-market-cont {
            height: 360px;
            margin-top: 10px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 15px;
            .market-top {
                height: 80px;
                background-color: #409EFF;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                b {
                    margin-left: 80px;
                    color: #fff;
                    i{
                        color: skyblue;
                        font-style: normal;
                    }

                }

                a {
                    width: 80px;
                    height: 30px;
                    background-color: blue;
                    color: #fff;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 30px;
                    margin-top: 10px;
                    margin-left: 70px;
                }
            }
            .market-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 10px;
                b{
                    font-weight: normal;
                    color: #999;
                }
                i{
                    font-style: normal;
                    color: #999;
                }
            }
            .center-active{
                height: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 5px;
                .center-active-left{
                    height: 100px;
                    width: 230px;
                    border-radius: 5px;
                    background-color: orange;
                    padding: 15px;
                    // overflow: hidden;
                    .active-title{
                        color: #000;
                        font-size: 14px;
                        width: 200px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow : ellipsis;
                    }
                    .active-title-bottom{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .active-label{
                            margin-top: 5px;
                            .active-label-top{
                                display: flex;
                                justify-content: space-between;
                                
                                span{
                                    width: 50px;
                                    height: 20px;
                                    margin-right: 8px;
                                    font-size: 12px;
                                    text-align: center;
                                    line-height: 20px;
                                    background-color: peru;
                                }
                            }
                            i{
                                font-style: normal;
                                font-size: 10px;
                            }
                        }
                        .active-button{
                            span{
                                display: inline-block;
                                width: 60px;
                                height: 30px;
                                background-color: peru;
                                color: #fff;
                                border-radius: 30px;
                                text-align: center;
                                line-height: 30px;
                            }
                        }
                    }
                }
                .center-active-right{
                    width: 230px;
                    height: 100px;
                    background-color: orange;
                    border-radius: 5px;
                }
            }
            .market-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 15px;
                .market-bottom-items {
                    width: 150px;
                    height: 70px;
                    background-color: powderblue;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    p {
                        font-size: 20px;
                        color: #000;
                    }
                    b {
                        font-weight: normal;
                        color: rgb(169, 135, 250);
                        font-size: 13px;
                    }
                }
            }
        }
    }
}
</style>
