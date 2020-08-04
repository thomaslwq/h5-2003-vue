<!--  -->
<template>
<!-- video开始位置 -->
<div class='video-area'>
    <div class="video-play">
        <a class="video-play-btn">
            <span class="el-icon-video-play"></span>
        </a>
    </div>
    <div class="video-show">
        <div class="video-content">
            <div class="esc" title="close(esc)">
                <i class="el-icon-close"></i>
            </div>
            <div class="video-source" v-show="isVideo">
                <video src="" controls loop autoplay></video>
            </div>
            <div class="load-error" v-show="!isVideo">
                <i class="el-icon-folder-delete"></i>
                <div class="error-cover">
                    该文件可能已被移至别处或遭到删除。
                </div>
            </div>
        </div>
    </div>
</div>
<!-- video结束位置 -->
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
    isVideo:false
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
.video-area {
    background: url("../assets/img/thumb/thumb-6.jpg") center;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  .video-play {
      width:100px;
      height:100px;
      border-radius: 50px;
      background: #3f82a7;
      transition: 1s;
      position: relative;
      &::before{
        content: "";
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #a3bbc8;
        opacity: .5;
        // z-index: -1;
        position: absolute;
        animation-name: shape;
        animation-duration: 2s;
        animation-iteration-count:infinite ;
        animation-timing-function: linear;
        -moz-animation-delay: .8s;
    }
    &:hover{
        background: #a3bbc8;
    }
    .video-play-btn {
        display: block;
        width:100%;
        height: 100%;
        position: relative;
        span{
            position: absolute;
            width:40px;
            height: 40px;
            top: 0;
            right: 0;
            left: 0;
            bottom:0;
            margin: auto;
            color:rgba(255,255,255,.8);
            font-size: 40px;
        }
    }
  }
  .video-show{
      display: none;
      position: fixed;
      z-index:9999;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background: rgba(0,0,0,.4);
      .video-content {
          position: absolute;
          left:0;
          top:0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 800px;
          height:500px;
            .esc {
                width:100%;
                height:30px;
                position: absolute;
                top:-30px;
                left:0;
                color:#e0e0e0;
                font-weight: bold;
                font-size: 20px;
                transition: 1s;
                text-align: right;
                &:hover{
                    color:white
                }
            }
            .video-source {
                video {
                    width:800px;
                    height:500px;
                    outline: none !important;
                }
            }
    
            .load-error {
                width: 100%;
                height: 100%;
                background:#dddddd;
                text-align:center;
                font-size:100px;
                line-height: 500px;
                color:#535353;
                .error-cover{
                    position: absolute;
                    top:0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255,255,255);
                    line-height: 120px;
                    font-size: 12px;
                    color:#ccc;
                }
            }

    }
}
}
@keyframes shape {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
}
</style>