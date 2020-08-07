<!--  -->
<template>
<div class='best-goods'>
    <div class="best-goods-content">
        <!-- 本周产品 -->
        <div class="goods-content-title">
            <h3>本周产品</h3>
        </div>
        <!-- 产品列表 -->
        <div class="goods-content-list">
            <div :class="['list-btn',{'active-btn': btnType==item.type }]" @click="changeBtn(item.type)" v-for="item in goodsBtn" :key='item.id'>{{item.name}}</div>
        </div>
        <!-- 产品展示 -->
        <div class="goods-content-container">
            <div class="goods-content-item">
                <div
                  :class="['big-box',{'noActive':item.type!=btnType && btnType!='all'},{'active':item.type==btnType || btnType=='all'}]"
                  v-for="item in goodsList" :key='item.productID'>
                  <Goods :item="item"></Goods>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Goods from "./Goods"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Goods
},
data() {
//这里存放数据
return {
    btnType:"all",
    goodsBtn:[
        {
            id:"1",name:"所有",type:"all"
        },
        {
            id:"2",name:"家具类",type:"furniture"
        },
        {
            id:"3",name:"椅子",type:"chair"
        },
        {
            id:"4",name:"灯光",type:"lamplight"
        },
        {
            id:"5",name:"装潢",type:"decorate"
    }],
    goodsList:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    changeBtn(type){
        this.btnType = type;
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.$axios.get("api/product/getTopProduct")
  .then(res=>{
    this.goodsList=res.results
  })
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
.best-goods {
  background: #f8f8f8;
  padding-bottom: 80px;
  padding-top: 100px;
  .best-goods-content {
    width: 1140px;
    margin: 0 auto;

    .goods-content-title {
      h3 {
        text-align: center;
        font-size: 36px;
        font-weight: bolder;
        line-height: 36px;
      }
    }

    .goods-content-list {
      display: flex;
      justify-content: space-between;
      width: 310px;
      margin: 30px auto 62px;

      .list-btn {
        font-size: 16px;
        color: #8b8b8b;
        font-weight: bolder;
        transition: .5s;

        &:hover {
          color: #191919;
          cursor: pointer;
        }
      }

      .active-btn {
        color: #191919;
      }
    }

    .goods-content-container {

      .big-box.noActive {
        visibility: hidden;
        transform: scale(0);
        position: absolute;
        bottom: -1000px;
      }

      .big-box.active {
        transform: scale(1);
        position: relative;
      }

      .goods-content-item {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 1140px;
        overflow: hidden;

        .big-box {
          width: 255px;
          height: 364px;
          background: #fff;
          margin: 0 15px 30px;
          transition: .5s;
        }
      }
    }
  }
}
</style>