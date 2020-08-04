<!--  -->
<template>
<div class='glee-login'>
    <!-- login home/login区域 -->
    <div class="glee-login-top">
        <h2 class="login-top-title">Login</h2>
        <section class="login-top-link">
            <a href="">Home</a>&nbsp; / &nbsp;<a href="">Login</a>
        </section>
    </div>
    <!-- 账号登录区域 -->
    <div class="glee-login-middle">
        <div class="login-middle-user">
            <label for="name-notice">Username or email address *</label>
            <input type="text" id="name-notice" v-model="username">
        </div>
        <div class="login-middle-pass">
            <label for="pass-notice">Password *</label>
            <input type="password" id="pass-notice" v-model="userpass">
        </div>
        <div class="login-middle-btn" @click="loginHandler">
            Login
        </div>
        <div class="login-middle-remerber">
            <div class="middle-remerber-right">
                <input type="checkbox" name="" id="middle-remerber">
                <label for="middle-remerber">Remember me</label>
            </div>
            <div class="middle-remerber-left">
                <a href="">Lost your password?</a>
            </div>       
        </div>
        <div class="login-middle-register">
            <span>Not registered? No problem</span>
            <div class="middle-register">Create an account</div>
        </div>
    </div>
</div>
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
    username:"",
    userpass:""
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    loginHandler(){
        if(!(this.username && this.userpass)){
             this.$message.error('请输入账号或者密码后再点击登录！');
        }else{
            this.$axios.post("http://175.24.122.212:10500/api/user/login",{
            username:this.username,
            password:this.userpass
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
        }
        //邮箱验证暂不启用
        // let email = this.username.value;
        // let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        // if(!reg.test(email)){
        //     this.$message({
        //         message:"请输入正确的邮箱号！",
        //         type:"warning",
        //     })
        // }
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
<style lang="less" scoped>
.glee-login{
    padding-bottom: 120px;
 .glee-login-top {
    background: #edf1f4;  
    height: 144px;
    text-align: center;
      .login-top-title {
        width: 1140px;
        margin: 0 auto;
        color: #222933;
        font-size: 30px;
        line-height: 30px;
        font-weight: 400;
        padding: 38px 0 12px 0;
      }
      .login-top-link {
        font-size: 12px;
        color: #9a9ea2;
        a {
          text-decoration: none;
          color: #9a9ea2;
        }
      }
 }
 .glee-login-middle {
     width: 1140px;
     margin: 0 auto;
   .login-middle-user {
      width: 540px;
      margin: 0 auto;
      label {
          display: block;
          color: #436372;
          font-size: 14px;
          line-height: 14px;
          padding: 124px 0 20px 0;
      }
      input#name-notice {
          width: 100%;
          height: 60px;
          padding: 0 20px;
          border: 1px solid #f6f6f6;
    }
  }
  .login-middle-pass {
        width: 540px;
        margin: 0 auto;
     label {
         display: block;
         color: #436372;
         font-size: 14px;
         line-height: 14px;
         padding: 30px 0 20px 0;
     }
     input#pass-notice {
        width: 100%;
        height: 60px;
        border: 1px solid #f6f6f6;
        padding: 0 20px;
     }
  }
  .login-middle-btn {
      transition: .5s;
      &:hover{
          cursor: pointer;
          background: rgb(252,215,182);
      }
      width: 540px;
      margin: 26px auto 20px;
      height: 60px;
      background: #a3bbc8;
      color: #fff;
      font-size: 18px;
      text-align: center;
      line-height: 60px;
      font-weight: 700;
  }

  .login-middle-remerber {
        display: flex;
        justify-content: space-between;
        width: 540px;
        margin: 0 auto;
        padding-bottom: 20px;
        border-bottom: 1px solid #f6f6f6;
    .middle-remerber-right {
      label {
        color: #436372;
        font-size: 14px;
        line-height: 14px;
      }
    }
    .middle-remerber-left {
      a {
        text-decoration: none;
        color: #436372;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  .login-middle-register {
        width: 540px;
        margin: 0 auto;
    span {
        display:block;
        font-size: 14px;
        line-height: 14px;
        color: #436372;
        padding:30px 0 30px 0;
    }
    .middle-register {
        transition: .5s;
        &:hover{
            background: rgb(163,187,200);
            color:#fff;
            cursor: pointer;

        }
        width: 100%;
        background: #fff;
        color: #243f4d;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        border: 2px solid #a3bbc8;
    }
  }
 }
}

</style>