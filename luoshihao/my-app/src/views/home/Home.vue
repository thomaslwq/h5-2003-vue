<!-- 页面 -->
<template>
<div id="main_body">

<!-- 固定定位的头部 -->
        <div id="main_body_title">后台主页</div>
        
<!-- 内容 -->
        <div id="main_body_con">

           <!-- 上面的3组DIV -->
            <div id="main_body_con_header">
                    
                    <!-- 左上第一个DIV -->
                    <div id="today_data_list">
                    <div id="title"><span class="vertical"></span>
                    <h4>今日数据统计</h4>
                    </div>

                    <div id="list">
                        <div id="list_first">箭头</div>
                        <div id="list_data"><p>今日订单数量</p>
                            <h5>vue数据</h5></div>
                        <div id="list_data"><p>与昨日数量比</p>
                            <h5>vue数据</h5></div>
                    </div>
                    <div id="list">
                        <div id="list_first">箭头</div>
                        <div id="list_data"><p>今日订单总金额</p>
                            <h5>vue数据</h5></div>
                        <div id="list_data"><p>与昨日金额比</p>
                            <h5>vue数据</h5></div>
                    </div>
                    <div id="list">
                        <div id="list_first">箭头</div>
                        <div id="list_data"><p>今日下单商户数</p>
                            <h5>vue数据</h5></div>
                        <div id="list_data"><p>与昨日数量相比</p>
                            <h5>vue数据</h5></div>
                    </div>
                    <div id="list">
                        <div id="list_first">箭头</div>
                        <div id="list_data"><p>平台拥有总商户数</p>
                            <h5>vue数据</h5></div>
                        <div id="list_data"><p>昨日总商户数</p>
                            <h5>vue数据</h5></div>
                    </div>
                
                </div>
                
                <!-- 上方第二个DIV -->
                <div id="city_echarts">
                    <div id="title"><span class="vertical"></span><h4>全国开通城市分布图</h4></div>
                    <div style="width: 100%;
            height: 325px;">
                    <echartsMap></echartsMap>
                    </div>
                </div>
                
                <!-- 第三个DIV -->
                <div id="data_time">
                <div id="title">
                <span class="vertical"></span>
                    <h4>今日数据统计</h4>
                    </div>
                    <div class="data_time_list" v-for="(item,index) in dataTime" :key="index">
                        <p>{{item.time}}</p><div class="percentage"><div></div></div><span>{{item.quantity}}单</span>
                        <!-- 循环12次 用计算属性算出 item里面的最大的数 然后用其他除以他 生成百分比条 -->
                    </div>
                </div>
            </div>

            <!-- 下半部分的两张统计表 -->
            <div id="main_body_con_foot">

            <!-- 左边的表 -->
                <div>
                    <div id="title">
                    <span class="vertical"></span>
                    <h4>订单总量统计</h4>
                    </div>

                    <div id="left_echarts_con">
                        <div id="left_echarts" style=" width: 100%; height: 325px;" ></div>
                    </div>
                </div>
                
                <!-- 右边的表 -->
                <div>
                    <div id="title"> 
                    <span class="vertical"></span>
                    <h4>交易金额总量统计</h4>
                    </div>

                    <div id="right_echarts_con">
                        <div id="right_echarts" style=" width: 100%; height: 325px;" ></div>
                    </div>
                </div>
            </div>
        </div>
<!-- 固定定位的页脚 -->
        <div id="main_body_foot">Copyright©2011-2020 电脑疯狂闪屏死机重启</div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
 import echarts from "echarts"
  import echartsMap from "../../components/echartsMap"

export default {
   
//import引入的组件需要注入到对象中才能使用
components: {echartsMap},
data() {
//这里存放数据
//今日数据统计需要的数据，其实应该放在VUEX的
return {
    dataTime:[{time:'00:00',quantity:300},{time:'02:00',quantity:300},{time:'04:00',quantity:300},{time:'06:00',quantity:300},{time:'08:00',quantity:300},{time:'10:00',quantity:300},{time:'12:00',quantity:300},{time:'14:00',quantity:300},{time:'16:00',quantity:300},{time:'18:00',quantity:300},{time:'20:00',quantity:300},{time:'22:00',quantity:300},]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //第一张表格的echarts代码
    let myChart = echarts.init(document.getElementById('left_echarts'));
    let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        }
    },    
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
    };
    //生成第一张表格
    myChart.setOption(option);

    // 第二张折线图
    var myChartRight = echarts.init(document.getElementById('right_echarts'));
    var optionRight = {
    tooltip: {
        trigger: 'axis',
    },
    
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        axisLabel: {
    	formatter: function (value, index) {
		    if (value>=10000){
		    	return value/10000 + '万'
		    }
		    else{
		    	return value
		    }
		}
    },    
        type: 'value',
        
    },
    series: [{
        data: [820415, 932322, 1123901,722934, 633190,821330, 901320],
        type: 'line'
    }]
    };
    //生成第二张表格
    myChartRight.setOption(optionRight);

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
div#main_body {
    #title{
        height:30px;
        margin-bottom:20px
    }
    h5,h4 {
        margin: 0;
        display: inline-block;
    }
    p{
        margin: 0;
        font-size: 12px;
        line-height: 30px;
        color: #a5b6c8;
    }
    span.vertical{
            vertical-align: middle;
            display: inline-block;
            
            width: 4px;
            height: 20px;
            background-color: rgb(251, 184, 11);
            margin-right: 10px;
    }
    position: relative;
    ;
  
  div#main_body_title {
      position: fixed;
            top: 8vh;
            width: 100%;
            text-align: left;
            height: 60px;
            background-color: #fff;
            z-index:5;
            line-height: 60px;   
  }

  div#main_body_con {
       position: relative;
       top: 60px;
       
    div#main_body_con_header {
        display: flex;
       height: 415px;
        padding: 0.5%;
      div#today_data_list {
          flex: 1;
            width: 100%;
            box-sizing: border-box;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            margin-right: 0.5%;
            
      
            #list{
            display:flex;
            height: 80px;
            overflow: hidden;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            #list_first{
                flex: 1;
                line-height: 50px;
            }
            #list_data{
                flex: 3;
            }
            }
        
        
    }
    div#city_echarts{
        flex: 3;
        box-sizing: border-box;
        height: 415px;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        margin-right: 0.5%;
    }
    
    div#data_time{
        flex: 1 ;
    box-sizing: border-box;
    padding: 20px;
        background-color: #fff;
            border-radius: 5px;

        .data_time_list{
            height: 26px;
            font-size: 16px;
            overflow: hidden;
        >p{
            font-size: 14px;
            display:block;
            color: #a5b6c8;
            // white-space:pre-wrap;
            float: left;
        }
        .percentage{
            height: 12px;
            border-radius: 6px;
            background-color: #f1f1f1;
            float: left;
            width: 80px;
            margin: 0 10px;
            margin-top: 7px !important;
            >div{
                height: 12px;
                border-radius: 6px;
                background-color: #ff8448;
                background: left, #febfa0 , #ff8448;
                width: 85%;
                }
        }
        >span{
            font-size: 14px;
        }
        }
    }
    
    }

    div#main_body_con_foot {
         height: 415px;
         display: flex;
         padding: 0.5%;
         margin-bottom:50px;
         
         
        
      >div {
          flex: 1;
          box-sizing: border-box;
          margin-right: 0.5%;
          margin-left: 0.5%;
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
      }
     
    }
  }

  div#main_body_foot {
            position: fixed;
            bottom: 0px;
            width: 100%;
            text-align: center;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            font-size: 12px;
            text-indent: -200px;
            

  }
  
}
</style>