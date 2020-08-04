<template>
<div id="list">
<div class="list-nav">
  <router-link to="/">代理商管理</router-link > &gt; <router-link to="">代理商列表</router-link>
</div>
<div class="list-search">
  <section class="search-input">
    <el-input v-model="input" placeholder="请输入代理商名称" style="width:100%;height:100%;"></el-input>
  </section>
  <section class="search-btn">检索</section>
</div>
  <el-table
    :data="tableData"
    border>
    <el-table-column
      fixed
      prop="agent"
      label="代理商名称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="code"
      label="代理商编码"
      width="200">
    </el-table-column>
    <el-table-column
      prop="region"
      label="所属区域"
      width="120">
    </el-table-column>
    <el-table-column
      prop="leader"
      label="负责人"
      width="75">
    </el-table-column>
    <el-table-column
      prop="login"
      label="登录名"
      width="75">
    </el-table-column>
    <el-table-column
      prop="contact"
      label="联系方式"
      width="114">
    </el-table-column>
    <el-table-column
      prop="fax"
      label="传真"
      width="96">
    </el-table-column>
    <el-table-column
      prop="mail"
      label="邮箱"
      width="161">
    </el-table-column>
    <el-table-column
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button class="check" @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button class="editor" type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
 export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        input:'',
        tableData: [{
          agent: '天天向上',
          code: 'DLS201802281450280741',
          region: '无锡市',
          leader: '马克思',
          login: '马克思',
          contact: 18600001111,
          fax:'028-6666666',
          mail:'123456789@qq.com'
        },
        {
          agent: '天天向上',
          code: 'DLS201802281450280741',
          region: '无锡市',
          leader: '马克思',
          login: '马克思',
          contact: 18600001111,
          fax:'028-6666666',
          mail:'123456789@qq.com'
        }]
      }
    }
  }
</script>

<style lang="less">
.el-main{
    line-height:0;
    text-align: left;
}
.list-nav{
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
.list-search{
  display:flex;
  padding:10px 0 15px 0;
  .search-input{
    width:190px;
    height:38px;
    border:1px solid #909399;
    border-radius:2px;
    margin-left:10px;
    box-sizing: border-box;
    input{
      border: none;
      padding-left: 10px;
      width:100%;
      height:100%;
    }
  }
  .search-btn{
    width:64px;
    height:38px;
    background: #009688;
    color:#fff;
    line-height: 38px;
    text-align: center;
    margin-left:20px;
  }
  button .el-button .el-button--text .el-button--small{
    width: 100px;
    height:50px;
    background-color: #009688 !important;
  }
}

</style>
