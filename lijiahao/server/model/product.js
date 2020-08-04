const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    ProductNum: Number,
    ProductName: String,
    OriginalPrice: Number,
    PresentPrice: Number,
    Region: String,
    JoiningTime: Number,
    AuditStatus: {type: Number, default: 1},
    Status: {type: Number, default: 1}
});
module.exports = mongoose.model('product', schema);