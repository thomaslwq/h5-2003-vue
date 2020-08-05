<!-- 门店基本信息组件 -->
<template>
    <div class=''>
        <div class="store-img">
            <span>门店头像</span>
            <div slot="file" slot-scope="{file}" class="imgupdate">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                >
            </div>
            <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            >
                申请修改
            </el-upload>
        </div>
        <div class="store-name">
            <p>门店名称</p>
            <b>{{storeName}}</b>
            <span @click.stop="handleUpdateName">申请修改</span>
            <input type="text" v-model="storeName" v-show="UpdateName" @blur="handleUpdateName">
        </div>
        <div class="store-phone">
            <p>订餐电话</p>
            <b>{{storePhone}}</b>
            <span @click.stop="handleUpdatePhone">编辑</span>
            <input type="text" v-model="storePhone" v-show="UpdatePhone" @blur="handleUpdatePhone">
        </div>
        <div class="store-adderss">
            <p>门店地址</p>
            <b>{{storeadd}}</b>
            <span @click.stop="handleUpdateAdd">申请修改</span>
            <input type="text" v-model="storeadd" v-show="UpdateAdd" @blur="handleUpdateAdd">
        </div>
        <div class="store-type">
            <p>门店品类</p>
            <b>{{storeType}}</b>
            <span @click.stop="handleUpdateType">申请修改</span>
            <input type="text" v-model="storeType" v-show="UpdateType" @blur="handleUpdateType">
        </div>
        <div class="store-photo">
            <span>门店照片</span>
            <div slot="file" slot-scope="{file}" class="imgupdate">
                <img
                    class="el-upload-list__item-thumbnail"
                    :src="file.url" alt=""
                >
            </div>
            <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            >
                申请修改
            </el-upload>
        </div>
        <div class="store-erweima">
            <p>门店二维码</p>
            <div class="store-erweima-img">
                <div><img src="../../assets/images/20200804160751.png" alt=""><br><i class="el-icon-platform-eleme"></i></div>
                <div><img src="../../assets/images/20200804160803.png" alt=""><br><i class="el-icon-bangzhu"></i></div>
                <div><img src="../../assets/images/20200804160817.png" alt=""><br><i class="el-icon-chat-dot-round"></i></div>
            </div>
            <div class="store-download">
                <section><i class="el-icon-platform-eleme"></i>下载</section>
                <section><i class="el-icon-bangzhu"></i>下载</section>
                <section><i class="el-icon-chat-dot-round"></i>下载</section>
            </div>
        </div>
        <div class="store-bottom">
            <p>门店号</p>
            <b>123456789</b>
            <span></span>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    dialogImageUrl: '',
    dialogVisible: false,
    disabled: false,
    storeName:"斟沏茶咖(杨村店)",
    UpdateName:false,
    UpdatePhone:false,
    storePhone:"12345678910",
    UpdateAdd:false,
    storeadd:"深圳市宝安区宝安大道1号0001室",
    UpdateType:false,
    storeType:'主营：奶茶果汁 | 次营：-'
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    handleUpdateName:function(){
        this.UpdateName = !this.UpdateName
    },
    handleUpdatePhone:function(){
        this.UpdatePhone = !this.UpdatePhone
    },
    handleUpdateAdd:function(){
        this.UpdateAdd = !this.UpdateAdd
    },
    handleUpdateType:function(){
        this.UpdateType = !this.UpdateType
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
<style lang="less" scoped>
.store-img,.store-photo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-top: 6px;
    span{
        color: #000;
    }
    .imgupdate{
        width: 100px;
        height: 100px;
        border: none;
    }
}
.store-name,.store-adderss,.store-type,.store-bottom{
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    p{
        color: #000;
    }
    b{
        font-weight: 500;
        width: 600px;
        font-size: 14px;
        color: #999;
    }
    span{
        color: #409EFF;
        cursor: pointer;
        font-size: 14px;
    }
}
.store-phone{
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: #ddd;
    p{
        color: #000;
    }
    b{
        font-weight: 500;
        width: 600px;
        font-size: 14px;
        color: #999;
    }
    span{
        color: #409EFF;
        font-size: 14px;
        cursor: pointer;
    }
}
.store-erweima{
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    p{
        color: #000;
    }
    .store-erweima-img{
        width: 600px;
        display: flex;
        
        div{
            width: 90px;
            height: 90px;
            text-align: center;
            margin-right: 10px;
            img{
                width: 100%;
                height: 100%;
            }
            .el-icon-platform-eleme{
                color: #409EFF;
            }
            .el-icon-bangzhu{
                color: red;
            }
            .el-icon-chat-dot-round{
                color: springgreen;
            }
        }
    }
    .store-download{
        margin-right: 10px;
        section{
            color: #409EFF;
            font-size: 14px;
            margin-top: 5px;
        }
        .el-icon-platform-eleme{
            color: #409EFF;
        }
        .el-icon-bangzhu{
            color: red;
        }
        .el-icon-chat-dot-round{
            color: springgreen;
        }
    }
}
</style>