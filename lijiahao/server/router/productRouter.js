const { Router } = require('express');
const router = Router();
const url = require('url');
const handle = require('../handle/product_handle');

router.get('/list', (req, res) => {
    const {query} = url.parse(req.url,true);
    const page = query['_page'] || 1;
    const limit = query['_limit'] || 10;
    handle.findProduct(page, limit).then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            page: Number(page),
            length: Number(limit),
            count: data.count,
            data: data.res,
        })
    })
});

router.post('/changeStatus', (req, res) => {
    const {product_num, status} =  req.body;
    if (!product_num || !status) {
        res.json({
            code: 400,
            msg: '缺少必传参数product_num或status'
        })
    }
    handle.changeProductStatus(product_num, status).then(data => {
        console.log(data);
        if (data.Modified) {
            res.json({
                code: 200,
                msg: '修改状态成功',
                ...data
            })
        } else {
            res.json({
                code: 200,
                msg: '修改状态失败',
                ...data
            })
        }
    })
});

router.post('/modifiedProduct', (req, res) => {
    const {product_num, product_name, original_price, present_price} =  req.body;
    if (!product_num || !product_name || !original_price || !present_price) {
        res.json({
            code: 400,
            msg: '缺少必传参数'
        })
    }
    handle.modifiedProduct(product_num, product_name, original_price, present_price).then(data => {
        console.log(data);
        if (data.Modified) {
            res.json({
                code: 200,
                msg: '数据修改成功',
                ...data
            })
        } else {
            res.json({
                code: 400,
                msg: '数据修改失败',
                ...data
            })
        }
    })
});

router.post('/deleteProduct', (req, res) => {
    const {product_num} =  req.body;
    handle.deleteProduct(product_num).then(data => {
        if (data.deletedCount) {
            res.json({
                code: 200,
                msg: '数据删除成功',
                ...data
            })
        } else {
            res.json({
                code: 400,
                msg: '数据删除失败',
                ...data
            })
        }
    })
});

module.exports = router;