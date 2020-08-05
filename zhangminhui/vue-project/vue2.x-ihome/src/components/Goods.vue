<!-- 
在使用Goods组件时，
要用父子传值方式传入一个对象 item，
对象item要包含img,name,price属性，不然会报错  
-->
<template>
<div class='goods-show'>
    <section class="item-imgbox">
        <img :src="require('../assets/img/product/'+item.img)" alt="">
        <div class="hidden_link">
            <a href="#"><i class="iconfont icon-fangdajing"></i></a>
            <a href="#"><i class="iconfont icon-aixin"></i></a>
            <a href="#"><i class="iconfont icon-gouwuche"></i></a>
        </div>
    </section>
    <section class="item-name"><span><a href="">{{item.name}}</a></span></section>
    <section class="item-price"><span>{{item.price}}</span></section>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
props:['item'],
components: {},
data() {
//这里存放数据
return {
    
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
<style lang="less" scoped>
.goods-show {
  &:hover {
    img {
      transform: scale(1.1);
    }

    .item-imgbox .hidden_link {
      bottom: 20px;
      opacity: 1;
    }
  }

  .item-imgbox {
    overflow: hidden;
    position: relative;

    .hidden_link {
      display: flex;
      justify-content: space-between;
      width: 170px;
      margin: 0 auto;
      transition: all .5s;
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      opacity: 0;

      a {
        display: inline-block;
        line-height: 44px;
        text-align: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        text-decoration: none;
        background: #ffffff;

        &:hover {
          background: #A3BBC8;

          i {
            color: #fff;
          }
        }

        i {
          font-size: 18px;
          color: #acbbc8;
          font-weight: bolder;
          transition: 1s;
        }
      }
    }

    img {
      width: 100%;
      display: block;
      margin: 0 auto;
      transition: all .5s;
    }
  }

  .item-name {
    text-align: center;
    padding: 10px 0;

    a {
      display: block;
      font-size: 16px;
      text-decoration: none;
      color: #243f4d;
      transition: .5s;

      &:hover {
        color: #FCD7B6;
      }
    }
  }

  .item-price {
    text-align: center;

    span {
      color: #a3bbc8;
      font-size: 16px;
      font-weight: bolder;
    }
  }
}
</style>