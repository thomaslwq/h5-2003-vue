<template>
  <div id="list">
    <div class="list-nav">
      <router-link to="/">代理商管理</router-link>&gt;
      <router-link to>代理商列表</router-link>
    </div>
    <div class="list-search">
      <section class="search-input">
        <el-input v-model="input" placeholder="请输入代理商名称" style="width:100%;height:100%;"></el-input>
      </section>
      <section class="search-btn">检索</section>
    </div>
    <el-table :data="tableData" border>
      <el-table-column fixed prop="agent" label="代理商名称" width="100"></el-table-column>
      <el-table-column prop="code" label="代理商编码" width="200"></el-table-column>
      <el-table-column prop="region" label="所属区域" width="120"></el-table-column>
      <el-table-column prop="leader" label="负责人" width="75"></el-table-column>
      <el-table-column prop="login" label="登录名" width="75"></el-table-column>
      <el-table-column prop="contact" label="联系方式" width="114"></el-table-column>
      <el-table-column prop="fax" label="传真" width="96"></el-table-column>
      <el-table-column prop="mail" label="邮箱" width="161"></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            class="check"
            @click.capture="handleClick(scope.row)"
            type="text"
            size="middle"
          >查看</el-button>
          <el-button class="editor" type="text" size="middle" @click="dialogFormVisible = true" @click.capture="handleClickEdit(scope.row)">编辑</el-button>
          <!-- 编辑对话框的开始 -->

          <el-dialog :visible.sync="dialogFormVisible">
            <el-form :model="rowObj">
              <el-form-item label="代理商名称" :label-width="formLabelWidth">
                <el-input v-model="rowObj.agent" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="代理商编码" :label-width="formLabelWidth">
                <el-input v-model="rowObj.code" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="所属区域" :label-width="formLabelWidth">
                <el-input v-model="rowObj.region" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="负责人" :label-width="formLabelWidth">
                <el-input v-model="rowObj.leader" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="登录名" :label-width="formLabelWidth">
                <el-input v-model="rowObj.login" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                <el-input v-model="rowObj.contact" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="传真" :label-width="formLabelWidth">
                <el-input v-model="rowObj.fax" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="rowObj.mail" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 编辑对话框的结束 -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClickEdit(row){this.rowObj = row;},
    handleClick(row) {
      this.rowObj = row;
      const h = this.$createElement;
      this.$msgbox({
        message: h("div", { style: "height:400px;" }, [
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `代理商名称: ${this.rowObj.agent}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `代理商编码: ${this.rowObj.code}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `所属区域: ${this.rowObj.region}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `负责人: ${this.rowObj.leader}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `登录名: ${this.rowObj.login}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `联系方式: ${this.rowObj.contact}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `传真: ${this.rowObj.fax}`
          ),
          h(
            "div",
            {
              style:
                "color: teal;font-size:20px;font-weight:600;margin:20px 0 0 30px;",
            },
            `邮箱: ${this.rowObj.mail}`
          ),
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            done();
          } else {
            done();
          }
        },
      });
    },
  },

  data() {
    return {
      input: "",
      rowObj: {},
      dialogFormVisible: false,
      formLabelWidth: "90px",
      tableData: [
        {
          id:'1',
          agent: "天天向上",
          code: "DLS201802281450280741",
          region: "无锡市",
          leader: "马克思",
          login: "马克思",
          contact: 18600001111,
          fax: "028-6666666",
          mail: "123456789@qq.com",
        },
        {
          id:2,
          agent: "天天向上",
          code: "DLS201802281450280741",
          region: "无锡市",
          leader: "马克思",
          login: "马克思",
          contact: 18600001111,
          fax: "028-6666666",
          mail: "123456789@qq.com",
        },
      ]
    };
  },
};
</script>

<style lang="less">
.el-main {
  line-height: 0;
  text-align: left;
}
.list-nav {
  height: 50px;
  border-bottom: 1px solid #909399;
  padding-left: 10px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    margin-right: 8px;
  }
}
.list-search {
  display: flex;
  padding: 10px 0 15px 0;
  .search-input {
    width: 190px;
    height: 38px;
    border: 1px solid #909399;
    border-radius: 2px;
    margin-left: 10px;
    box-sizing: border-box;
    input {
      border: none;
      padding-left: 10px;
      width: 100%;
      height: 100%;
    }
  }
  .search-btn {
    width: 64px;
    height: 38px;
    background: #009688;
    color: #fff;
    line-height: 38px;
    text-align: center;
    margin-left: 20px;
  }
  button .el-button .el-button--text .el-button--small {
    width: 100px;
    height: 50px;
    background-color: #009688 !important;
  }
}
</style>
