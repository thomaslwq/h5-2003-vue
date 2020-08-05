<!--  -->
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 分类管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="handleDeleteAll"
                >批量删除</el-button>

                <el-button type="primary" icon="el-icon-plus" @click="handleAddClick">添加</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" align="center"></el-table-column>
                <el-table-column prop="sortName" label="分类名"></el-table-column>
                <el-table-column prop="fitnum" label="适用人群"></el-table-column>
                <el-table-column prop="shape" label="形状"></el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index,scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="total, prev, pager, next"></el-pagination>
            </div>
        </div>

        <el-dialog title="添加" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="分类名">
                    <el-input v-model="form.sortName"></el-input>
                </el-form-item>
                <el-form-item label="适用人群">
                   <el-input v-model="form.fitnum"></el-input>
                </el-form-item>
                <el-form-item label="形状">
                   <el-input v-model="form.shape"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
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
            //el-table绑定的数据
            tableData: [],
            //调用弹框
            isAddNew: true,
            editVisible: false,
            //弹框中绑定的数据
            form: {},
            //删除全选
            delList: [],
            multipleSelection: [],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getData() {
            this.$axios
                .get('/api/admin/getAllSort')
                .then((res) => {
                    if (res.results.length > 0) {
                        this.tableData = res.results;

                        console.log(res.results);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        handleAddClick: function () {
            this.editVisible = true;
            this.isAddNew = true;
        },
        confirm: function () {
            this.editVisible = false;
            if (this.isAddNew) {
                this.$axios
                    .post('api/admin/addSort', this.$qs.stringify(this.form))
                    .then((res) => {
                        console.log(res);
                        if (res.code == 200) {
                            this.$message('添加成功');
                            this.getData();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                this.$axios
                    .post('api/admin/updateSort', this.$qs.stringify(this.form))
                    .then((res) => {
                        console.log(res);
                        if (res.code == 200) {
                            this.$message('更新信息成功');
                        }
                    })
                    .catch((err) => {
                    });
            }
        },
        //编辑
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
            this.isAddNew = false;
        },
        handleDelete(index, row) {
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    console.log(row.sortID);
                    this.$axios
                        .post('api/admin/deleteSort', this.$qs.stringify({ sortID: row.sortID}))
                        .then((res) => {
                            console.log(res);
                            if (res.code == 200) {
                                this.$message('删除成功');
                                this.tableData.splice(index, 1);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })
                .catch(() => {});
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleDeleteAll: function () {
            const length = this.multipleSelection.length;
            if (length <= 0) {
                this.$message('还没选择');
                return;
            } else {
                this.$confirm('是否确认删除？')
                    .then(() => {
                        let str = '';
                        this.delList = this.delList.concat(this.multipleSelection);
                        for (let i = 0; i < length; i++) {
                            str += this.multipleSelection[i].sortID + ',';
                        }

                        str = str.substr(0, str.length - 1);
                        console.log(str);
                        this.$axios.post('api/admin/deleteAllSorts', this.$qs.stringify({ sortIDs: str })).then((res) => {
                            if (res.code == 200) {
                                this.$message('批量删除成功');
                                this.multipleSelection = [];
                                this.getData();
                            }
                        });
                    })
                    .catch(() => {});
            }
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getData();
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.getData();
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
span {
    display: block;
    width: 200px;
    height: 50px;
}
</style>