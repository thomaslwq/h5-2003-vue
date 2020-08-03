const express = require("express");
const router = express.Router();
const dataCol = require("./db");
router.get("/goodsList", (req, res) => {
    dataCol.find()
        .then((ok) => {
            console.log(ok);
            res.send({ msg: "数据获取成功", data: ok })
        })
        .catch((err) => {
            console.log(err);
            res.send({ msg: "数据获取失败", data: err })
        })
})
module.exports = router