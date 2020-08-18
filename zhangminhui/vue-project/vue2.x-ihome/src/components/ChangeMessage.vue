<template>
  <div class="box">
    <!-- <Header></Header> -->
    <div class="title">
      <h2>修改信息</h2>
      <div class="from">
        <span @click="goHome">家</span>/
        <span>修改信息</span>
      </div>
    </div>
    <div class="change">
      <label class="change-label">
        <span>名称</span>
        <input type="text" class="change-input" v-model="username" @blur="changeName" />
        <span :class="errorUserN" >名字必须有6-14位字符、数字或下划线组成</span>
      </label>
      <label class="change-label">
        <span>电话</span>
        <input type="text" class="change-input" v-model="telephone" @blur="changePhone" />
        <span :class="errorUserP" >电话必须由11位数字组成</span>
      </label>
      <label class="change-label">
        <span>邮箱</span>
        <input type="text" class="change-input" v-model="email" @blur="changeEmail" />
        <span :class="errorUserE" >邮箱格式错误</span>
      </label>
      <label class="change-label">
        <span>地址</span>
        <input type="text" class="change-input" v-model="address" @blur="changeAddress" />
        <span :class="errorUserA" >地址必须由6-14位中文组成</span>
      </label>
      <label>
        <input type="radio" name="sex" v-model="sex" value="0" class="change-radio" />男
        <input type="radio" name="sex" v-model="sex" value="1" class="change-radio" />女
      </label>
      <button @click="subChange">确认修改</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import Header from "./Header";
import Footer from "./Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // Header,
    Footer,
  },
  data() {
    //这里存放数据
    return {
      errorUserN:"correct",
      errorUserP:"correct",
      errorUserE:"correct",
      errorUserA:"correct",
      username: "",
      telephone: "",
      email: "",
      address: "",
      sex: "0",
      chenge: [
        { userN: false },
        { userP: false },
        { userE: false },
        { userA: false },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHome() {
      this.$router.push("/");
    },
    changeName(e) {
      var reg1 = /^\w{6,14}$/;
      console.log(reg1.test(this.username));
      if (!reg1.test(this.username)) {
        e.target.style.borderColor = "red";
        this.chenge.userN = false;
        this.errorUserN = "error"
      } else {
        this.chenge.userN = true;
        e.target.style.borderColor = "#ccc";
        this.errorUserN = "correct"
      }
    },
    changePhone(e) {
      var reg2 = /^\d{11}$/;
      if (!reg2.test(this.telephone)) {
        e.target.style.borderColor = "red";
        this.errorUserP = "error"
      } else {
        e.target.style.borderColor = "#ccc";
        this.chenge.userP = true;
        this.errorUserP = "correct"
      }
    },
    changeEmail(e) {
      var reg3 = /^\w+@\w+\.(com)$|(cn)$/;
      if (!reg3.test(this.email)) {
        e.target.style.borderColor = "red";
        this.chenge.userE = false;
        this.errorUserE = "error"
      } else {
        e.target.style.borderColor = "#ccc";
        this.chenge.userE = true;
        this.errorUserE = "correct"
      }
    },
    changeAddress(e) {
      var reg4 = /^[\u4e00-\u9fa5]{6,14}$$/;
      if (!reg4.test(this.address)) {
        e.target.style.borderColor = "red";
        this.chenge.userA = false;
        this.errorUserA = "error"
      } else {
        e.target.style.borderColor = "#ccc";
        this.chenge.userA = true;
        this.errorUserA = "correct"
      }
    },
    subChange() {
      if (
        this.chenge.userN &&
        this.chenge.userP &&
        this.chenge.userE &&
        this.chenge.userA
      ) {
        var userID = localStorage.getItem("userID");
        if (userID) {
          this.$axios
            .post(
              "api/user/updateUser",
              this.$qs.stringify({
                userID: userID,
                username: this.username,
                telephone: this.telephone,
                email: this.email,
                addresses: this.address,
                sex: this.sex,
              })
            )
            .then((res) => {
              if (res.code == 200) {
                this.$message({
                  message: "修改成功，即将为您跳转到主页",
                  duration:1000,
                  type: "success",
                });
                setTimeout(() => {
                  this.$router.push("/");
                }, 1000);
              }
            });
        } else {
          this.$message.error("修改失败");
        }
      } else {
        this.$message.error("请填写完整");
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  //   height: 100%;
  min-width: 1280px;
  .title {
    width: 100%;
    height: 140px;
    padding: 20px 0;
    box-sizing: border-box;
    background: rgb(237, 241, 244);
    H2 {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
    }
    .from {
      width: 100px;
      margin: 0 auto;
      span {
        display: inline-block;
      }
      :nth-child(1) {
        margin-right: 2px;
        cursor: pointer;
        &:hover {
          color: rgb(252, 215, 182);
          transition: 0.5s;
        }
      }
      :nth-child(2) {
        margin-left: 2px;
        color: rgb(252, 215, 182);
      }
    }
  }
  .change {
    width: 500px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    .change-label {
      display: block;
      width: 500px;
      height: 110px;
      span {
        font-size: 14px;
        display: block;
        color: rgb(67, 99, 114);
      }
      .error {
        margin-left: 10px;
        font-size: 12px;
        color: red;
        display: block;
      }
      .correct{
        display: none;
      }
      .change-input {
        width: 400px;
        height: 50px;
        padding: 20px;
        box-sizing: border-box;
        font-size: 18px;
        margin: 10px;
        outline: none;
        border: 1px solid #cccccc;
      }
    }
    .change-radio {
      display: inline-block;
      margin: 10px;
    }
    button {
      width: 400px;
      height: 50px;
      background: rgb(163, 187, 200);
      margin: 10px;
      border: 0;
      color: white;
      font-weight: bold;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>