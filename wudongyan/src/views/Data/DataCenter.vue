<!-- 数据 -->
<template>
<div class='data-center'>
    <div class="data-center-nav">
        <h2>数据中心</h2>
        <ul>
            <li v-for="(item,index) in dataCenter" :key="item+index" :class="{'data-active':item.isdataActive}" @click="goToComponent(item.componentName,index)">{{item.name}}</li>
        </ul>
    </div>
    <div>
        <component :is="componentId"></component>
    </div>
</div>
</template>

<script>
import overview from './../../components/data/data-center/Overview'
import business from './../../components/data/data-center/Business'
import marketing from './../../components/data/data-center/Marketing'
import flow from './../../components/data/data-center/Flow'
import commodity from './../../components/data/data-center/Commodity'
import servering from './../../components/data/data-center/Servering'

export default {
    name:'',
    components: {overview,business,marketing,flow,commodity,servering},
    data() {
        return {
            dataCenter:[
                {
                    name:'总览',
                    isdataActive:true,
                    componentName:'overview'
                },
                {
                    name:'营业',
                    isdataActive:false,
                    componentName:'business'
                },
                {
                    name:'营销',
                    isdataActive:false,
                    componentName:'marketing'
                },
                {
                    name:'流量',
                    isdataActive:false,
                    componentName:'flow'
                },
                {
                    name:'商品',
                    isdataActive:false,
                    componentName:'commodity'
                },
                {
                    name:'服务',
                    isdataActive:false,
                    componentName:'servering'
                },
            ],
            componentId:'overview'
        }
    },
    computed: {},
    watch: {},
    methods: {
        goToComponent:function(componentId,index){
            this.componentId = componentId
            this.dataCenter.forEach(function(item,index){
                item.isdataActive=false
            })
            this.dataCenter[index].isdataActive=true
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
.data-center {
    min-width: 920px;
    .data-center-nav {
        width: 920px;
        margin: 0 auto;
        // padding: 10px;
        margin-bottom:30px ;
        h2 {
            color:#303133;
            font-size: 20px;
            font-weight: 400;
        }

        ul {
            display: flex;
            justify-content: start;
            padding-top: 20px;
            border-bottom: 2px solid rgb(228,231,237);
            li {
                color:#303133;
                font-size: 12px;
                font-weight: 400;
                margin-left: 25px;
                padding-bottom: 10px;
                margin-bottom: -2px;
                cursor: pointer;
            }
            li:nth-child(1){
                margin-left:0;
            }
            li:hover{
                color:#1989FA;
            }
            .data-active{
                border-bottom: 2px solid #1989FA;
                color:#1989FA;
            }
        }
    }
}
</style>