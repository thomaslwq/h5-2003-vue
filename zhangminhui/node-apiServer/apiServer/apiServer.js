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
var multer = require('multer')

const app = express();


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
app.use(upload.single('file'));
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
        console.log(body);
        body.password = md5(spell + md5(body.password) + spell);
        var userID = SetID(tablename);
        Object.keys(userModel).forEach((keys) => {
          if (body[keys]) {
            //用户权限为0
            if (body["username"] != "admin") {
              body["authority"] = "0";
            } else {
              body["authority"] = "1";
            }
            //设置createtime
            userModel.createTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
            //设置userID
            userModel.userID = userID;
            //设置性别
            if (body["sex"] == '0') {
              body["sex"] = "0";
            } else {
              body["sex"] = "1";
            }
            //设置初始头像
            userModel.headPortrait = "../assets/images/user.jpg";
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
 * @param {String} username
 * @param {String} password
 */
app.post("/api/user/login", function (req, res, next) {
  var body = req.body;
  console.log(body);
  body.password = md5(spell + md5(body.password) + spell);
  console.log(body.password);

  var sql =
    "select * from users where username='" +
    body.username +
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
 * 用户-根据用户ID获取用户信息
 * @param {String}userID
 */
app.post('/api/user/getUserInfoByID', function (req, res, next) {
  var body = req.body;
  var sql = "select * from users where userID=" + body.userID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'success',
        results
      });
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


//#endregion

//#region 管理员接口
/**
 * 管理员-查看所有用户信息
 */
app.get("/api/admin/getAllUsers", function (req, res, next) {
  var sql = "select * from users order by userName desc";
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
app.post("/api/admin/deleteUser", function (req, res, next) {
  var body = req.body;
  var sql = "delete from users where userID=" + body.userID;
  console.log(sql);
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
 * 管理员-批量删除
 * @param {String} userIDs
 */
app.post('/api/admin/deleteAllUsers', function (req, res, next) {
  var body = req.body;
  var sql = "delete from users where userID in (" + body.userIDs + ")";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'delete success',
        results
      });
    }
  })
});
/**
 * 管理员-新增商品
 * @param {Object} productModel
 */
app.post('/api/admin/addProduct', function (req, res, next) {
  var body = req.body;
  console.log(body);
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
    //设置createtime
    productModel.createTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    if (productModel[keys]) {
      arrKeys.push(keys);
      arrValues.push(productModel[keys]);
    }
  });
  var sql =
    "insert into product(" +
    arrKeys.toString() +
    ") values('" +
    arrValues.join("','") +
    "')";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'insert product success',
        results
      });
    }
  })
});

/**
 * 管理员-修改商品信息
 * @param {String} productID
 * @param {Object} productModel
 */
app.post("/api/admin/updateProduct", function (req, res, next) {
  var body = req.body;
  console.log(body);
  Object.keys(productModel).forEach((keys) => {
    userModel[keys] = body[keys];
  });

  var arr = [];
  Object.keys(productModel).forEach((keys) => {
    if (productModel[keys]) {
      arr.push(keys + "='" + productModel[keys] + "'");
    }
  });
  var sql =
    "update product set " + arr.toString() + " where productID=" + body.productID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "connect failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "update product success",
        results
      });
    }
  });
});

/**
 * 管理员-查看全部商品
 */
app.get('/api/admin/getAllProduct', function (req, res, next) {
  var sql = "select * from product order by productName desc";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: 'find product success',
          results
        });
      } else {
        res.send({
          code: 404,
          content: 'connect success but no exist product',
          results
        });
      }
    }
  })
});

/**
 * 管理员-删除商品
 * @param {String} productID
 */
app.post("/api/admin/deleteProduct", function (req, res, next) {
  var body = req.body;
  console.log(body);
  var sql = "delete from product where productID=" + body.productID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "connect failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete product success",
        results
      });
    }
  });
});


/**
 * 管理员-批量删除商品
 *  @param {String} productIDs
 */
app.post("/api/admin/deleteAllProducts", function (req, res, next) {
  var body = req.body;
  var sql = "delete from product where productID in (" + body.productIDs + ")";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "connect failed" + error
      });
    } else {
      res.send({
        code: 200,
        content: "delete product success",
        results
      });
    }
  });
});

/**
 * 管理员-上传商品图片
 */
app.post('/api/admin/uploadProductPicture', function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  var body=req.body;
  var file = req.file;
  if(body.productID!="undefined"){
    filepath="uploads/"+file.filename
    var sql="update product set imgurl='/"+filepath+"' where productID="+body.productID;
    console.log(sql);
    myCon.query(sql,function(error,results,fields){
    if(error){
    res.send({code:400,content:'connect failed'+error});
    }else{
    res.send({code:200,content:'upload success',results});
    }
    })
  }

});
//#endregion

//#region 商品接口
/**
 * 商品-获取销量前8商品
 */
app.get('/api/product/getTopProduct', function (req, res, next) {
  var sql = "select * from product order by salesNum desc limit 0,8";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  })

});

/**
 * 商品-根据分类获取销量前4商品
 * @param {String} seriesID
 */
app.post('/api/product/getTopProductBySeries', function (req, res, next) {
  var sql = "select * from product where seriesID=" + seriesID + " ORDER BY salesNum desc limit 0,4";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});

/**
 * 商品-获取前8新设计商品
 */
app.get('/api/product/getNewDesignProduct', function (req, res, next) {
  var sql = "select * from product where isNewProduct=1 order by createTime desc limit 0,8";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});
/**
 * 商品-获取分类前4新设计商品
 */
app.post('/api/product/getNewDesignProductBySeries', function (req, res, next) {
  var body = req.body;
  var sql = "select * from product where isNewProduct=1 and seriesID=" + body.SeriesID + " order by createTime desc limit 0,4";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});
/**
 * 商品-通过商品id显示商品详情
 * @param {String} productID
 */
app.post('/api/product/getProductInfoByID', function (req, res, next) {
  var body = req.body;
  var sql = "select product.*,color.colorName,color.colorValue,material.materialName,material.materialInstructions,series.seriesName,series.bandName,series.style,sort.sortName,sort.fitnum,sort.shape,specification.specificationValue from product,color,material,series,sort,specification where product.colorID=color.colorID and product.materialID=material.materialID and product.seriesID=series.seriesID and product.sortID=sort.sortID  and product.specificationID=specification.specificationID and product.productID="+body.productID; 
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'success',
        results
      });
    }
  })
});

/**
 * 商品-按分类展示商品信息
 * @param {String} seriesID
 */
app.post('/api/product/getProductInfoBySeriesID', function (req, res, next) {
  var body = req.body;
  var sql = "select product.*,series.seriesName,series.bandName,series.style,color.colorName,color.colorValue,material.materialName,material.materialInstructions,specification.specificationValue,sort.sortName,sort.shape  from product,series,color,material,specification,sort where product.colorID=color.colorID and product.seriesID=series.seriesID and product.materialID=material.materialID and product.specificationID=specification.specificationID and product.sortID=sort.sortID and product.seriesID=" + body.seriesID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});
/**
 * 商品-按品牌展示商品信息
 * @param {String} sortID
 */
app.post('/api/product/getProductInfoBySortID', function (req, res) {
  var body = req.body;
  var sql = "select product.*,series.seriesName,series.bandName,series.style,color.colorName,color.colorValue,material.materialName,material.materialInstructions,specification.specificationValue,sort.sortName,sort.shape  from product,series,color,material,specification,sort where product.colorID=color.colorID and product.seriesID=series.seriesID and product.materialID=material.materialID and product.specificationID=specification.specificationID and product.sortID=sort.sortID and product.sortID=" + body.sortID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});
/**
 * 商品-加入心愿单
 * @param {String} userID
 * @param {String} productID
 */
app.post('/api/product/addToWishList', function (req, res, next) {
  var body = req.body;
  var collectTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  var tablename = "wishlist";
  var wishID = SetID(tablename);
  var sql = "insert into wishlist values (" + wishID + "," + body.userID + "," + body.productID + ",'" + collectTime + "')";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'insert wish success',
        results
      });
    }
  });
});
/**
 * 商品-删除心愿单
 * @param {String} wishID
 */
app.post('/api/product/deleteWish', function (req, res) {
  var body = req.body;
  var sql = "delete from wishlist where wishID=" + body.wishID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'delete wish success',
        results
      });
    }
  })
});
/**
 * 商品-查看心愿单
 * @param {String} userID
 */
app.post('/api/product/getWishList', function (req, res) {
  var body = req.body;
  var sql = "select * from product t1,wishlist t2,users t3 where t2.productID=t1.productID and t2.userID=t3.userID and t3.userID=" + body.userID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  })
})

/**
 * 商品-添加购物车
 * @param {String} userID
 * @param {String} productID
 * @param {Integer} count
 */
app.post('/api/product/addToCart', function (req, res) {
  var body = req.body;
  var tablename = "cart";
  var cartID = SetID(tablename);
  var sql = "insert into cart values (" + cartID + "," + userID + "," + productID + "," + count + ")";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'add to cart success',
        results
      });
    }
  });
});
/**
 * 商品-购物车更改
 * @param {String} cartID
 * @param {String} count
 */
app.post('/api/product/updateCart', function (req, res) {
  var body = req.body;
  var sql = "update cart set count=" + body.count + " where cartID=" + body.cartID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'update cart success',
        results
      });
    }
  });
});
/**
 * 商品-删除购物车
 * @param {String} cartID
 */
app.post('/api/product/deleteCart', function (req, res) {
  var body = req.body;
  var sql = "delete from cart where cartID=" + body.cartID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'delete cart success',
        results
      });
    }
  });
});
/**
 * 商品-批量删除购物车
 * @param {String} cartIDs
 */
app.post('/api/product/deleteAllCart', function (req, res) {
  var body = req.body;
  var sql = "delete from cart where cartID in (" + body.cartIDs + ")";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'delete all cart success',
        results
      });
    }
  });
});
/**
 * 商品-查看购物车
 * @param {String} userID
 */
app.post('/api/product/getAllCartByUserID', function (req, res) {
  var body = req.body;
  var sql = "select product.*,users.userID,cart.count from product,users,cart where cart.productID=product.productID and cart.userID=users.userID and users.userID=" + body.userID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'find success',
        results
      });
    }
  });
});
//#endregion

//#region 管理接口
/**
 * 颜色管理-添加颜色
 * @param {String} colorValue 颜色值("#ffffff")
 * @param {string} colorName
 */
app.post("/api/admin/addColor", function (req, res, next) {
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
app.post("/api/admin/updateColor", function (req, res, next) {
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
app.post("/api/admin/deleteColor", function (req, res, next) {
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
 * 颜色管理-删除全部颜色
 * @param {String} colorIDs
 */
app.post('/api/admin/deleteAllColors', function (req, res, next) {
  var body = req.body;
  var sql = "delete from color where colorID in (" + colorIDs + ")";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connect failed' + error
      });
    } else {
      res.send({
        code: 0,
        content: 'delete success',
        results
      });
    }
  });
});

/**
 * 颜色管理-查看颜色
 */
app.get("/api/admin/getAllColor", function (req, res, next) {
  var sql = "select * from color order by colorName desc";
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
app.post("/api/admin/addSort", function (req, res, next) {
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
app.post("/api/admin/updateSort", function (req, res, next) {
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
        content: "update sort failed" + error,
        results
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
app.post("/api/admin/deleteSort", function (req, res, body) {
  var body = req.body;
  var sql = "delete from sort where sortID=" + body.sortID;
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete sort failed" + error,
        results
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
 * 分类管理-删除分类
 * @param {String} sortIDs
 */
app.post("/api/admin/deleteAllSorts", function (req, res, body) {
  var body = req.body;
  var sql = "delete from sort where sortID in (" + body.sortIDs + ")";
  console.log(sql);
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete sort failed" + error,
        results
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
  var sql = "select * from sort order by sortName desc";
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
app.post("/api/admin/addSpecification", function (req, res, next) {
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
app.post("/api/admin/updateSpecification", function (req, res, next) {
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
app.post("/api/admin/deleteSpecification", function (req, res, next) {
  var body = req.body;
  var sql = "delete from specification where specificationID=" + body.specificationID;
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
 * 规格管理-批量删除规格
 * @param {String} specificationIDs
 */
app.post("/api/admin/deleteAllSpecifications", function (req, res, next) {
  var body = req.body;
  var sql = "delete from specification where specificationID in(" + body.specificationIDs + ")";
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
          results
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
app.post("/api/admin/addSeries", function (req, res, next) {
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
        content: "add Series failed" + error,
        results
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
app.post("/api/admin/updateSeries", function (req, res, next) {
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
        content: "update specification failed" + error,
        results
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
app.post("/api/admin/deleteSeries", function (req, res, next) {
  var body = req.body;
  var sql = "delete from series where seriesID= " + body.seriesID;
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete series failed" + error,
        results
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
 * 系列管理-批量删除系列
 *@param {String} seriesIDs
 */
app.post("/api/admin/deleteAllSeries", function (req, res, next) {
  var body = req.body;
  var sql = "delete from series where seriesID in (" + body.seriesIDs + ")";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "delete series failed" + error,
        results
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
  var sql = "select * from Series order by seriesName desc";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: "find specification failed" + error,
        results
      });
    } else {
      if (results.length > 0) {
        res.send({
          code: 200,
          content: "find Series success",
          results
        });
      } else {
        res.send({
          code: 201,
          content: "find Series success but no list",
          results
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
app.post("/api/admin/addMaterial", function (req, res, next) {
  var body = req.body;
  console.log(body);
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
app.post("/api/admin/updateMaterial", function (req, res, next) {
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
app.post("/api/admin/deleteMaterial", function (req, res, next) {
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
 * 材质管理-批量删除材质
 *@param {String} materialIDs
 */
app.post('/api/admin/deleteAllMaterials', function (req, res, next) {
  var body = req.body;
  var sql = "delete from material where materialID in (" + body.materialIDs + ")";
  myCon.query(sql, function (error, results, fields) {
    if (error) {
      res.send({
        code: 400,
        content: 'connection failed' + error
      });
    } else {
      res.send({
        code: 200,
        content: 'delete success',
        results
      });
    }
  })
})
/**
 * 材质管理-查看材质
 */
app.get("/api/admin/getAllMaterial", function (req, res, next) {
  var sql = "select * from material order by materialName desc";
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
          results
        });
      }
    }
  });
});

//#endregion

app.listen(10500);