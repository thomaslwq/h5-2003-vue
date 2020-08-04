<!-- 注册页面  -->
<template>
  <div class="register">
    <!-- 注册标题开始 -->
    <div class="register-area">
      <div class="register-tit">
        <h3 class="title">Register</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li class="active">Register</li>
        </ul>
      </div>
    </div>
    <!-- 注册标题结束 -->

    <!-- 注册表单开始 -->
    <div class="register-form">
      <div class="container">
        <div class="input-username">
          <label for="username">用户名*</label>
          <input type="text" id="username" v-model="username" @blur="userBlur" />
        </div>
        <div class="input-password">
          <label for="password">密码 *</label>
          <input type="text" id="password" v-model="password" @blur="psdBlur" />
        </div>
        <div class="input-email">
          <label for="email">邮箱*</label>
          <input type="email" id="email" v-model="email" @blur="emailBlur" />
        </div>
        <div class="input-phone">
          <label for="phone">手机号 *</label>
          <input type="text" id="phone" v-model="telephone" @blur="phoneBlur" />
        </div>
        <div class="input-sex">
          <label for="sex">性别 *</label>
          <br />
          <el-radio v-model="radio" label="0">男</el-radio>
          <el-radio v-model="radio" label="1">女</el-radio>
        </div>
        <button type="submit" class="submit-btn" @click.stop="confirm">注册</button>
        <div class="create-info">
          <span>已经注册? 直接登录</span>
        </div>
      </div>
    </div>
    <!-- 注册表单结束 -->
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "./Footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      username: "",
      password: "",
      email: "",
      telephone: "",
      radio: "0",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    confirm: function () {
      // 1. 获取输入框值
      let password = this.password;
      let username = this.username;
      let email = this.email;
      let telephone = this.telephone;
      let sex = this.radio;
      // 关键词
      //debugger
      //2. 账号密码为空的情况下 提示用户不能为空
      if (!password || !email || !username || !phone) {
        this.$message({
          message: "账号、邮箱、手机号或密码不能为空！",
        });
        return false;
      }
      // 发送注册信息给后台
      this.$axios
        .post(
          "http://175.24.122.212:10500/api/user/regist",
          this.$qs.stringify({
            username,
            email,
            password,
            telephone,
            sex,
          })
        )
        .then((res) => {
          if (res.status == 200) {
            // 注册成功
            this.$message({
              message: "注册成功,即将为您跳转登陆页面",
            });
            console.log("注册成功");
            this.$router.push({ name: "Login" }); // 跳转回登录页
          }
        })
        .catch((err) => err);
    },
    userBlur: function () {
      let username = this.username;
      var reg1 = /^[a-zA-Z]\w{5,14}$/;
      if (!reg1.test(username)) {
        this.$message({
          message: "请输入6-15个字符，并且以英文字母开头的用户名！",
          type: "error",
        });
        return false;
      }
    },
    psdBlur: function () {
      let password = this.password;
      var reg2 = /^[a-zA-Z0-9]{6,15}$/;
      if (!reg2.test(password)) {
        this.$message({
          message: "请输入长度为6-15位由英文字母和数字组成的密码！",
          type: "error",
        });
        return false;
      }
    },
    emailBlur: function () {
      let email = this.email;
      var reg3 = /^\w+@\w+\.(com)$|(cn)$/;
      if (!reg3.test(email)) {
        this.$message({
          message: "请输入包含@和.符号，且以.com或者.cn结尾的邮箱！",
          type: "error",
        });
        return false;
      }
    },
    phoneBlur: function () {
      let telephone = this.telephone;
      var reg4 = /^1\d{10}$/;
      if (!reg4.test(telephone)) {
        this.$message({
          message: "请输入11位数字，且以1开头的手机号码！",
          type: "error",
        });
        return false;
      }
    },
  },
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
// 注册标题
.register-area {
  width: 100%;
  padding: 40px 0;
  background: #edf1f4;
  .register-tit {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    .title {
      color: #222933;
      font-size: 36px;
      line-height: 24px;
      font-weight: bold;
      font-weight: 500;
      margin-bottom: 15px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        text-transform: capitalize;
        color: #9a9ea2;
        a {
          display: inline-block;
          color: #9a9ea2;
          font-weight: bold;
          text-decoration: none;
          &:after {
            content: "/";
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
      li.active {
        color: #fcd7b6;
      }
    }
  }
}
// 注册表单
.register-form {
  padding: 50px 0;
  .container {
    width: 540px;
    margin: 0 auto;
    .input-username {
      margin-bottom: 25px;
      label {
        font-size: 14px;
        color: #436372;
      }
      input#username {
        width: 100%;
        border: 1px solid #ccc;
        height: 60px;
        margin-top: 14px;
        padding: 0 20px;
      }
    }
    .input-email {
      margin-bottom: 25px;
      label {
        font-size: 14px;
        color: #436372;
      }
      input#email {
        width: 100%;
        border: 1px solid #ccc;
        height: 60px;
        margin-top: 14px;
        padding: 0 20px;
      }
    }
    .input-password {
      margin-bottom: 25px;
      label {
        font-size: 14px;
        color: #436372;
      }
      input#password {
        width: 100%;
        border: 1px solid #ccc;
        height: 60px;
        padding: 0 20px;
        margin-top: 14px;
      }
    }

    .input-phone {
      margin-bottom: 25px;
      label {
        font-size: 14px;
        color: #436372;
      }
      input#phone {
        width: 100%;
        border: 1px solid #ccc;
        height: 60px;
        padding: 0 20px;
        margin-top: 14px;
      }
    }
    .input-sex {
      margin-bottom: 25px;
      label {
        display: inline-block;
        height: 30px;
      }
      span {
        margin-right: 50px;
      }
    }
    button.submit-btn {
      width: 100%;
      background: #a3bbc8;
      color: #fff;
      height: 60px;
      border: 0;
      font-size: 18px;
      font-weight: 500;
      transition: 1s;
      &:hover {
        cursor: pointer;
        background-color: rgb(252, 215, 182);
        color: #fff;
      }
    }
    .create-info {
      span {
        display: inline-block;
        margin-top: 25px;
        font-size: 14px;
        color: #436372;
        cursor: pointer;
      }
    }
  }
}
</style>