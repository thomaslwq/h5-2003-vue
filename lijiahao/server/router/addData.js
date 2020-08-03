const express = require('express');
const router = express.Router();
const dataCol = require('./db');

router.get('/addData',(req,res)=>{
    const data = new dataCol({
        title:req.query.title,
        img:req.query.img,
        price:req.query.price,
        inventory:req.query.inventory,
        id:req.query.id
    })
    data.save()
        .then(ok=>{
            console.log(ok);
            res.send({msg:'增加成功'})
        })
})