<!--  -->
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 商品管理
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
                <el-table-column prop="productName" label="商品名称"></el-table-column>
                <el-table-column prop="productCode" label="商品编号"></el-table-column>
                <el-table-column prop="amount" label="库存数量"></el-table-column>
                <el-table-column prop="salesNum" label="销量"></el-table-column>
                <el-table-column prop="discountNum" label="折扣信息"></el-table-column>
                <el-table-column prop="price" label="单价"></el-table-column>
                <el-table-column prop="discountPirce" label="折后价"></el-table-column>
                <el-table-column prop="content" label="简介"></el-table-column>
                <el-table-column prop="colorID" label="颜色"></el-table-column>
                <el-table-column prop="materialID" label="材质"></el-table-column>
                <el-table-column prop="specificationID" label="规格"></el-table-column>
                <el-table-column prop="seriesID" label="系列"></el-table-column>
                <el-table-column prop="sortID" label="分类"></el-table-column>
                <el-table-column prop="isNewProduct" label="是否新品"></el-table-column>
                <el-table-column prop="isDiscount" label="是否打折"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
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
                <el-form-item label="商品名称">
                    <el-input v-model="form.productName"></el-input>
                </el-form-item>
                <el-form-item label="商品编号">
                    <el-input v-model="form.productCode"></el-input>
                </el-form-item>
                <el-form-item label="库存数量">
                    <el-input v-model="form.amount"></el-input>
                </el-form-item>
                <el-form-item label="销量">
                    <el-input v-model="form.salesNum"></el-input>
                </el-form-item>
                <el-form-item label="折扣信息">
                    <el-input v-model="form.discountNum"></el-input>
                </el-form-item>
                <el-form-item label="单价">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="折后价">
                    <el-input v-model="form.discountPirce"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="颜色">
                    <el-select v-model="form.colorID" placeholder="请选择">
                        <el-option
                            v-for="(color, index) in colors"
                            :key="color.colorID"
                            :label="color.colorName"
                            :value="color.colorID"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="材质">
                    <el-select v-model="form.materialID" placeholder="请选择">
                        <el-option
                            v-for="(material, index) in materials"
                            :key="material.materialID"
                            :label="material.materialName"
                            :value="material.materialID"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="规格">
                    <el-select v-model="form.specificationID" placeholder="请选择">
                        <el-option
                            v-for="(specification, index) in specifications"
                            :key="specification.specificationID"
                            :label="specification.specificationValue"
                            :value="specification.specificationID"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="系列">
                    <el-select v-model="form.seriesID" placeholder="请选择">
                        <el-option
                            v-for="(serial, index) in series"
                            :key="serial.seriesID"
                            :label="serial.seriesName"
                            :value="serial.seriesID"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分类">
                   <el-select v-model="form.sortID" placeholder="请选择">
                        <el-option
                            v-for="(sort, index) in sorts"
                            :key="sort.sortID"
                            :label="sort.sortName"
                            :value="sort.sortID"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否新品">
                    <el-radio-group v-model="form.isNewProduct">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                </el-form-item>
                <el-form-item label="是否打折">
                    <el-radio-group v-model="form.isDiscount">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUserInfo">确 定</el-button>
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

            //各种参数表
            colors: [],
            sorts: [],
            materials: [],
            specifications: [],
            series: [],
            sorts:[]
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
                .get('/api/admin/getAllProduct')
                .then((res) => {
                    if (res.results.length > 0) {
                        this.tableData = res.results;
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        handleAddClick: function () {
            this.editVisible = true;
            this.isAddNew = true;
            let requestArr = [
                this.$axios.get('api/admin/getAllColor'),
                this.$axios.get('api/admin/getAllSort'),
                this.$axios.get('api/admin/getAllMaterial'),
                this.$axios.get('api/admin/getAllSpecification'),
                this.$axios.get('api/admin/getAllSeries'),
                this.$axios.get('api/admin/getAllSort')
            ];
            this.$axios
                .all(requestArr)
                .then(
                    this.$axios.spread((resClolr, resSort, resMaterial, resSpecification, resSeries,resSotr) => {
                        this.colors = resClolr.results;
                        this.sorts = resSort.results;
                        this.materials = resMaterial.results;
                        this.specifications = resSpecification.results;
                        this.series = resSeries.results;
                        this.sorts=resSort.results;
                    })
                )
                .catch((err) => {});
        },
        addUserInfo: function () {
            this.editVisible = false;
            Object.keys(this.form).forEach((keys) => {
                if (keys == 'isDiscount') {
                    this.form['isDiscount'] = this.form['isDiscount'] == '是' ? 1 : 0;
                }
                if (keys == 'isNewProduct') {
                    this.form['isNewProduct'] = this.form['isNewProduct'] == '是' ? 1 : 0;
                }
            });
            console.log(this.form);
            if (this.isAddNew) {
                this.$axios
                    .post('api/admin/addProduct', this.$qs.stringify(this.form))
                    .then((res) => {
                        console.log(res);
                        if (res.code==200) {
                            this.$message('添加成功');
                            this.getData();
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                this.$axios
                    .post('api/admin/updateProduct', this.$qs.stringify(this.form))
                    .then((res) => {
                        console.log(res);
                        if (res.code == 200) {
                            this.$message('更新信息成功');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
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
                    console.log(row.productID);
                    this.$axios
                        .post('api/admin/deleteProduct', this.$qs.stringify({ productID: row.productID }))
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
                this.$message('还没选择商品');
                return;
            } else {
                this.$confirm('是否确认删除？')
                    .then(() => {
                        let str = '';
                        this.delList = this.delList.concat(this.multipleSelection);
                        for (let i = 0; i < length; i++) {
                            str += this.multipleSelection[i].productID + ',';
                        }

                        str = str.substr(0, str.length - 1);
                        console.log(str);
                        this.$axios.post('api/admin/deleteAllProducts', this.$qs.stringify({ productID: str })).then((res) => {
                            if (res.code == 200) {
                                this.$message('批量删除成功');
                                this.multipleSelection = [];
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
        //获取颜色值
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
</style>