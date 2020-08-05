<!--  -->
<template>
    <div class="flow-zh-user">
        <p v-for="(item, index) in arrData" :key="item + index">
            <span class="zh-user-first">
                <em>{{ item.name }}</em>
                <span :title="item.title">?</span>
            </span>
            <span class="zh-user-second">{{ item.mount }}</span>
            <span class="zh-user-third">
                <em>{{ item.time }}</em>
                <i v-show="item.changeMount != null"></i>
                <em>{{ item.changeMount }}</em>
            </span>
        </p>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props:['arrData'],
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.flow-zh-user {
    width: 920px;
    border: 1px solid #9d9999;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
  p {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    > span {
    }
    span.zh-user-first {
      em {
      }

      span {
      }
    }

    span.zh-user-second {
    }

    span.zh-user-third {
      em {
      }

      i {
      }
    }
  }
}
</style>
