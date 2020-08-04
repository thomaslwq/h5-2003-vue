<!--  -->
<template>
<div class='user'>
  <p>用户名 :<span>张三</span></p>
  <p>性别 :<span>男</span></p>
  <p>年龄 :<span>24</span></p>
  <p>移动电话 :<span>13578983543</span></p>
  <p>电子邮件 :<span>38275040281@qq.com</span></p>
  <p>QQ :<span>38275040281</span></p>
  <p>权限 :<span>普通管理员</span></p>
  <p>注册时间 :<span>2020-4-2</span></p>
  <div class="btn">
    <el-button type="primary" plain>修改信息</el-button>
    <el-button type="danger" plain>修改密码</el-button>
  </div>
</div>
</template>

<script>

</script>
<style lang='less' scoped>
.user{
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  p{
    font-size: 20px;
    line-height: 40px;
    width: 400px;
  }
  span{
    display: inline-block;
    margin-left: 50px;
    color: #ccc;
  }
  .btn{
    button{
      width: 100px;
      height: 50px;
      margin-right: 30px;
    }
  }
}
</style>
