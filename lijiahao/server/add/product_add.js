const product = require('../model/product');
const Mock = require('mockjs');
const Random = Mock.Random;

const data = Mock.mock({
    'product|50': [{
        'ProductNum|+1': 45631,
        ProductName: '@csentence(15, 25)',
        'OriginalPrice|5000-6000': 0,
        'PresentPrice|4000-5000': 0,
        'Region|1': [
            '法国',
            '中国',
            '美国',
            '日本'
        ],
        JoiningTime: new Date().getTime()
    }]
});
data.product.forEach(item => {
    new product(item).save();
});



