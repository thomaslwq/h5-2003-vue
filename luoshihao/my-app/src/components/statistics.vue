<template>
  <div>
    <el-container class="box">
      <!-- 头部 -->
      <el-header>统计报表</el-header>
      <!-- 内容 -->
      <section class="Sta_main">
        <el-row>
          <!-- 日历 -->
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">
              <div class="block" style="line-height:0;text-align:left;">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  style="border:none;"
                >
                </el-date-picker>
                <!-- 按钮 -->
                <el-button type="success" plain>导出</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <!-- 日历结束 -->
        <!-- 表格开始 -->
        <el-table :data="tableData" border style="width:96%;margin:10px auto;">
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="shopName" label="商品名"> </el-table-column>
          <el-table-column prop="order" label="订货单"> </el-table-column>
          <el-table-column prop="quit" label="退货单"> </el-table-column>
          <el-table-column prop="city" label="地区"> </el-table-column>
          <el-table-column prop="sales" label="销量"> </el-table-column>
          <el-table-column prop="money" label="金额"> </el-table-column>
          <el-table-column prop="kind" label="品种"> </el-table-column>
          <el-table-column prop="name" label="负责人"> </el-table-column>
        </el-table>
        <!-- 表格结束 -->
        <div
          id="echartsBox"
          style="width:90%; height:500px; margin:20px auto;"
        ></div>
      </section>
      <!-- 内容区结束 -->
    </el-container>
  </div>
</template>

<script>
import Echarts from "echarts";
export default {
  data() {
    return {
      value1: "",
      //   日历
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      //   表格
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          sales: 6,
          money: 320
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          sales: 6,
          money: 320
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          sales: 6,
          money: 320
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          sales: 6,
          money: 320
        }
      ],
      //  echarts
      option: {
        tooltip: {
          trigger: "item"
        },
        title: {
          text: "前六个月销量",
          show: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330],
            type: "line",
            areaStyle: {},
            normal: {
              show: true,
              position: "top"
            }
          }
        ]
      }
    };
  },
  methods: {
    initCharts() {
      let myChart = Echarts.init(document.getElementById("echartsBox"));
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.initCharts();
  }
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
}
// 布局css
.el-header {
  position: fixed;
  top: 8vh;
  background-color: #fff;
  color: #333;
  text-align: left;
  line-height: 60px;
  z-index: 5;
  width: 100%;
}
.Sta_main {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
body > .el-container {
  margin-bottom: 40px;
}
//   分栏
.el-row {
  margin: 5px auto 0 auto;
  width: 95%;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple-dark {
  background: #fff;
  border-bottom: 1px solid skyblue;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
