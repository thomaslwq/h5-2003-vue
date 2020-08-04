<template>
<<<<<<< HEAD
	<el-container>
		<el-header>
			<h1>子然电商后台管理系统</h1>
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
						<!--                        <span slot="title">系统首页</span>-->
						<router-link to="index">
							<i class="el-icon-s-tools"></i>系统首页
						</router-link>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-goods"></i>
							<span>商品管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">
								<router-link to="goodsList">商品列表</router-link>
							</el-menu-item>
							<el-menu-item index="2-2">
								<router-link to>选项1</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-sell"></i>
							<span>交易管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">
								<router-link to>选项1</router-link>
							</el-menu-item>
							<el-menu-item index="3-2">
								<router-link to>选项1</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>活动管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">
								<router-link to>选项1</router-link>
							</el-menu-item>
							<el-menu-item index="4-2">
								<router-link to>选项1</router-link>
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
								<router-link to='/userinfo'>用户管理</router-link>
							</el-menu-item>
							<el-menu-item index="5-2">
								<router-link to>选项1</router-link>
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
=======
    <el-container>
        <el-header>
            <h1>子然电商后台管理系统</h1>
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

<!--                        <span slot="title">系统首页</span>-->
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
                                <router-link to="caretaker">管理员</router-link>
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
>>>>>>> 28abef286ec453b619d257ea84747b1d606c0db5
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
a {
	display: block;
	width: 100%;
}
.app-el-container {
	height: 100vh;
}
.el-header,
.el-footer {
	background-color: rgb(67, 142, 185);
	color: #333;
	/*text-align: center;*/
	line-height: 60px;
	h1 {
		color: #fff;
	}
}

.el-aside {
	background-color: rgb(84, 92, 100);
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #e9eef3;
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