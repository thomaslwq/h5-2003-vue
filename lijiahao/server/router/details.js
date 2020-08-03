const express = require("express");
const router = express.Router();
const dataCol = require("./db");
router.get("/details", (req, res) => {
    dataCol.find({ "id": req.query.id })
        .then((ok) => {
            // console.log(ok);
            console.log(req.query.id)
            res.send({ msg: "数据获取成功", data: ok })
        })
        .catch((err) => {
            res.send({ msg: "数据获取失败", data: err })
        })
})
module.exports = router