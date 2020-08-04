<template>
    <div class="home">
        <div class="top">
            <div class="content" style="background-color: rgba(196,189,231);">
                <i class="el-icon-s-shop"></i>
                <span>新增材料商</span>
            </div>
            <div class="content" style="background-color: rgba(226,213,111);">
                <i class="el-icon-star-on"></i>
                <span>新增精选特卖</span>
            </div>
        </div>
        <div class="bottom">
            <div class="btm btm-1">
                <i class="el-icon-s-custom"></i>
                <p>11047</p>
                <span>总用户人数</span>
            </div>
            <div class="btm btm-2">
                <p>40</p>
                <span>材料商</span>
            </div>
            <div class="btm btm-3">
                <p>503</p>
                <span>设计师</span>
            </div>
            <div class="btm btm-4">
                <p>10504</p>
                <span>C端用户</span>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="less" scoped>
.home{
    .top{
        background-color: #fff;
        min-width: 700px;
        padding: 80px 200px;
        display: flex;
        justify-content: space-between;
        .content{
            width: 300px;
            height: 100px;
            border-radius: 10px;
            
            display: flex;
            padding: 0 70px;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            i{
                color: white;
                font-size: 50px;
            }
            span{
                color: white;
            }
        }
    }
    .bottom{
        background-color: #fff;
        min-width: 700px;
        margin-top: 20px;
        height: 300px;
        // padding-bottom: 80px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .btm{
            border-left: 5px solid #ccc;
            box-sizing: border-box;
            padding-left: 15px;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            i{
                font-size: 50px;
                color: rgba(180,222,150);
            }
            p{
                font-size: 20px;
                color: rgba(180,222,150);
            }
            span{
                font-size: 14px;
            }
        }
            
    }
}
</style>