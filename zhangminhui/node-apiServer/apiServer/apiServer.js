const express = require("express");
const cors = require("cors");
const md5 = require("md5");
const moment = require("moment");
const token = require("jsonwebtoken");
const session = require("express-session");
const {
  connection,
  spell,
  SetID
} = require("./config");
const {
  userModel
} = require("./model/userModel");
const {
  productModel
} = require("./model/productModel");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

//设置跨域
app.use(cors());
//设置body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//设置session
app.use(
  session({
    secret: "Avada Kedavra",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

//路由拦截

//建立数据库连接
var myCon = mysql.createConnection(connection);
myCon.connect();

//#region 用户接口

/**
 * 用户-注册
 * @param {String} username 用户名
 * @param {String} password 密码
 * @param {String} telephone 手机号
 * @param {String} email 邮箱
 */
app.post("/api/user/regist", function (req, res, next) {
  var body = req.body;
  console.log(body);
  //拦截检测数据库是否存在相同的手机号
  var checkSql = "select * from users where telephone='" + body.telephone + "' and email='" + body.email + "'";
  myCon.query(checkSql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 404,
        content: 'link to sql failed' + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 402,
          content: 'already exists this user',
          results
        });
      } else {
        var tablename = "user";
        //md5加密
        body.password = md5(spell + md5(body.password) + spell);
        var userID = SetID(tablename);
        Object.keys(userModel).forEach((keys) => {
          if (body[keys]) {
            //用户权限为0
            if (body["username"] != "admin") {
              userModel["authority"] = "0";
            } else {
              userModel["authority"] = "1";
            }
            //设置createtime
            userModel.createTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
            //设置userID
            userModel.userID = userID;
            //设置性别
            if (body["sex"] == '0') {
              userModel["sex"] = 0;
            } else {
              userModel["sex"] = 1;
            }
            //设置初始头像
            userModel.headPortrait = "./images/user.jpg";
            userModel[keys] = body[keys];
          }
        });

        var sql = "select * from product where (select sortName from sort wherer sort.sortID=product.sortID)"

        var arrKeys = [];
        var arrValues = [];
        Object.keys(userModel).forEach((keys) => {
          if (userModel[keys]) {
            arrKeys.push(keys);
            arrValues.push(userModel[keys]);
          }
        });

        var sql =
          "insert into users(" +
          arrKeys.toString() +
          ") values('" +
          arrValues.join("','") +
          "')";
        console.log(sql);
        myCon.query(sql, function (error, results, fields) {
          if (error) {
            res.send({
              code: 400,
              content: "add user failed" + error
            });
          } else {
            res.send({
              code: 200,
              content: "add user success",
              results
            });
          }
        });
      }

    }
  })

});

/**
 * 用户-登陆
 * @param {String} logauthority
 * @param {String} password
 */
app.post("/api/user/login", function (req, res, next) {
  var body = req.body;
  console.log(body);
  body.password = md5(spell + md5(body.password) + spell);
  console.log(body.password);

  var sql =
    "select * from users where username='" +
    body.logauthority +
    "' or telephone='" +
    body.logauthority +
    "' or email='" +
    body.logauthority +
    "' and password='" +
    body.password +
    "'";
    console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "user login failed" + error
      });
    } else {
      if (results.length > 0) {
        //session

        res.send({
          code: 200,
          content: "user login success",
          results
        });
      } else {
        res.send({
          code: 401,
          content: "user does exist",
          results
        });
      }
    }
  });
});
/**
 * 用户-发表评论
 */
app.post('/api/user/comment', function (req, res, next) {
  var body = req.body;
})
/**
 * 修改用户信息
 * @param {String} userID
 * @param {Object} userModel
 */
app.post("/api/user/updateUser", function (req, res, next) {
  var body = req.body;

  Object.keys(userModel).forEach((keys) => {
    userModel[keys] = body[keys];
  });

  var arr = [];
  Object.keys(userModel).forEach((keys) => {
    if (userModel[keys]) {
      arr.push(keys + "='" + userModel[keys] + "'");
    }
  });
  var sql =
    "update users set " + arr.toString() + " where userID=" + body.userID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update user failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update user success",
        results
      });
    }
  });
});

/** 
 * 
 */

//#endregion

//#region 管理员接口
/**
 * 管理员-查看所有用户信息
 */
app.get("/api/admin/getAllUsers", function (req, res, next) {
  var sql = "select * from users";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find user failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find user success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find user success but no user exist",
          results,
        });
      }
    }
  });
});

/**
 * 管理员-删除用户信息
 * @param {String} userID
 */
app.get("/api/admin/deleteUser", function (req, res, next) {
  var body = req.body;
  var sql = "delete from users where userID=" + body.userID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete user failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete user success",
        results
      });
    }
  });
});
/**
 * 管理员-新增商品
 * @param {Object} productModel
 */
app.post('/api/admin/addProduct', function (req, res, next) {
  var body = req.body;
  var tablename = 'product';
  var productID = SetID(tablename);
  Object.keys(productModel).forEach((keys) => {
    //添加ID
    productModel['productID'] = productID;
    productModel[keys] = body[keys];
  });

  var arrKeys = [];
  var arrValues = [];
  Object.keys(productModel).forEach((keys) => {
    if (productModel[keys]) {
      arrKeys.push(keys);
      arrValues.push("'" + productModel[keys] + "'");
    }
  });
  console.log(arrKeys + arrValues);

});

/**
 * 管理员-修改商品
 * @param {String} productID
 * @param {Object} productModel
 */
app.get('/api/admin/updateProduct', function (req, res, next) {

});
//#endregion

//#region 商品接口


//#endregion

//#region 管理接口
/**
 * 颜色管理-添加颜色
 * @param {String} colorValue 颜色值("#ffffff")
 * @param {string} colorName
 */
app.get("/api/admin/addColor", function (req, res, next) {
  var body = req.body;
  var tablename = "color";
  var colorID = SetID(tablename);
  var sql =
    "insert into " +
    tablename +
    " values('" +
    colorID +
    "','" +
    body.colorName +
    "','" +
    body.colorValue +
    "')";
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "add color failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "add color success",
        results
      });
    }
  });
});

/**
 * 颜色管理-修改颜色
 * @param {String} colorID
 * @param {String} colorValue
 * @param {string} colorName
 */
app.get("/api/admin/updateColor", function (req, res, next) {
  var body = req.body;
  var sql =
    "update color set colorName='" +
    body.colorName +
    "' , colorValue='" +
    body.colorValue +
    "' where colorID=" +
    body.colorID;
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update color failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update color success",
        results
      });
    }
  });
});

/**
 * 颜色管理-删除颜色
 * @param {String} colorID
 */
app.get("/api/admin/deleteColor", function (req, res, next) {
  var body = req.body;
  var sql = "delete from color where colorID='" + body.colorID + "'";
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete clolor failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete color success",
        results
      });
    }
  });
});

/**
 * 颜色管理-查看颜色
 */
app.get("/api/admin/getAllColor", function (req, res, next) {
  var sql = "select * from color";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find color failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find color success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find color success but no list"
        });
      }
    }
  });
});

/**
 * 分类管理-增加分类
 * @param {String} sortName
 * @param {Number} fitnum 适用人数
 * @param {string} shape 形状
 */
app.get("/api/admin/addSort", function (req, res, next) {
  var body = req.body;
  var tablename = "sort";
  var sortID = SetID(tablename);
  var sql =
    "insert into " +
    tablename +
    " values('" +
    sortID +
    "','" +
    body.sortName +
    "','" +
    body.fitnum +
    "','" +
    body.shape +
    "')";
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "add sort failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "add sort success",
        results
      });
    }
  });
});

/**
 * 分类管理-修改分类
 * @param {String} sortName
 * @param {Number} fitnum
 * @param {string} shape
 * @param {String} sortID
 */
app.get("/api/admin/updateSort", function (req, res, next) {
  var body = req.body;
  var sql =
    "update sort set shape='" +
    body.shape +
    "',sortName='" +
    body.sortName +
    "',fitnum=" +
    body.fitnum +
    " where sortID=" +
    body.sortID;
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update sort failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update sort success",
        results
      });
    }
  });
});
/**
 * 分类管理-删除分类
 * @param {String} sortID
 */
app.get("/api/admin/deleteSort", function (req, res, body) {
  var body = req.body;
  var sql = "delete from sort where sortID=" + body.sortID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete sort failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete sort success",
        results
      });
    }
  });
});

/**
 * 分类管理-查看分类
 */
app.get("/api/admin/getAllSort", function (req, res, next) {
  var sql = "select * from sort";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find sort failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find sort success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find sort success but no list"
        });
      }
    }
  });
});

/**
 * 规格管理-增加规格
 * @param {String} specificationValue 规格值
 */
app.get("/api/admin/addSpecification", function (req, res, next) {
  var body = req.body;
  var tablename = "specification";
  var specificationID = SetID(tablename);
  var sql =
    "insert into " +
    tablename +
    " values('" +
    specificationID +
    "','" +
    body.specificationValue +
    "')";
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "add specification failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "add specification success",
        results
      });
    }
  });
});

/**
 * 规格管理-修改规格
 * @param {String} specificationValue
 * @param {String} specificationID
 */
app.get("/api/admin/updateSpecification", function (req, res, next) {
  var body = req.body;
  var sql =
    "update specification set specificationValue='" +
    body.specificationValue +
    "' where specificationID=" +
    body.specificationID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update specification failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update specification success",
        results
      });
    }
  });
});

/**
 * 规格管理-删除规格
 * @param {String} specificationID
 */
app.get("/api/admin/deleteSpecification", function (req, res, next) {
  var body = req.body;
  var sql = "delete from specification where id=" + body.specificationID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete specification failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete specification success",
        results
      });
    }
  });
});

/**
 * 规格管理-查看规格
 */
app.get("/api/admin/getAllSpecification", function (req, res, next) {
  var sql = "select * from specification";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find specification failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find specification success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find specification success but no list",
        });
      }
    }
  });
});

/**
 * 系列管理-增加系列
 *@param {String} seriesName
 *@param {String} bandName
 *@param {String} style
 */
app.get("/api/admin/addSeries", function (req, res, next) {
  var body = req.body;
  console.log(body);

  var tablename = "series";
  var seriesID = SetID(tablename);
  var sql =
    "insert into " +
    tablename +
    " values('" +
    seriesID +
    "','" +
    body.seriesName +
    "','" +
    body.bandName +
    "','" +
    body.style +
    "')";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "add Series failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "add series success",
        results
      });
    }
  });
});

/**
 * 系列管理-修改系列
 *@param {String} seriesName
 *@param {String} bandName
 *@param {String} style
 *@param {String} seriesID
 */
app.get("/api/admin/updateSeries", function (req, res, next) {
  var body = req.body;
  var sql =
    "update series set seriesName='" +
    body.seriesName +
    "',bandName='" +
    body.bandName +
    "',style='" +
    body.style +
    "' where seriesID=" +
    body.seriesID;
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update specification failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update specification success",
        results
      });
    }
  });
});

/**
 * 系列管理-删除系列
 *@param {String} seriesID
 */
app.get("/api/admin/deleteSeries", function (req, res, next) {
  var body = req.body;
  var sql = "delete from series where seriesID= " + body.seriesID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete series failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete series success",
        results
      });
    }
  });
});

/**
 * 系列管理-查看系列
 */
app.get("/api/admin/getAllSeries", function (req, res, next) {
  var sql = "select * from specification";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find specification failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find specification success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find specification success but no list",
        });
      }
    }
  });
});

/**
 * 材质管理-增加材质
 * @param {String} materialName
 * @param {String} materialInstructions
 */
app.get("/api/admin/addMaterial", function (req, res, next) {
  var body = req.body;
  var tablename = "material";
  var materialID = SetID(tablename);
  var sql =
    "insert into " +
    tablename +
    " values('" +
    materialID +
    "','" +
    body.materialName +
    "','" +
    body.materialInstructions +
    "')";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "add material failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "add material success",
        results
      });
    }
  });
});

/**
 * 材质管理-修改材质
 * @param {String} materialName
 * @param {String} materialInstructions
 * @param {String} materialID
 */
app.get("/api/admin/updateMaterial", function (req, res, next) {
  var body = req.body;
  var sql =
    "update material set materialName='" +
    body.materialName +
    "',materialInstructions='" +
    body.materialInstructions +
    "' where materialID=" +
    body.materialID;
  console.log(sql);

  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "update material failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update material success",
        results
      });
    }
  });
});

/**
 * 材质管理-删除材质
 *@param {String} materialID
 */
app.get("/api/admin/deleteMaterial", function (req, res, next) {
  var body = req.body;
  var sql = "delete from material where materialID= " + body.materialID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete material failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete material success",
        results
      });
    }
  });
});

/**
 * 材质管理-查看材质
 */
app.get("/api/admin/getAllMaterial", function (req, res, next) {
  var sql = "select * from material";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find material failed" + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find material success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find material success but no list",
        });
      }
    }
  });
});

//#endregion

app.listen(10500);