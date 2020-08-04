const product = require('../model/product');
module.exports.findProduct = async (page, limit) => {
    limit = Number(limit);
    const count = await product.countDocuments();
    const res = await product.find({},{_id: false, __v: false}).skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};

module.exports.changeProductStatus = async (product_num, status) => {
    const res = await product.updateOne({
        ProductNum: product_num
    }, {
        Status: status
    });
    return {
        matched: res.n,
        Modified: res.nModified
    };
};

module.exports.modifiedProduct = async (product_num, product_name, original_price, present_price) => {
    const res = await product.updateOne({
        ProductNum: product_num
    }, {
        ProductName: product_name,
        OriginalPrice: original_price,
        PresentPrice: present_price
    });
    return {
        matched: res.n,
        Modified: res.nModified
    };
};

module.exports.deleteProduct = async(product_num) => {
    const res = await product.remove({
        ProductNum: product_num
    });
    return {
        deletedCount: res.deletedCount
    }
};