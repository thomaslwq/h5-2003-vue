const express = require('express');
const router = express.Router();
const dataCol = require('./db');

router.post('/modifyData',(req,res)=>{
    const {id, } = req.body;
    dataCol.updateOne({'id':req.query.id}, {})
        .then(ok=>{
            console.log(ok)
            res.send({msg:'修改成功',data:ok})
        })

})