const express = require('express');
const router = express.Router();
const dataCol = require('./db');

router.get('/modifyData',(req,res)=>{
    dataCol.updateOne({'id':req.query.id})
        .then(ok=>{
            console.log(ok)
            res.send({msg:'修改成功',data:ok})
        })

})