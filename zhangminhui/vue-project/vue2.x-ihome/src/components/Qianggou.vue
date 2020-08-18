<!-- 抢购组件 -->
<template>
  <div class>
    <div class="qianggou">
      <div class="qinggou-dazhe">
        <h3>爱家折扣</h3>
        <img src="../assets/img/logo/logo.png" alt />
        <p>
          本周折扣为
          <span class="zhe">{{ zhe }}</span>
          折
        </p>
        <h5>爱家 倒计时</h5>
        <h6 class="dayTime">5天</h6>
        <p>
          <span class="time">{{hours}}</span>:
          <span class="time">{{minutes}}</span>:
          <span class="time">{{seconds}}</span>
        </p>
      </div>
      <div class="qianggou-container">
        <div class="qianggou-shop">
          <div class="thumb">
            <img src="../assets/img/thumb/thumb-4.png" alt="拇指" />
          </div>
          <div class="content">
            <h4>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">欧柏图</font>
              </font>
            </h4>
            <p>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">欧柏图 LED触摸调光感应台灯卧室床头灯智能 创意个性简约现代北欧ins家用阅读小台灯极简设计装饰灯 </font>
              </font>
            </p>
            <a href="#" class="read-more">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">查看更多>></font>
              </font>
            </a>
          </div>
        </div>

        <div class="qianggou-shop">
          <div class="thumb">
            <img src="../assets/img/thumb/thumb-5.png" alt="拇指" />
          </div>
          <div class="content">
            <h4>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">曦特莱轻奢品牌台灯</font>
              </font>
            </h4>
            <p>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">曦特莱轻奢品牌台灯卧室床头灯欧式创意家用浪漫温馨客厅装饰摆件陶瓷</font>
              </font>
            </p>
            <a href="#" class="read-more">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">查看更多>></font>
              </font>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
function timeDiff(time1, time2) {
  var diff = Math.floor(Math.abs(time1.getTime() - time2.getTime()) / 1000);
  var day = Math.floor(diff / (60 * 60 * 24));
  var hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((diff % (60 * 60)) / 60);
  var seconds = diff % 60;
  var obj = {};
  obj.day = day;
  obj.hours = hours;
  obj.minutes = minutes;
  obj.seconds = seconds;
  return obj;
}
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {},
  data() {
    //这里存放数据
    return {
      zhe: 8,
      hours: "",
      minutes: "",
      seconds: "",
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
  mounted() {
    var time1 = new Date("2020-8-9 24:00:00");
    var timeArr = document.querySelectorAll(".time");
    var dayTime = document.querySelector(".dayTime");
    setInterval(function () {
      var time2 = new Date();
      var res = timeDiff(time1, time2);
      var str = [res.day, res.hours, res.minutes, res.seconds];
      dayTime.innerHTML = str[0] + "天";
      timeArr[0].innerHTML = str[1];
      timeArr[1].innerHTML = str[2];
      timeArr[2].innerHTML = str[3];
      return str;
    }, 1000);
  },
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
.qianggou {
  height: 490px;
  display: flex;
  justify-content: center;
  .qinggou-dazhe {
    text-align: center;
    width: 200px;
    height: 400px;
    margin-top: 90px;
    background: #fdefe3;
    h3 {
      font-size: 30px;
      color: #243f4d;
      margin: 30px 0;
      text-shadow: 5px 5px 5px #ccc;
    }
    img {
      margin: 0 auto;
    }
    p {
      font-size: 18px;
      margin: 30px 0;
      span {
        color: #fff;
        font-size: 18px;
      }
      .zhe {
        color: red;
        font-weight: bold;
      }
      .time {
        vertical-align: middle;
        display: inline-block;
        width: 44px;
        height: 44px;
        background-color: rgb(47, 52, 48);
        line-height: 24px;
        text-align: center;
        padding: 10px;
        font-weight: bold;
      }
    }

    h5 {
      font-size: 22px;
      color: rgb(163,187,200);
      margin: 20px 0;
      font-weight: bold;
    }
    h6 {
      font-size: 20px;
      color: red;
      font-weight: bold;
    }
  }

  .qianggou-container {
    display: flex;
    .qianggou-shop {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background: #feefe2;
      height: 400px;
      margin-top: 90px;
      margin-left: 20px;
      .thumb {
        flex: 3;
        img {
          margin-top: -60px;
          margin-bottom: 60px;
        }
      }

      .content {
        flex: 7;
        width: 300px;
        padding-right: 10px;
        h4 {
          color: #243f4d;
          font-size: 22px;
          line-height: 32px;
          margin-bottom: 18px;
        }

        p {
          color: #243f4d;
          font-size: 14px;
          line-height: 30px;
          margin-bottom: 0;
        }

        a.read-more {
          display: inline-block;
          padding: 18px 20px 18px 28px;
          color: #436372;
          font-size: 15px;
          font-weight: 500;
          margin-top: 28px;
          border: 2px solid #436372;
          text-transform: capitalize;
          border-radius: 5px;
          text-decoration: none;
          transition: all 0.6s;
          text-align: center;
          &:hover {
            background-color: rgb(36, 63, 77);
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>