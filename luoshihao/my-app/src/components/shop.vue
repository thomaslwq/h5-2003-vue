<template>
  <div class="Users">
    <!-- 面包屑导航 -->
    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span="7">
          <!-- 搜索与添加区域 -->
          <el-input placeholder="请输入内容"
                    clearable
                   >
            <el-button slot="append"
                       icon="el-icon-search"
                     ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"
                    @click="dialogFormVisible = true">添加商品</el-button>
        </el-col>
      </el-row>
      <!-- 商品列表区域 -->
      <el-table :data="goodlist"
                border
                stripe>
        <el-table-column label="商品名称"
                         prop="name"></el-table-column>
        <el-table-column label="商品分类"
                         prop="sort"></el-table-column>
        <el-table-column label="供货商"
                         prop="company"></el-table-column>
        <el-table-column label="商品价格"
                         prop="price"></el-table-column>
        <el-table-column label="出厂日期" prop="Time">
        </el-table-column>
        <el-table-column label="操作"
                         width="180">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary"
                       icon="el-icon-edit"
                       size="mini"
                       @click="showEditDialog(scope.row.id)"></el-button>
            <!-- 删除按钮 -->
            <el-button type="danger"
                       icon="el-icon-delete"
                       size="mini"
                       @click="removeUserById(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
    </el-card>
    <!-- 添加用户对话框 -->
    <el-dialog title="添加商品"
               :visible.sync="dialogFormVisible"
               width="50%"
              >
      <el-form ref="addFormRef"
               :model="addForm"
               label-width="70px">
        <el-form-item label="名称"
                      prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="分类"
                      prop="sort">
          <el-input v-model="addForm.sort"></el-input>
        </el-form-item>
        <el-form-item label="供货商"
                      prop="company">
          <el-input v-model="addForm.company"></el-input>
        </el-form-item>
        <el-form-item label="价格"
                      prop="price">
          <el-input v-model="addForm.price"></el-input>
        </el-form-item>
        <el-form-item label="日期"
                      prop="price">
          <el-input v-model="addForm.Time"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary"
           @click="add"    >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改用户的对话框 -->
    <!-- <el-dialog title="修改用户"
               width="50%"
               @close="editDialogClosed">
      <el-form ref="editFormRef"
               :model="editForm"
               label-width="70px"
               :rules="editFormRule">
        <el-form-item label="用户名">
          <el-input v-model="editForm.name"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="company">
          <el-input v-model="editForm.company"></el-input>
        </el-form-item>
        <el-form-item label="手机号"
                      prop="price">
          <el-input v-model="editForm.Time"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button >取 消</el-button>
        <el-button type="primary"
                   >确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
 
<script>
export default {
  data () {
   
      
    return {
     
      
      // 控制用户对话框的显示和隐藏
      dialogFormVisible: false,
      // 添加用户的表单数据
       editForm: {
        name: '',
        sort: '',
        company: '',
        price: '',
        Time:''
      },
      addForm: {
        name: '',
        sort: '',
        company: '',
        price: '',
        Time:''
      },
      goodlist:[
        
      ],
      //editDialogVisible: false,
    }
  },
  watch: {},
  computed: {},
  methods: {
    //  getData() {
    //   var url = 'public\json\db.json';
    //   this.$http.get(url).then((data) => {
    //     console.log(data)
    //     this.goodlist = data.goods;
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // },

       get_goods(){
                    this.$axios.get("http://localhost:3000/goods")
                        .then(response=>{
                           //console.log(response);
                            this.goodlist=response.data;
                            //console.log(this.goodlist)
 
                        }).catch(error=>{
                           //console.log(error.response)
                    });
                },
      add(){
               console.log(this.addForm);
        this.$axios.post("http://localhost:3000/goods",{name:this.addForm.name,sort:this.addForm.sort,
        company:this.addForm.company,price:this.addForm.price,Time:this.addForm.Time})
                    .then(response=>{
                        this.addForm.push.this.goods
                        this.get_goods()
                    }).catch(error=>{

                    })
      }
  },
  created () {
    
  },
  mounted () { 
     this.get_goods()
  }
}
</script>
<style lang="less" scoped>
.Users {
  .el-breadcrumb {
    margin-bottom: 15px;
    font-size: 12px;
  }
  .el-card {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
  .el-table {
    margin-top: 15px;
    font-size: 12px;
  }
  .el-pagination {
    margin-top: 15px;
  }
}
</style>