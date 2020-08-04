!<!-- 登录页面 -->
<template>
  <div class="login-box">
    <div class="login-content">
      <div class="login-pic">
        <img :src="imgUrl" alt />
      </div>
      <div class="login-from">
        <!-- <div class="login-form--title"> -->
          <router-link tag="div" class="login-form--title" to="/home">登录</router-link>
          <!-- </div> -->
        <section class="el-input">
          <el-input
            type="text"
            @onblur="namefoo"
            v-model="username"
            placeholder="请输入手机/邮箱/用户名"
            name
            id
            :class="{'el_input__inner_err':isName}"
          />
          <div class="el-form-item__error" v-show="isName">请输入用户名</div>
        </section>
         <section class="el-input">
          <el-input type="password"  @blur="passfoo"   v-model="userpass" autocomplete="off"  placeholder="请输入密码" show-password></el-input>
          <div class="el-form-item__error" v-show="isPass" >请输入密码</div>
        </section>
        <button class="el-button login-form_button el-button--primary is-round">登录</button>
        <el-button type="text" @click="dialogFormVisible = true" class="login-form-register">注册</el-button>
      </div>
    </div>

    <el-dialog title="注册页面" :visible.sync="dialogFormVisible" center width="400px">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        width="300px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="user">
          <el-input type="password" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.form.name !== "") {
          this.$refs.ruleForm.validateField("checkUser");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.name !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    //这里存放数据
    return {
      imgUrl: require("@/assets/bg.jpg"),
      isName: false,
      isPass: false,
      username: "",
      userpass: "",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "70px",
      ruleForm: {
        pass: "",
        user: "",
      },
      //表单验证规则
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],

      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 失去焦点判断账号
    namefoo() {
      if (this.username === "") {
        this.isName = true;
      }
    },
    passfoo() {
      if (this.userpass === "") {
        this.isPass = true;
      }

    },
  },
};
</script>
<style lang="less"  scoped>
.login-box {
  background-image: url("~@/assets/bg.png");
  .login-content {
    width: 1140px;
    height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -570px;
    margin-top: -200px;
    display: flex;
    justify-content: space-between;
    .login-pic {
      flex: 1;
      height: 100%;
      border-radius: 15px;

      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
      img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
      }
    }
    .login-from {
      width: 340px;
      border-radius: 12px;
      margin-left: 36px;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
      box-sizing: border-box;
      background-color: #fff;
      text-align: center;
      padding: 36px;
      .login-form--title {
        font-size: 32px;
        text-align: center;
        margin-bottom: 36px;
        font-weight: 700;
      }
      .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        margin-bottom: 15px;
      }
      .login-form_button {
        width: 100%;
      }
      .login-form-register {
        width: 100px;
        position: absolute;
        bottom: 2px;
        right: 10px;
        background: white;
        border: none;
        color: turquoise;
      }
      .login-form-register:hover {
        border-radius: 15px;
        text-align: center;
        background: #409eff;
        color: white;
      }
      .el-form-item__error {
        color: #f56c6c;
        font-size: 12px;
        position: absolute;
        top: 85%;
        left: 10px;
      }
    }
  }
}
</style>