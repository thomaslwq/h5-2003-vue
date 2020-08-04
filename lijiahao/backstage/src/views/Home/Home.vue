<template>
    <el-container>
        <el-header>
            <h1>子然电商后台管理系统</h1>
            <div class="el-login-username">
                <el-dropdown >
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>切换账户</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="demo-type" >
                <el-avatar src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=416160078,4249346239&fm=5"></el-avatar>
            </div>
        </el-header>
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
                        <router-link to="index"> <i class="el-icon-s-tools"></i>系统首页</router-link>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-goods"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="goodslist">商品信息</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link to="manage">商品活动</router-link>
                            </el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-sell"></i>
                            <span>交易管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="2-1">
                                <router-link to="order" >商品订单</router-link>
                            </el-menu-item>


                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商家管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="4-1">
                                <router-link to="information">商家信息</router-link>
                            </el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-message-solid"></i>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group>

                            <el-menu-item index="5-1">
                                <router-link to="user">个人信息</router-link>
                            </el-menu-item>
                            <el-menu-item index="5-2">
                                <router-link to="caretaker">用户管理</router-link>
                            </el-menu-item>

                        </el-menu-item-group>

                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
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
            },

        },

    };

</script>
<style lang="less" scoped>
    .demo-type {
        float: right;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .el-login-username {
        text-align: right;
        float: right;
        margin: 0 15px;
        .el-dropdown {
            .el-dropdown-link {
                cursor: pointer;
                color: #fff;
            }
            .el-icon-arrow-down {
                font-size: 12px;
            }
        }
    }
    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
        float:right
    }
    .btn-bell,
    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        margin-top: 6px;
    }
    .el-icon-rank:before {
        color: #fff;
    }
    a{
        display: block;
        width: 100%;
    }
    .app-el-container{
        height: 100vh;
    }
    .el-header, .el-footer {
        background-color: rgb(67,142,185);
        color: #333;
        /*text-align: center;*/
        line-height: 60px;
        h1{
            color: #fff;
            float: left;
        }
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