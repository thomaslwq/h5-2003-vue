const express = require("express");
const app = express();
const listRouter = require("./router/goodsList");
const xqRouter = require("./router/details");
const delDataRouter = require('./router/deleteData');
const addDataRouter = require('./router/addData');
const modifyData = require('./router/modifyData')
app.use("/list", listRouter)
app.use("/details", xqRouter)
app.use('/delete',delDataRouter)
app.use('/add',addDataRouter)
app.use('/modify',modifyData)
app.listen(3000)