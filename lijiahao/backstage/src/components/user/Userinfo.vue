<template>
	<div class="uso">
		<div class="uso-bar">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
				<el-breadcrumb-item>用户列表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="uso-table">
			<div class="table-header">
				<el-button class="delete mr10" type="primary">
					<i class="el-icon-delete"></i>批量删除
				</el-button>
				<el-select class="select mr10" v-model="value" placeholder="请选择">
					<el-option key="1" label="广东省" value="广东省"></el-option>
					<el-option key="2" label="湖南省" value="湖南省"></el-option>
				</el-select>
				<el-input type="text" placeholder="用户名" v-model="text" class="handle-input mr10"></el-input>
				<el-button type="primary" data-con="el-icon-search">搜索</el-button>
			</div>
			<div class="table-body">
				<el-table
					ref="multipleTable"
					border
					class="table"
					header-cell-class-name="table-header"
					:data="tableData"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="55" align="center"></el-table-column>
					<el-table-column prop="id" label="ID" width="120" align="center">
						<template slot-scope="scope">{{ scope.row.id }}</template>
					</el-table-column>
					<el-table-column prop="name" label="用户名" width="120" align="center"></el-table-column>
					<el-table-column prop="sex" label="性别" width="120" align="center" show-overflow-tooltip>
                              <template slot-scope="scope">{{ scope.row.sex}}</template>
                         </el-table-column>
					<el-table-column prop="address" label="地址" align="center">
						<template slot-scope="scope">{{ scope.row.address }}</template>
					</el-table-column>
					<el-table-column prop="name" label="注册时间" width="120" align="center"></el-table-column>
					<el-table-column label="操作" width="180" align="center">
						<template slot-scope="scope">
							<el-button
								type="text"
								data-con="el-icon-edit"
								@click="handleEdit(scope.$index, scope.row)"
							>编辑</el-button>
							<el-button
								type="text"
								data-con="el-icon-delete"
								class="red"
								@click="handleDelete(scope.$index, scope.row)"
							>删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination class="paging" background layout="prev, pager, next" :total="1000"></el-pagination>
			</div>
		</div>
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
			text: "",
			value: "",
			tableData: [
				{     
                         id:"001",
                         sex:"男",
					data: "001",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
                    {     id:"001",
                         sex:"男",
					data: "002",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{    
                          id:"001",
                         sex:"男",
					data: "003",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{    
                          id:"001",
                         sex:"男",
                         data: "004",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
                           id:"001",
                         sex:"男",
					data: "005",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
                          id:"001",
                             sex:"男",
					data: "006",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
				{
                          id:"001",
                             sex:"男",
					data: "007",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄",
				},
			],
			multipleSelection: [],
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
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
	activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less"  scoped>
.uso {
	.uso-bar {
		margin: 10px 0;
	}
	.uso-table {
		padding: 30px;
		background: #ccc;
		.table-header {
			margin-bottom: 20px;
			.handle-input {
				width: 300px;
				display: datanline-block;
			}
			.handle-select {
				padding-right: 30px;
			}
			.select {
				width: 120px;
			}
			.mr10 {
				margin-right: 10px;
			}
          }
          .table-body{
               .paging{
            margin-top:20px;
               }
              
          }
	}
}
</style>