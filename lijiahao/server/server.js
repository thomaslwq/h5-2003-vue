const express = require('express');
const server = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/backstage', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    // 添加数据
    require('./add/product_add');  // 添加商品列表数据

    // 处理数据请求
    server.use(express.json());
    server.use(express.urlencoded());

    // API请求
    server.use('/api/product', require('./router/productRouter'));

    server.use('/images', express.static('./images'));

    // 响应404
    server.use((req, res, next) => {
        res.status(404);
    });

    // 错误处理
    server.use((err, req, res, next) => {
        res.status(500)
    });
    server.listen(3000);
});
