<!-- 商品兑换券 -->
<template>
<div class='exchange'>
    <div class="top">
        <exchangetop></exchangetop>
    </div>
    <div class="content">
        <aside>基本信息</aside>
        <div class="shop-info">
            <div class="connect clear-float">
                <div class="dt">关联商品</div>
                <div class="dd">选择关联商品</div>
            </div>
      
            <div class="shop-kind clear-float ">
                <div class="dt">类目</div>
                <div class="dd">
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>
            
            <div class="shop-name clear-float">
                <div class="dt ">兑换券名称</div>
                <div class="dd " >
                    <p>外卖券名称由“店铺名+X张+商品名“组成</p>
                   
                    <div class="shopName">
                        <div class="dt2">
                            商铺名与商品名
                        </div>
                        <div class="dd2">
                            <input type="text" placeholder="斟沏茶咖(杨村店)">
                        </div>
                    </div>
                    <div class="shopCount">
                        <div class="dt2">
                            可用张数
                        </div>
                        <div class="dd2">
                            <input type="text">
                            <i>张</i>
                        </div>
                    </div>
                   
                    <p class="tips">预览:斟沏茶咖(杨村店)张兑换券</p>
                </div>
            </div>
             <div class="shop-price clear-float">
                 <div class="dt ">价格</div>
                <div class="dd " >
                   
                   
                    <div class="shopName">
                        <div class="dt2">
                            原总价
                        </div>
                        <div class="dd2">
                            <input type="text">
                            <i>元</i>
                        </div>
                    </div>
                    <div class="shopCount">
                        <div class="dt2">
                            现总价
                        </div>
                        <div class="dd2">
                            <input type="text" placeholder="请输入金额">
                            <i>张</i>
                        </div>

                    <p class="tips">原总价=商品单价*可用张数，现总售价为顾客需付款金额</p>  
                </div>
                 </div>

            </div>

             <div class="shop-img clear-float">
                <div class="dt">封面图</div>
                <div class="dd">
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :limit="1"
                            class="el-upload--picture-card">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    <div class="tips">
                         <li>只需_上传1张，尺寸800*800px以上</li>
                        <li>图片大小不超过5M，支持格式png, jpg, jipeg</li>
                    </div>
                </div>
            </div>
             <div class="shop-show-img clear-float">
               <div class="dt">展示</div>
               <div class="dd">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                            :limit="4"
                            class="el-upload--picture-card">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                         <div class="tips">
                         <li>最多可.上传4张，尺寸800*800px以上</li>
                        <li>图片大小不超过5M，支持格式png, jpg, jipeg</li>
                        </div>
               </div>
            </div>
            
         
    </div>

    <div class="footer">
       <div class="shop-rule">
           <aside>购买规则</aside>
           <div class="cell-info">
              <li>
                  <div class="name">
                      售卖日期
                  </div>
                  <div class="timer">
                      日期
                  </div>
              </li>

              <li>
                  <div class="name remain">
                      库存
                  </div>
                  <div class="timer">
                      <input type="text" value="1000">
                  </div>
              </li>
              <li>
                  <div class="name last">
                      每人购买
                  </div>
                  <div class="timer day-buy" >
                      <input type="text" value="20">
                      <i>份</i>
                  </div>
              </li>
           </div>
       </div>
       <div class="use-rule">
           <aside>使用规则</aside>
           <div class="use-time">
               <li>
                     <div class="name">
                      有效期
                    </div>
                    <div class="timer">
                        购买后
                        <div class="chooseDate">
                            <input type="text">
                            <i>天</i>
                        </div>
                         有效
                    </div>
               </li>
           </div>
       </div>
    </div>
</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import  exchangetop from '../../components/ticket/addVoucherTop'
export default {
//import引入的组件需要注入到对象中才能使用

components: {
    exchangetop,
},
data() {
//这里存放数据
return {
    dialogImageUrl: '',
    dialogVisible: false,
    titleArr:[
        {title:"代金券",keywords:"店铺"},
        {title:"配送券",keywords:""},
        {title:"组合券",keywords:""},
        {title:"兑换券",keywords:""},
        ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
i,em{
    list-style: none;
}
.exchange{
        font-size: 12px;
    .content {
    aside {
        font-size: 16px;
    }

    .shop-info {
        position: relative;
        left: 160px;
        font-size: 14px;
         &::after{
                content: "";
                display:block;
                clear: both;
            }
        .dt{
            float: left;
             &:after{
            content: "*";
            color: red;
        }
        }
        .dd{
            float: left;
            position: absolute;
            left: 130px;
        }
        .connect {
            margin-bottom: 30px;
           

        .dd {
            padding:5px 13px;
            border:1px solid #EBEBEB;
            border-radius: 20px;
            margin-top: -5px;
            cursor: pointer;
        }
        }

        .shop-kind {
            margin-bottom: 30px;
        .dt {
            line-height: 30px;
        }

        .dd {
            width: 220px;
            height: 30px;
            border: 1px solid #E0E5E9;
            padding: 5px 10px;
            color: gray;
            select {
                width: 200px;
                outline: none;
                height: 20px;
                border: none;
                color:gray;
            }
        }
        }

        .shop-name,.shop-price{
            margin-bottom: 110px;
        .dd {
            p {
                margin-bottom: 10px;
            }

            .shopName {
                float: left;
                
            .dd2 {
                margin-top:10px;
                 width:200px ;
                height: 30px;
                border: 1px solid #DCDCDE;
                padding: 5px;
                 background-color: #F2F4F8;
                input{
                      background-color: #F2F4F8;
                    outline: none;
                    border: none;
                    padding-left: 10px;
                }
            }   
            }

            .shopCount {
                float: right;
                margin-bottom: 10px;
                margin-left: 10px;

            .dd2 {
                margin-top:10px;
                 width:200px ;
                height: 30px;
                border: 1px solid #DCDCDE;
                padding: 5px;
                position: relative;
                 
                input{
                    outline: none;
                    border: none;
                    padding-left: 10px;
                   
                }
                i{
                   position: absolute;
                    width: 40px;
                    height: 28px;
                    background-color: #F2F4F8;
                    border-left:1px solid #DCDCDE;
                    text-align: center;
                    line-height: 28px;
                    right: 0;
                    top: 0;
                    cursor: pointer;
                }
            }
            }
        }
         .tips{
                color:#A9A9B0;
                position: absolute;
                  left: 0;
                  bottom:-30px;
            }
        }

        .shop-price {
           
            .shopName{
                position: relative;
                .dd2{
                    i{
                    position: absolute;
                    width: 40px;
                    height: 28px;
                    background-color: #F2F4F8;
                    border-left:1px solid #DCDCDE;
                    text-align: center;
                    line-height: 28px;
                    right: 0;
                    bottom: 0;
                    cursor: pointer;
                    }
                }
            }
            .tips{
                color:#A9A9B0;
                position: absolute;
                  left: 0;
                  margin-top: 10px;
            }
        }

        .shop-img {
            margin-top: -10px;
        .dd {
           width: 80px;
           .el-upload--picture-card{
                width: 100px;
                text-align: center;
                height: 120px;
                line-height: 120px;
                background-color: #F3F5F9;
            }
            input{
                position: absolute;
                height: 80px;
                width: 70px;
                opacity: 0;
            }
        }
        .tips{
            position: absolute;
            width: 400px;
            li{
                color:#A9A9B0;margin-top: 10px;
            }
        }
        }
        .shop-show-img {
            margin-top: 200px;
        .dd {
            width: 120px;
             .el-upload--picture-card{
                width: 100px;
                text-align: center;
                height: 120px;
                line-height: 120px;
                background-color: #F3F5F9;
            }
        }
        .tips{
            position: absolute;
            width: 400px;
            li{
                color:#A9A9B0;margin-top: 10px;
            }
        }

        }
        }
    }
    .clear-float{
        &:after{
        clear: both;
        display: block;
        content: "";  
        visibility: hidden;
        }
       
    }
    .start{
        &:after{
            content: "*";
            color: red;
            
        }
    }
    .footer {
        margin-top: 200px;
        position: relative;
        font-size: 14px;
        i,em{
            font-style: normal;
        }
        li{
            list-style: none;
            display:flex;
           position: relative;
           left: 150px;
           margin-bottom: 30px;
           .name{
               width: 100px;
               &:after{
                   content: "*";
                   color:red
               }
           }
           .timer{
               position: relative;
               left: 40px;
           }
        }
         aside {
                position: absolute;
                left: 10px;
                font-size: 16px;
            }
        .shop-rule {
            position: relative;
            border-top: 1px solid black;
            margin-top: 30px;
            padding-top: 30px;
            
            li {
                .remain {
                    
                }
                .last{
                    input{
                        
                    }
                }
                .timer {
                    padding: 5px;
                    border: 1px solid #DCDCDE;
                    position: relative;
                    input {
                        width: 160px;
                        height: 20px;
                        outline: none;
                        border: none;
                        
                    }
                    i{
                            width: 30px;
                            height: 32px;
                            position: absolute;
                             background-color: #F2F4F8;
                            color: #A9B4BB;
                            top: 0;right: 0;
                            line-height: 32px;
                            text-align: center;
                            border-left: 1px solid #E8E8EA;
                        }
                }
            }
            }
            .cell-info {

            }
        }

        .use-rule {
            position: relative;
            border-top: 1px solid black;
            margin-top: 30px;
            padding-top: 30px;

            .use-time {
                
                li {
                    
                    .timer {

                         display: flex;
                         line-height: 30px;
                         margin-top: -5px;
                         
                    .chooseDate {
                        width: 100px;
                        height: 30px;
                         border: 1px solid #DCDCDE;
                        position: relative;
                        margin: 0 10px;
                        input {
                            width: 70px;
                            outline:none;
                            border: none;padding-left: 5px;
                        }

                        i {
                            width: 30px;
                            height: 28px;
                            position: absolute;
                             background-color: #F2F4F8;
                            color: #A9B4BB;
                            top: 0;right: 0;
                            line-height: 28px;
                            text-align: center;
                            border-left: 1px;
                        }
                    }
                    }
                }
        }
    }

}

</style>