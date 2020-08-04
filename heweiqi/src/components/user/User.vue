<!--  -->
<template>
  <div class>
    <!-- 头部 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6">
          <!-- 搜索区域 -->
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <!-- 添加区域 -->
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table style="width: 100%" :data="userlist" stripe border>
        <!-- 序列 -->
        <el-table-column type="index" label="#"></el-table-column>
        <!-- 姓名 -->
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <!-- 邮箱 -->
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <!-- 电话 -->
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <!-- 角色 -->
        <el-table-column prop="role_name" label="角色" width="180"></el-table-column>
        <!-- 状态 -->
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state"></el-switch>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 编辑 -->
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-share" size="mini"></el-button>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top">
              <!-- 设置 -->
              <el-button type="warning" icon="el-icon-delete" size="mini" :enterable="false"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page=" queryInfo.pagenum"
        :page-sizes="[2, 5, 10,15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totle"
      ></el-pagination>
    </el-card>

    <!-- 增加用户区域 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
       <el-form-item label="用户名" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 密码验证规则

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      // 用户规则
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      // 获取用户列表查询参数对象
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      //   用户数据
      userlist: [],
      //   总条数
      totle: 0,
      //   增加用户框的显隐的初始值
      dialogVisible: false,
    
    // 密码验证规则
    rules: {
      pass: [{ validator: validatePass, trigger: "blur" }]
     }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   获取列表
    async getUserList() {
      let { data: res } = await this.$http.get("users", {
        params: this.queryInfo,
      });
      //   console.log(res);
      this.userlist = res.data.users;
      //   console.log(this.userlist);
    },
    // 改变页数
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize;
      this.getUserList();
    },
    // 跳转到某页
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    },
    // 增加用户
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 提交用户的事件
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //   重置用户信息的事件
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //   一访问直接渲染
    this.getUserList();
  },
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
<style  lang='less' scoped>
.el-card {
  margin-top: 15px;
}
.el-table {
  margin-top: 15px;
}
</style>