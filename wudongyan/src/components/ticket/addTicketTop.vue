<!--  -->
<template>
    <div class="addTicket">
        <div class="exchange-top">
            <div class="back">
                    <i></i>
                    <span @click="backRouter">返回</span>
                    <b>
                        |
                    </b>
            </div>
            <div class="title">
                    新增{{titleName.title}}
                <div class="warn">
                    可与平台级及店铺级红包或券(包括饿了么超级会员红包、代金券、商品券、配送券等)同享，可与店铺满减、特价菜等店铺活动同享。相同类型的外卖券只能用- 张。
                </div>
            </div>
        </div>
        <div class="content">
            <aside>基本信息</aside>
            <div class="ticket-info">
                <li class="kind">
                    <div class="dt">类目</div>
                    <div class="dd">
                        <select name="" id="">
                            <option value="">请选择类目</option>
                        </select>
                    </div>
                </li>
                <li class="ticket-name">
                    <div class="dt">配送券名称</div>
                    <div class="dd">
                        <p>配送券名称由"店铺名+Y张满X减N代金券/无i ]槛N元配送券”组成</p>
                        <p>店铺名</p>
                        <div class="shop-name">
                            <input type="text" placeholder="斟沏茶咖(杨村店)">
                        </div>
                        <p>预览:斟沏茶咖(杨村店)-张-张商品兑换券</p>
                    </div>
                </li>
                <li class="tickets">
                    <div class="dt">配送券</div>
                    <div class="dd">
                        <div class="dl">
                            <p>使用门槛</p>
                            <div class="ticket-txt">
                                <input type="text">
                                <i>元</i>
                            </div>
                        </div>
                        <div class="dl">
                            <p>券金额</p>
                            <div class="ticket-txt">
                                <input type="text" placeholder="请输入金额">
                                <i>元</i>
                            </div>
                        </div>
                        <div class="dl">
                            <p>可用张数</p>
                            <div class="ticket-txt">
                                <input type="text" placeholder="最大30">
                                <i>张</i>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="price">
                    <div class="dt">价格</div>
                    <div class="dd">
                        <div class="price-wrap">
                             <div class="dl">
                            <p>总原价</p>
                            <div class="ticket-txt">
                                <input type="text" >
                                <i>张</i>
                            </div>
                        </div>
                        <div class="dl">
                            <p>现售原价</p>
                            <div class="ticket-txt price-txt">
                                <input type="text" placeholder="请输入金额">
                                <i>元</i>
                            </div>
                        </div>
                        </div>
                        <p class="tips">原总价=券金额*可用张數，现总售价为顾客需付款金额</p>
                    </div>
                </li>
                <li class="index-img">
                   <div class="dt">封面图</div>
                   <div class="dd">
                       <img src="" alt="">
                       图片
                   </div>
                </li>
                <li class="img-show">
                    <div class="dt">展示图片</div>
                   <div class="dd">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :limit="4"
                        class="el-upload--picture-card"
                        >
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                   
                       
                        <li>最多可.上传4张，尺寸800*800px以上</li>
                        <li>图片大小不超过5M,支持格式png, jpg, jpeg</li>
                       
                   </div>
                </li>
                  <li class="detail-img img-show">
                    <div class="dt">详细图片</div>
                   <div class="dd">
                        <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :limit="4"
                        class="el-upload--picture-card"
                        >
                        <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <li>最多可.上传4张，尺寸:宽750以上，高度不限</li>
                        <li>图片大小不超过5M，支持格式png, jpg, jipeg</li>
                   </div>
                </li>

            </div>
        </div>
        <ticketFooter></ticketFooter>

    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ticketFooter from "../../components/ticket/ticketFooter"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    ticketFooter,
},
props:['titleName'],
data() {
//这里存放数据
return {
      dialogImageUrl: '',
        dialogVisible: false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    backRouter:function(){
         this.$router.go(-1);
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
     handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
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
b,strong{
    font-weight: normal;
}
li{
    list-style: none;
}i,em{
    font-style: normal;
}
.exchange-top {
        font-size: 12px;
        border-bottom: 2px solid #E7EAEF;
        padding-bottom: 20px;
    
  .back {
      float: left;
      font-size: 14px;
    b{
        margin: 0 20px;
        color: #E8E9ED;
    }
    span{
        cursor: pointer;
    }
  }

  .title {
      margin-left: 60px;
      font-size: 18px;
   
      
    .warn {
        color:#CAA672;
        background-color: #FDF7EB;
        padding: 5px;
        font-size: 12px;
           margin-top: 10px;
           margin-left: 15px;
    }
  }

}
.content{
    position: relative;
    aside {
    position: absolute;
    left: 10px;
    top: 40px;
}

.ticket-info {
    position: relative;
    left: 100px;
    top: 40px;
    li{
        position: relative;
        display: flex;
        left: 120px;
        margin-bottom: 30px;
        .dt{
            position: relative;
            width: 100px;
            &:after{
                content:"*";
                color: red;
            }
        }
        .dd{
            position: relative;
            left: 80px;
        }
    }
  .kind {
    .dt {

    }
  }

  .ticket-name {

    .dd{  
        p{
            margin-bottom: 10px;
        }
        .shop-name{
            width: 190px;
            height: 36px;
            border: 1px solid #DBDDE1;
            background-color: #F1F3F7;
             padding: 8px 10px;
             margin-bottom: 10px;
            input{
                outline:none;
                border: none;
                 background-color: #F1F3F7;
            }   
        }
    }
  }

  .tickets {
    
    .dd{
        display: flex;
        .dl {
            position: relative;
            p {
                margin-bottom: 10px;
            }

            .ticket-txt {
                width: 120px;
                height: 38px;
                border: 1px solid #DBDDE1;
                padding: 6px 5px;
                margin-right: 10px;
                input {
                    width: 80px;
                    padding-left: 5px;
                    height: 20px;
                    outline: none;
                    border:none;
                   
                }

                i {
                    position: absolute;
                    width: 35px;
                    height: 36px;
                    border-left: 1px solid #DBDDE1;
                    background-color: #F1F3F7;
                    right: 10px;
                    bottom: 1px;
                    text-align: center;
                    line-height: 36px;
                     color:#90929A;

                }
             }
           
        }
    }
  }

  .price {
      
    .dd {
        .price-wrap {
             display: flex;
            .dl {
                position: relative;
                p {
                     margin-bottom: 10px;
                }

                .ticket-txt {
                     width: 160px;
                    height: 38px;
                    border: 1px solid #DBDDE1;
                    padding: 6px 5px;
                    margin-right: 10px;
                    background-color: #F2F4F8;
                input {
                       width: 120px;
                    padding-left: 5px;
                    height: 20px;
                    outline: none;
                    border:none;
                     background-color: #F2F4F8;
                    
                }

                i {
                      position: absolute;
                    width: 35px;
                    height: 36px;
                    border-left: 1px solid #DBDDE1;
                    background-color: #F1F3F7;
                    right: 10px;
                    bottom: 1px;
                    text-align: center;
                    line-height: 36px;
                    color:#90929A;
                }
                }
                  .price-txt{
                  background-color: white;
                  input{
                       background-color: white;
                  }
             }
            }
        }

            .tips {
                color:#90929A;margin-top: 10px;
            }
    }
  }

  .index-img {

  }

  .img-show {
     .dd{
         position: relative;
         width: 100px;
          .el-upload--picture-card{
            
            width: 100px;
            height: 120px;
           line-height: 120px;
           text-align: center;
        }
        li{
            position: relative;
            width: 600px;
            left: 0;
            color:#90929A;
             margin-bottom: 10px;
             margin-top: 10px;
             list-style: circle;
        }
     }
  }
}
}
</style>