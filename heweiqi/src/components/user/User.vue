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
          <el-input placeholder="请输入内容" clearable @clear="getUserList" v-model="queryInfo.query">
            <el-button slot="append" icon="el-icon-search" @click="getUserList" clearable="true"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <!-- 添加用户区域 -->
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
            <el-switch v-model="scope.row.mg_state" @change="userStateChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 编辑 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="userUpdate(scope.row.id)"
              size="mini"
            ></el-button>
            <!-- 删除 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="userDelate(scope.row.id)"
              size="mini"
            ></el-button>
            <!-- {{scope.row}} -->
            <!-- 设置 -->
            <el-tooltip effect="dark" content="分配角色" placement="top">
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
                @click="userSet"
                :enterable="false"
              ></el-button>
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
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form
        :model="addUserForm"
   
        :rules="addUserFormRules"
        ref="addUserFormRef"
        label-width="100px"
      >
        <!-- 用户名区域 -->
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="addUserForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 密码区域 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="addUserForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 邮箱区域 -->
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="addUserForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 手机区域 -->
        <el-form-item label="手机" prop="mobile">
          <el-input v-model.number="addUserForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 确定取消区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑用户区域 -->
    <el-dialog
      title="编辑"
      :visible.sync="editDialogVisible"
      width="50%"
      :before-close="editHandleClose"
    >
      <el-form
        :model="editUserForm"

        :rules="editUserFormRules"
        ref="editUserFormRef"
        label-width="100px"
      >
        <!-- 用户名区域 -->
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="editUserForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 邮箱区域 -->
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="editUserForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 手机区域 -->
        <el-form-item label="手机" prop="mobile">
          <el-input v-model.number="editUserForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 确定取消区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="userUpdateSub">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配角色区域 -->
    <el-dialog
      title="提示"
      :visible.sync="setDialogVisible"
      width="50%"
      :before-close="setHandleClose"
    >
      <h3>
        <span>当前的用户：</span>
        <span>{{1}}</span>
      </h3>
      <h3>
        <span>当前的角色：</span>
        <span>{{1}}</span>
      </h3>

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="长老" value="shanghai"></el-option>
            <el-option label="掌门" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="setDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 邮箱验证规则
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^\w+@\w+(\.\w+)+$/;
      if (regEmail.test(value)) {
        // 合法邮箱
        return callback();
      }
      callback(new Error("请输入合法邮箱"));
    };
    // 自定义手机号规则
    var checkMobile = (rule, value, callback) => {
      const regMobile = /^1[34578]\d{9}$/;
      if (regMobile.test(value)) {
        return callback();
      }
      // 返回一个错误提示
      callback(new Error("请输入合法的手机号码"));
    };
    return {
      // 用户数据
      addUserForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 编辑用户的数据
      editDialogVisible: false,
      editUserForm: {},
      // 设置用户角色的初始数据
      setDialogVisible: false,
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

      // 用户信息验证规则
      addUserFormRules: {
        //   用户名验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur" },
        ],
        //   密码的验证规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
      // 编辑用户的信息的验证
      editUserFormRules: {
        //   用户名验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur" },
        ],
        // 邮箱验证
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        // 手机验证
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
      // 设置角色的下拉框的数据
      form: {
        region: "",
      },
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
      let  res= await this.$http.get("users", {
        params: this.queryInfo,
      });
      // console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error("获取失败");
      }
      // console.log(res)
      this.userlist = res.data.users;
      this.totle = res.data.total;
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
    // 关闭添加对话框
    handleClose() {
      this.dialogVisible = false;
    },
    //增加用户的事件
    addUser() {
      this.$refs.addUserFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await this.$http.post("users", this.addUserForm);
         
        if (res.meta.status !== 201) {
          this.$message.error("添加失败");
        }
        // console.log(res)
        this.$message.success("添加成功");
        // 隐藏对话框
        this.dialogVisible = false;
        this.getUserList();
      });
    },
    // 改变用户状态的事件
    async userStateChange(userInfo) {
      // console.log(userInfo)
      const res = await this.$http.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      );
      //  console.log(res)
      if (res.meta.status !== 200) {
        userInfo.mg_state = !userInfo.mg_state;
        return this.$message.error("更新失败");
      }
      this.$message.success("更新成功");
    },
    // 编辑用户对话框的显隐
    editHandleClose() {
      this.editDialogVisible = false;
    },
    // 编辑用户信息
    async userUpdate(id) {
      // console.log(id)
      this.editDialogVisible = true;
      const res = await this.$http.get("users/" + id);

      // console.log(res);
      // console.log(res.data);
      if (res.meta.status !== 200) {
        this.$message.error("请求失败");
      }
      this.editUserForm = res.data;
      // this.editDialogVisible = false;
    },
    // 更新列表之提交
    userUpdateSub() {
      // this.editDialogVisible = true;

      this.$refs.editUserFormRef.validate(async (valid) => {
        if (!valid) return;
        const res = await this.$http.put(
          "users/" + this.editUserForm.id,
          {
            id: this.editUserForm.id,
            email: this.editUserForm.email,
            mobile: this.editUserForm.mobile,
          }
        );
        if (res.meta.status !== 201) {
          this.$message.error("添加失败");
        }
        this.$message.success("添加成功");
        // 隐藏对话框
        this.editDialogVisible = false;
        this.getUserList();
      });
    },

    // 删除用户事件
    userDelate(id) {
      // console.log(id);
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const res = await this.$http.delete("users/" + id);
          // console.log(res);
          if (res.meta.status !== 200) {
            this.$message.error("删除失败");
          }
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.getUserList();
        })

        
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 设置用户角色事件
    setHandleClose() {
      this.setDialogVisible = false;
    },
    userSet() {
      this.setDialogVisible = true;
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
.el-pagination{
  margin-top: 15px;
}
</style>