var mongooes = require("mongoose");
mongooes.connect("mongodb://localhost:27017/houtai");
var db = mongooes.connection;
db.on("err", console.error.bind(console, "数据库连接失败"))
db.once("open", () => {
    console.log("数据库连接成功")
})

var schema = new mongooes.Schema({
    img: String,
    title: String,
    inventory: Number,
    price: Number,
    id: Number
})

var dataCol = mongooes.model("goods", schema);
module.exports = dataCol;