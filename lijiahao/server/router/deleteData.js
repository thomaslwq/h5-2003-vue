const express = require('express');
const router = express.Router();
const dataCol = require('./db');

router.get('/delete',(req,res)=>{
    dataCol.deleteMany({'id':req.query.id})
        .then(ok=>{
            console.log(ok)
            res.send({msg:'删除成功',data:ok})
        })
        .catch(err=>{
            res.send({msg:'删除失败',data:err})
        })
})
module.exports = router