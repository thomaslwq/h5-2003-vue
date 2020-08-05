<template>
  <div id="addform">
    <div class="addform-nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">代理商管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加代理商</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="addform-content">
      <el-form
        ref="form"
        status-icon
        :model="form"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="代理商名称" prop="agent">
          <el-input v-model="form.agent" style="width:300px" placeholder="例:宝洁公司出品(只允许输入中文)"></el-input>
        </el-form-item>
        <el-form-item label="地区" prop="region">
          <el-cascader style="width:300px" v-model="form.region" placeholder="试试搜索：指南" :options="options" filterable></el-cascader>
        </el-form-item>
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="form.leader" style="width:300px" placeholder="例:乔布斯(只允许输入中文)"></el-input>
        </el-form-item>
        <el-form-item label="登录名" prop="login">
          <el-input v-model="form.login" style="width:300px" placeholder="例:宝洁公司出品(只允许输入中文)"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" autocomplete="off" prop="pass">
          <el-input v-model="form.pass" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" autocomplete="off" prop="checkPass">
          <el-input v-model="form.checkPass" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="contact">
          <el-input v-model="form.contact" style="width:400px" placeholder="例:13000000000"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input v-model="form.idcard" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="传真" prop="fax">
          <el-input v-model="form.fax" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="form.mail" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.remarks" style="width:600px;"></el-input>
        </el-form-item>
        <el-form-item label="是否开通">
          <el-radio v-model="form.radio" label="1">启用</el-radio>
          <el-radio v-model="form.radio" label="2">禁用</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="allClear">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import schema from 'async-validator';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        agent: "",
        region: "",
        leader: "",
        login: "",
        pass: "",
        checkPass: "",
        contact: "",
        idcard: "",
        fax: "",
        mail: "",
        remarks: "",
        radio: "1",
      },
      options: [
        {
          value: "广东省",
          label: "广东省",
          children: [
            {
              value: "深圳市",
              label: "深圳市",
              children: [
                {
                  value: "罗湖区",
                  label: "罗湖区",
                },
                {
                  value: "龙岗区",
                  label: "龙岗区",
                },
                {
                  value: "龙华区",
                  label: "龙华区",
                },
                {
                  value: "福田区",
                  label: "福田区",
                },
                {
                  value: "宝安区",
                  label: "宝安区",
                },
                {
                  value: "南山区",
                  label: "南山区",
                },
                {
                  value: "盐田区",
                  label: "盐田区",
                },
                {
                  value: "坪山区",
                  label: "坪山区",
                },
              ],
            },
            {
              value: "guangzhou",
              label: "广州",
              children: [
                {
                  value: "yuexiu",
                  label: "越秀区",
                },
                {
                  value: "haizhu",
                  label: "海珠区",
                },
                {
                  value: "liwan",
                  label: "荔湾区",
                },
                {
                  value: "tianhe",
                  label: "天河区",
                },
                {
                  value: "baiyun",
                  label: "白云区",
                },
                {
                  value: "huangpu",
                  label: "黄埔区",
                },
                {
                  value: "huadu",
                  label: "花都区",
                },
                {
                  value: "dpanyu",
                  label: "番禺区",
                },
                {
                  value: "nansha",
                  label: "南沙区",
                },
                {
                  value: "conghua",
                  label: "从化区",
                },
                {
                  value: "zengcheng",
                  label: "增城区",
                },
              ],
            },
          ],
        },
      ],
      rules: {
        agent: [
          { required: true, message: "请输入代理商名", trigger: "blur" },
          {
            pattern: /^[\u4E00-\uafa5]+$/,
            message: "代理商名只能为中文",
          },
        ],
        region: [{ required: true, message: "请选择地区", trigger: "change" }],
        leader: [
          { required: true, message: "请输入负责人", trigger: "blur" },
          {
            pattern: /^[\u4E00-\uafa5]+$/,
            message: "负责人只能为中文",
          },
        ],
        login: [
          { required: true, message: "请输入登录名", trigger: "blur" },
          {
            pattern: /^[\u4E00-\uafa5]+$/,
            message: "登录名只能为中文",
          },
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "密码不能为空" },
          { min: 6,max: 18,message:'长度在6到18个字符' },
          {pattern:/^(\w){6,18}$/,message:'只能输入6-18个字母、数字、下划线'}
        ],
        checkPass: [
          { validator: validatePass2, trigger: "blur" },
          { required: true, message: "请再一次输入密码" },
        ],
        contact: [
          { required: true, message: "请输入电话", trigger: "change" },
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            validator: function (rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        idcard: [
          { required: true, message: "请输入身份证号", trigger: 'blur' },
          {
            validator: function (rule, value, callback) {
              if(/^1[34578]\d{9}$/.test(value) == false){
                callback(new Error("请输入正确的身份证号"))
              }else{
                callback();
              }
              },
              trigger:'blur'
          },
        ],
        fax: [],
        mail: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },{
            type: "email",
            message: "请输入正确的邮箱",
            trigger: "blur",
          }
        ],
      },
    };
  },
  methods: {
    onSubmit() {

        this.$refs.form.validate((boolean,object)=>{
          if(boolean){
            if(this.form.radio === '1'){
             localStorage.setItem('newdata',JSON.stringify(this.form));
             this.$router.push('merchant')
             }else{
              this.$message.error({message:'请同意协议!!!',center:true});
              return false;
            }
          }
        })

    },
    allClear(){
      this.$refs.form.resetFields()
    }
  },
};
</script>

<style lang="less" scoped>
.addform-nav {
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
.addform-content {
  margin-top: 10px;
}
</style>
