<!-- 用户列表 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 带搜索的输入框 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryObj.query" clearable @clear="getUserList">
            <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showDialog">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 表格用户列表 -->
      <el-table :data="userlist" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <!-- 状态栏 -->
        <el-table-column label="状态">
          <template slot-scope="scope">
            <!-- {{scope.row}} --作用域插槽 -->
            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <!-- 操作栏 -->
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>

            <el-tooltip effect="dark" content="分配权限" placement="top" :enterable="false">
              <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryObj.pagenum"
        :page-sizes="[1, 3, 5, 10]"
        :page-size="queryObj.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>

      <!-- 添加用户对话框 -->
      <el-dialog title="添加用户" :visible.sync="DialogVisible" width="50%">
        <!-- 对话框主体区域 -->
        <!-- <el-form
          :model="addForm"
          :rules="addFormrules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form> -->
        <!-- 对话框底部区域 -->
        <span slot="footer" class="dialog-footer">
          <el-button @click="DialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="DialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
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
      // 获取用户列表数据的请求参数
      queryObj: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 一页显示条数
        pagesize: 3
      },
      userlist: [],
      total: 0,
      DialogVisible: false
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //   获取用户列表数据
    async getUserList() {
      const res = await this.$http.get('users', { params: this.queryObj })
      if (res.meta.status !== 200)
        return this.$message.erroe('获取用户列表失败！')
      this.userlist = res.data.users
      this.total = res.data.total
      console.log(this.total)
    },
    // 监听显示条数改变事件
    handleSizeChange(newSize) {
      this.queryObj.pagesize = newSize
      this.getUserList()()
    },
    // 监听页码改变事件
    handleCurrentChange(newPage) {
      this.queryObj.pagenum = newPage
      this.getUserList()()
    },
    // 监听状态按钮的改变
    async userStateChanged(userlist) {
      // console.log(userlist)
      const res = await this.$http.put(
        `users/${userlist.id}/state/${userlist.mg_state}`
      )
      // console.log(res)
      if (res.meta.status != 200) {
        userlist.mg_state = !userlist.mg_state
        return this.$message.error('设置状态失败')
      }
      this.$message({
        type: 'success',
        message: '设置状态成功',
        duration: 500
      })
    },
    // 监听对话框的显示
    showDialog() {
      this.DialogVisible = true
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getUserList()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
</style>