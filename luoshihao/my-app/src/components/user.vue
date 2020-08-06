<!--  -->
<template>
  <div>
    <el-container class="box">
      <!-- <el-header>用户权限</el-header> -->
      <el-main>
        <div>
          <el-table
            v-loading="loading"
            :data="tableData.filter(data => data.name.indexOf(search) != -1)"
            style="width: 100%;"
            border
          >
            <el-table-column type="index" width="40"></el-table-column>
            <el-table-column label="名字" prop="name" width="80">
            </el-table-column>
            <el-table-column label="邮箱" prop="eml"> </el-table-column>
            <el-table-column label="电话" prop="phone"> </el-table-column>
            <el-table-column label="角色" prop="role"> </el-table-column>
            <el-table-column width="80">
              <template slot="header" slot-scope="scope">
                状态
              </template>
              <template slot-scope="scope">
                <el-switch
                  v-model="tableData.value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :name="tableData.date"
                ></el-switch>
              </template>
            </el-table-column>
            <el-table-column align="center">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"
                  icon="el-icon-search"
                />
              </template>
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  circle
                ></el-button>
                <el-button
                  type="success"
                  size="mini"
                  icon="el-icon-check"
                  @click="handleconf(scope.$index, scope.row)"
                  circle
                ></el-button>
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="handleDelete(scope.$index, scope.row)"
                  circle
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin:8px auto;width:50%;height:50px;">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="30"
              :page-size="6"
            >
            </el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
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
      tableData: [
        {
          date: "2016",
          name: "王小虎",
          value: true
        },
        {
          date: "2017",
          name: "张",
          value: true
        },
        {
          date: "2018",
          name: "z",
          value: false
        },
        {
          date: "2019",
          name: "王小虎",
          value: true
        },
        {
          date: "2020",
          name: "王小虎",
          value: true
        }
      ],
      loading: false,
      search: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleconf(index, row){
       console.log(index, row);
    }
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
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
.box {
  position: relative;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #fff;
  color: #333;
  margin-top: 10px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
