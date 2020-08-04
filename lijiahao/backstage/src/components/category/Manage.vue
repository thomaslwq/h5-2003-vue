<!--  -->
<template>
<div class>
  <div class="item-manage">
    <div class="manage-top">
      <img src="../../../public/images/top.jpg" alt="">
    </div>
    <div class="manage-middle">
      <div class="manage-middle-left" >
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
          <el-form-item label="活动所属地区"  label-width='100px'>
            <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
              <el-option label="北京" value="beijing"></el-option>
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="广州" value="guangzhou"></el-option>
              <el-option label="深圳" value="shenzhen"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动名称" label-width='100px'>
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动副标题" label-width='100px'>
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动价格描述" label-width='100px'>
            <el-input v-model="sizeForm.name"></el-input>
          </el-form-item>
<!--          <el-form-item label="活动时间"  label-width='100px'>-->
<!--            <el-col :span="11">-->
<!--              <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>-->
<!--            </el-col>-->
<!--            <el-col class="line" :span="2">-</el-col>-->
<!--            <el-col :span="11">-->
<!--              <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
        </el-form>
      </div>
<!--      <div class="manage-middle-right">-->
<!--        <el-upload-->
<!--          class="upload-demo"-->
<!--          drag-->
<!--          action="https://jsonplaceholder.typicode.com/posts/"-->
<!--          multiple>-->
<!--          <i class="el-icon-upload"></i>-->
<!--          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
<!--          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--        </el-upload>-->
<!--      </div>-->
    </div>
    <div class="manage-bottom">
      <p class="bottom-chose-type">请选择活动商品类型</p>
      <div class="bottom-all-imfo">
        <div class="bottom-imfo bottom-1">
          <dl>
            <img src="../../../public/images/item_01.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
        <div class="bottom-imfo bottom-2">
          <dl>
            <img src="../../../public/images/item_02.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
        <div class="bottom-imfo bottom-3">
          <dl>
            <img src="../../../public/images/item_03.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
        <div class="bottom-imfo bottom-4">
          <dl>
            <img src="../../../public/images/item_04.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
        <div class="bottom-imfo bottom-5">
          <dl>
            <img src="../../../public/images/item_05.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
        <div class="bottom-imfo bottom-6">
          <dl>
            <img src="../../../public/images/item_06.jpg" alt="">
          </dl>
          <dt>
            基础建材
          </dt>
        </div>
      </div>
      <el-row>
        <el-button type="success" >选择活动商品</el-button>
      </el-row>
      <div class="bottom-chose-all">
        <p class="bottom-chose-product">已选择商品: <span>220个</span></p>
        <p class="bottom-chose-business">已选择商家: <span>12个</span></p>
      </div>
<!--      <div class="bottom-inp-all">-->
<!--        <span class="bottom-inp-chose">是否上架:  </span>-->
<!--        <el-radio v-model="radio" label="1">是</el-radio>-->
<!--        <el-radio v-model="radio" label="2">否</el-radio>-->
<!--      </div>-->
      <el-row >
        <el-button type="warning">发布活动</el-button>
      </el-row>
    </div>   
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      }
    };
  },
  // methods: {
  //   onSubmit() {
  //     console.log('submit!');
  //   }
  // }
};
</script>
<style lang='less' scoped>
div.item-manage {
  padding-left: 40px;
  padding-right: 40px;
  width: 90%;
  height: 100%;
  background: #fff;
  margin-left: 10px;
  overflow: hidden;
  div.manage-top {
    margin: 0 auto;
    width: 300px;
    img {
      display: block;
    }
  }
  div.manage-middle {
    padding-bottom: 20px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    div.manage-middle-left {
      width: 400px;
      float: left;
    }
    div.manage-middle-right {
      float: right;
      margin-right: 50px;
    }
  }
  .manage-bottom {
    .bottom-chose-type {
      margin: 20px 0;
      font-size: 14px;
      text-align: center;
    }
    .bottom-all-imfo {
      display: flex;
      justify-content: space-between;

      .bottom-imfo {
        width: 100px;
        height: 130px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        font-size: 14px;
        margin-bottom:20px;
      }
    }
    .el-row {
      text-align: center;
    }
    .bottom-chose-all {
      width:100%;
      height: 20px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
        .bottom-chose-product {
          font-size: 14px;
          margin-right:40px;
          span {
            color: rgb(242,155,16);
          }
        }
        .bottom-chose-business {
          font-size: 14px;
          span {
            color: rgb(242,155,16);
          }
        }
    }
    .bottom-inp-all {
      text-align: center;
      margin: 20px 0;
      font-size: 14px;
    }
  }
}
</style>
