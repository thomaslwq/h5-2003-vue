<template>
  <div id="addform">
    <div class="addform-nav">
      <router-link to="/">代理商管理</router-link > &gt; <router-link to="">添加代理商</router-link>
    </div>
    <div class="addform-content">
        <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="代理商名称">
      <el-input v-model="form.agent"></el-input>
    </el-form-item>
    <el-form-item label="负责人">
      <el-input v-model="form.leader"></el-input>
    </el-form-item>
    <el-form-item label="登录名">
      <el-input v-model="form.login"></el-input>
    </el-form-item>
    <el-form-item label="登录密码">
      <el-input v-model="form.password1"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.password2"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.contact"></el-input>
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model="form.idcard"></el-input>
    </el-form-item>
    <el-form-item label="传真">
      <el-input v-model="form.fax"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.mail"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.remarks"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
    </div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          name: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="less" scoped>
.addform-nav{
  height: 50px;
  border-bottom: 1px solid #909399;
  padding-left:10px;
  margin-top: 20px;
  a{
    text-decoration: none;
    color:#333;
    font-size: 18px;
    margin-right:8px
  }
}
.addform-content{
  margin-top:10px;
}

</style>
