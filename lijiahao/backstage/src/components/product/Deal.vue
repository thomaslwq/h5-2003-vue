<!--  -->
<template>
  <section class="deal">
    <section class="top">
      <h3>
        订单情况
        <span>本日订单内容已更新</span>
      </h3>
      <section class="list">
        <section>
          <i class="el-icon-s-finance"></i>
          <em>待付款</em>
          <span>20</span>
        </section>
        <section>
          <i class="el-icon-s-shop"></i>
          <em>待发货</em>
          <span>18</span>
        </section>
        <section>
          <i class="el-icon-s-goods"></i>
          <em>待收货</em>
          <span>35</span>
        </section>
        <section>
          <i class="el-icon-s-order"></i>
          <em>待反馈</em>
          <span>38</span>
        </section>
      </section>
    </section>
    <section class="bottom">
      <h3>
        订单管理
        <span>订单列表管理今日已完成更新</span>
      </h3>
      <el-table :data="listArr" border style="width: 100%">
        <el-table-column fixed prop="ProductNum" label="产品编号" width="150"></el-table-column>
        <el-table-column prop="JoiningTime" label="日期" width="120"></el-table-column>
        <el-table-column prop="Region" label="地区" width="120"></el-table-column>
        <el-table-column prop="OriginalPrice" label="价格" width="120"></el-table-column>
        <el-table-column prop="ProductName" label="商品名称" width="300"></el-table-column>
        <el-table-column prop="PresentPrice" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </section>
</template>

<script>
export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    mounted() {
      this.axios({
          url:'/api/list',
          method:'get',
          params:{
              _page:1,
              _limit:5
          }
      })
        .then(res=>{
            console.log(res)
            this.listArr = res.data.data
        })
    },
    data() {
      return {
          listArr:[]
      }
    }
  }
</script>
<style lang='less' scoped>
.deal {
  .top {
    height: 140px;
    min-width: 700px;
    background-color: #fff;
    margin-bottom: 30px;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      font-weight: 600;
      span {
        font-size: 12px;
        color: #ccc;
      }
    }
    .list {
      height: 50px;
      // margin-top: 20px;
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      section {
        height: 50px;
        width: 200px;
        border-right: 1px solid #ccc;
        display: flex;
        align-items: center;
        i {
          font-size: 35px;
        }
        em {
          font-size: 14px;
          display: inline-block;
          width: 70px;
          // line-height: 50px;
        }
        span {
          font-size: 25px;
        }
        &:nth-child(1) {
          color: rgb(248, 74, 163);
        }
        &:nth-child(2) {
          color: rgb(139, 42, 191);
        }
        &:nth-child(3) {
          color: rgb(71, 107, 249);
        }
        &:nth-child(4) {
          color: rgb(249, 191, 34);
          border: none;
        }
      }
    }
  }
  .bottom {
    /*min-width: 700px;*/
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    h3 {
      font-weight: 600;
      margin-bottom: 20px;
      span {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
</style>