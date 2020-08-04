<!--  -->
<template>
	<div class="page-homePage">
		<div class="page-homePage-top">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">当前位置:{{title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="page-homePage-middle">
			<div class="homePage-middle">
				<el-button class="homePage-middle-left" type="primary">
					<i class="el-icon-takeaway-box"></i>新增材料商
				</el-button>
				<el-button class="homePage-middle-right" type="primary">
					<i class="el-icon-position"></i>新增精选特卖
				</el-button>
			</div>
		</div>
		<div class="page-homePage-bottom">
     <div class="homePage-bottom clearfix">
       <ul>
         <li>
          <i class="el-icon-user-solid"></i>
          <div class="homePage-bottom-btn">
          <p>11,047</p>
           <p>总用户人数</p>
           </div>
         </li>
             <li>
           <div class="homePage-bottom-btn">
          <p>11,047</p>
           <p>总用户人数</p>
           </div>
         </li>
             <li>
            <div class="homePage-bottom-btn">
          <p>11,047</p>
           <p>总用户人数</p>
           </div>
         </li>
             <li>
            <div class="homePage-bottom-btn">
          <p>11,047</p>
           <p>总用户人数</p>
           </div>
         </li>
         </ul>
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
			title: "首页",
		};
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
};
</script>
<style lang="less"  scoped>
.page-homePage {
	.page-homePage-top {
    color: "#333";
    height:31px;
	}
	.page-homePage-middle {
		width: 100%;
		height: 257px;
		display: flex;
		align-items: center;
		.homePage-middle {
			width: 585px;
			height: 218px;
			display: flex;
			justify-content: space-around;
			margin: 0 auto;
			align-items: center;

			.homePage-middle-left,
			.homePage-middle-right {
				width: 255px;
				height: 85px;
				border: 50px;
			}
			.homePage-middle-left {
				background: #c3bde7;
				font-size: 25px;
				.el-icon-takeaway-box {
					background: #ccc;
				}
			}
			.homePage-middle-right {
				background: #e3d56e;
				font-size: 25px;
			}
		}
  }
  .page-homePage-bottom{
    width:100%;
    height:241px;
    background: #ccc;
    margin-bottom: 34px;
    margin-top:17px;
    display: flex;
    align-items: center;
    justify-content: center;
     .homePage-bottom{
       width:702px;
       height:104px;
    color:red;
       ul{
         height:104px;
         display: flex;
         justify-content: space-between;
         background: green;
         li{
         text-align: center;
         .homePage-bottom-btn{
        margin-top: 20px;
         }
         }
       }
     }
  }
 .clearfly：after{content:".";
  display:block;
   clear:both; 
   height:0; 
   overflow:hidden;
    visibility:hidden; }
}
</style>