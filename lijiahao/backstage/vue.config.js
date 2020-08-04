module.exports = {
<<<<<<< HEAD
    lintOnSave:false,
    publicPath:"./",
    productionSourceMap:false // 默认不生成 sourcemap 的文件 就是源代码文件
=======
    devServer:{
        proxy:{
            'api': {
                target:'http://localhost:3000/api/product',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
>>>>>>> 28abef286ec453b619d257ea84747b1d606c0db5
}