<!-- 顾客 -->
<template>
    <div class='customer'>
        <div class="customer-analyze">
            <div class="title">
                新老顾客分析
            </div>
            <div class="analyze-tabs">
                <div v-for="(item,index) in timeArr " :key="item.id+index" class="analyze-item" @click="handlerAnalzy(item.date)">
                    {{item.time}}
                </div>
                <div class="right">
                    <div class="timer">
                       2020-3-3至 2020-9-12
                    </div>
                    <select name="" id="">
                        <option value="">比前{{lately}}天</option>
                    </select>
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
            lately:7,
            timeArr:[
                {id:1,time:'近7天',date:7},
                {id:2,time:'近30天',date:30},
                {id:3,time:'按周',date:7},
                {id:4,time:'按月',date:30}
            ],
           timerbefore:new Date().getTime() - this.lately*new Date().getTime(),
           timernow:  new Date().getTime(),
        }
    },
    computed: {},
    watch: {},
    methods: {
        handlerAnalzy:function(date){
            this.lately =date
            this.timerbefore = this.lately
        },
        handlerTimer:function(){
            this.timer =new Date()
            
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
}
</script>
<style lang='less'  scoped>

.customer {
  .customer-analyze {
    .title {
        font-size: 18px;
        font-weight: 700;
    }
    .analyze-tabs {
        .analyze-item{
            float: left;
            padding: 3px 5px;
            background-color: #1989F9;
            border: 1px solid gray;margin-right: 10px;
            color: white;
        }
        
        .right {
            float: right;
            .timer {
                float: left;;
                margin-right: 10px;
            }

            select {
                    float: left;
                    outline: none;
                    border: none;
            }
        }
    }
  }
}
</style>