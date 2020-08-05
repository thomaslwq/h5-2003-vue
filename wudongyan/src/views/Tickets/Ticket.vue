<!-- 优惠券 -->
<template>
<div class='ticket' @click="ticketMenuShow=true">
    <div class="ticket-title clear-float">
        <div class="title-left">外卖券管理</div>
        <div class="title-right">
            <div class="cellData ticket-button">销售数据</div>
            <div class="addTicket ticket-button" @click.stop="ticketMenuShow=!ticketMenuShow">新建优惠券</div>
            <div :class="['ticketMenu',{'hidden':ticketMenuShow}]">
                <div class="ticketMenu-item clear-float"  v-for="(item,index) in ticketMenu" :key="item.id+index" @click="changeRouter(item.router)">
                    <div class="dt"><img src="" alt="">图片</div>
                    <div class="dd">
                        <div class="title">{{item.title}}</div>
                        <div class="message">{{item.text}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tabs clear-float">
        <div :class="['tabs-item',{'tabs-item-active':tabsActive==item.text} ]" v-for="(item,index) in tabsArr" :key="item.id+index" @click="handlerTabs(item.text)">
            {{item.text}}({{item.count}})
        </div>
        <div class="delRecord">
            删除记录
        </div>
    </div>
    <div class="ticket-tabs">
        <div :class="['ticket-tabs-item', 'ticket-button',{'ticket-tabs-active':ticketActive==item.text}]"  v-for="(item,index) in ticketArr" :key="item.id+index" @click="handerTicket(item.text,'index')">
            {{item.text}}
        </div>

    </div>
    <div class="content">
       
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import ticketView from "../../components/ticket/ticketView"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
     profile:{
       template: `<div class="profile">产品介绍</div>`
    },
    // index:{
    //    template: `<div class="profile">产品介绍</div>`
    // },
},
data() {
//这里存放数据
return {
    tabsActive:"全部外卖券",
    ticketActive:"全部外卖券",
    ticketMenuShow:true,
    componentId:'profile',
    tabsArr:[
        {id:1,text:"全部外卖券",count:0},
        {id:2,text:"已上架",count:0},
        {id:3,text:"下架",count:0}
        
    ],
    ticketArr:[
         {id:1,text:"全部外卖券",type:"allTickets"},
         {id:2,text:"商品兑换券",type:"shopExchange"},
         {id:3,text:"代金券"},
         {id:4,text:"组合券包"},
         {id:5,text:"配送券"},
         
    ],
    ticketMenu:[
        {id:1,text:"商品一次售卖多份，顾客分多次使用，提前锁定顾客消费。",title:"商品兑换券",imgs:"",router:"exchange"},
        {id:2,text:"顾客消费时抵用消费金额，刺激顾客消费，提升客单价。",title:"代金券",imgs:"",router:"voucher"},
        {id:3,text:"支持不同类型代金券或商品兑换券组合售卖。",title:"组合券包",imgs:"",router:"combination"},
        {id:4,text:"顾客消费时可抵扣运费，刺激顾客消费。",title:"配送券",imgs:"",router:"distribution"}
    ]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
       handlerTabs:function(text){
           this.tabsActive = text;
       },
       handerTicket:function(text){
           this.ticketActive = text;
       },

       changeRouter:function(name){
           this.$router.push({name:name})
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
.ticket {
    font-size: 12px;
    position: relative;
    left: 0;
    right: 0;
    min-width: 800px;
  .ticket-title {
    .title-left {
        float: left;
        font-size: 18px;
    }

    .title-right {
        position: relative;
        float: right;
        .cellData{
            float: left;
            &:hover{
                 color: #4E82BE;
                background-color: #ECF5FC;
                border-color: #C4D4E4;
            }
        }
        .addTicket{
            float: left;
            margin-left: 10px;
            background-color: #1A88F9;
            color: white;
           
        }
        .ticketMenu{
            position: absolute;
            right: 0;
            top: 40px;
             width: 300px;
             padding: 20px;
            border: 2px solid #E7EAEF;
            background-color: white;
            box-sizing: border-box;
           .ticketMenu-item {
               cursor: pointer;
               margin-bottom: 10px;
           .dt { 
                 width: 80px;
                 line-height: 40px;
                 float: left;
                img {
                   
                   
                }
            }

            .dd {
                float: right;
                width: 160px;

                .title {
                    font-size: 14px;
                    margin-bottom: 5px;
                }

                .message {
                    color: #979A9F;
                }
            }
        }
        }
        .hidden{
            display: none;
        }
    }
  }

  .tabs {
      margin-top: 10px;
      border-bottom:2px solid #E6E7EB;
       height: 30px;
        line-height: 28px;
        .tabs-item {
            float: left;
            margin-right: 10px;
            cursor: pointer;
           
        }
        .tabs-item-active{
             color: #578DC1;
            border-bottom: 2px solid #467FB6;
        }

    .delRecord {
        float: right;
    }
  }
  .ticket-button{
      padding: 5px;
      border: 1px solid #EDEEEF;
      border-radius: 5px;
      color: #4F4A4E;
       cursor: pointer;
  }
  .ticket-tabs-active{
      color: #4E82BE;
      background-color: #ECF5FC;
      border-color: #C4D4E4;
  }
  .ticket-tabs{
      margin-top: 15px;
      .ticket-tabs-item{
          float: left;
          margin-right: 10px;
          cursor: pointer;
      }
  }
  .clear-float{
     &:after{
        content: "";
        clear: both;
        display: block;
     }
  }
  .left{
      float: left;
  }
  .right{
      float: right;
  }
}
</style>