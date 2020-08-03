<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container class="app-el-container">
            <el-aside width="200px">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                       >
                    <el-menu-item index="1">
                        <i class="el-icon-s-tools"></i>
                        <span slot="title">系统首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-sell"></i>
                            <span>交易管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>活动管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="4-1">选项1</el-menu-item>
                            <el-menu-item index="4-2">选项2</el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-message-solid"></i>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="5-1">选项1</el-menu-item>
                            <el-menu-item index="5-2">选项2</el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>Main的撒大大大法国</el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};

</script>
<style lang="less" scoped>

    .app-el-container{
        height: 100vh;
    }
    .el-header, .el-footer {
        background-color: rgb(67,142,185);
        color: #333;
        /*text-align: center;*/
        line-height: 60px;
    }

    .el-aside {
        background-color: rgb(84,92,100);
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>