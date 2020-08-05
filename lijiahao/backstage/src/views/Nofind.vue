<template>
    <div class="container" style=" margin-top:8%;">

            <div class="text-center">
                 <p>404错误！抱歉您要找的页面不存在,请不要联系管理员，联系也不理你</p>

                    <div class="float-left">
                        <img :src=img1>
                        <div class="alert"> 卧槽！页面不见了！ </div>
                    </div>
                    <div class="float-right">
                        <img :src=img2 width="260">
                    </div>
                <div class="padding-big">
                    <router-link to='/'>返回首页</router-link>
                </div>
            </div>

    </div>


</template>

<script>
    export default {
      data(){
          return{
              img1:require('@/assets/images/ds-1.png'),
              img2:require('@/assets/images/ds-2.png'),
          }
      }
    };
</script>

<style lang="less">
    .container{
        width: 750px;
        height: 330px;
            /*border: 1px solid;*/
        margin: auto;
        .text-center{
            width: 730px;
            height: 130px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 0 auto;
            position: relative;
            p{
                height: 60px;
                line-height: 60px;
                text-align: center;
            }
            .float-left{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                .alert{
                    width: 200px;
                    height: 50px;
                    background: #fff;
                    line-height: 50px;
                    text-align: center;
                }
            }
            .float-right{
                position: absolute;
                right: 0;
            }
            .padding-big{
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translate(-50%);
                a{
                    width: 150px;
                    height: 30px;
                    line-height: 30px;
                    display: block;
                    text-align: center;
                    background: #478fca;
                    color: #e5e5e5;
                    border-radius: 7px;
                }
            }
        }
    }
</style>