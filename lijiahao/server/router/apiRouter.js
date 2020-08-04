const { Router } = require('express');
const url = require('url');
const router = Router();
const handle = require('../handle');
const Mock = require('mockjs');
const Random = Mock.Random;
const jwt = require('jsonwebtoken');

const secret_key = 'toys_app_server';

router.get('/community/list', (req, res, next) => {
    const {query} = url.parse(req.url,true);
    const page = query['_page'] || 1;
    const limit = query['_limit'] || 10;
    handle.findCommunity(page, limit).then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            page: Number(page),
            length: Number(limit),
            count: data.count,
            data: data.res,
        })
    })
});

router.get('/recommend', (req, res, next) => {
    const {query} = url.parse(req.url,true);
    const page = query['_page'] || 1;
    const limit = query['_limit'] || 4;
    handle.findRecommend(page, limit).then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            page: Number(page),
            length: Number(limit),
            count: data.count,
            data: data.res,
        })
    })
});

router.get('/shopping/recommend', (req, res) => {
    handle.findSeckill().then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            data: {
                swiper: [
                    'http://tachiya.top/images/recommend/v2_qa50yy.png',
                    'http://tachiya.top/images/recommend/v2_qa50yy.png',
                    'http://tachiya.top/images/recommend/v2_qa50yy.png'
                ],
                timeLimitData: data.res,
                gridData: [
                    {
                        id: 1,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa51ti.png',
                        name: '新品预售'
                    },{
                        id: 2,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa51x6.png',
                        name: '人气榜单'
                    },{
                        id: 3,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa51wz.png',
                        name: '二手专区'
                    },{
                        id: 4,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa51xf.png',
                        name: '直播热卖'
                    }
                ]
            },
        })
    })
});

router.get('/shopping/juvenile', (req, res) => {
    handle.findRecommend(1, 5).then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            data: {
                swiper: [
                    'http://tachiya.top/images/recommend/v2_qa5uca.png',
                    'http://tachiya.top/images/recommend/v2_qa5uca.png',
                    'http://tachiya.top/images/recommend/v2_qa5uca.png'
                ],
                gridData: [
                    {
                        id: 1,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa5ugd.png',
                        name: '早教启蒙'
                    },{
                        id: 2,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa5ufb.png',
                        name: '童书馆'
                    },{
                        id: 3,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa5ufa.png',
                        name: '手工益智'
                    },{
                        id: 4,
                        imgUrl: 'http://tachiya.top/images/recommend/v2_qa5ufc.png',
                        name: '拼搭乐园'
                    }
                ],
                carData: [
                    {
                        title: '感受世界',
                        age: '0-1',
                        data: data.res
                    },{
                        title: '探索世界',
                        age: '1-3',
                        data: data.res
                    },{
                        title: '对话世界',
                        age: '3-6',
                        data: data.res
                    },{
                        title: '玩转世界',
                        age: '6-9',
                        data: data.res
                    },{
                        title: '创造世界',
                        age: '12+',
                        data: data.res
                    }
                ]
            }
        })
    })

});

router.get('/shopping/play', (req, res) => {
    handle.findRecommend(1, 4).then(data => {
        res.json({
        code: 200,
        msg: '请求成功',
        data: {
            swiper: [
                'http://tachiya.top/images/recommend/v2_qa5ucw.png',
                'http://tachiya.top/images/recommend/v2_qa5ucw.png',
                'http://tachiya.top/images/recommend/v2_qa5ucw.png'
            ],
            listData: [
                {
                    id: 1,
                    listTitle: '潮玩',
                    navImages: [
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                    ],
                    data: data.res
                },{
                    id: 2,
                    listTitle: '盲盒',
                    navImages: [
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                    ],
                    data: data.res
                },{
                    id: 3,
                    listTitle: '人偶',
                    navImages: [
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                    ],
                    data: data.res
                },{
                    id: 4,
                    listTitle: '模型',
                    navImages: [
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                    ],
                    data: data.res
                },{
                    id: 5,
                    listTitle: 'VR',
                    navImages: [
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                        'http://tachiya.top/images/recommend/v2_qa658o.png',
                        'http://tachiya.top/images/recommend/v2_qa659f.png',
                        'http://tachiya.top/images/recommend/v2_qa659o.png',
                        'http://tachiya.top/images/recommend/v2_qa659y.png',
                    ],
                    data: data.res
                }
            ]
        }
    })

    });
});

router.get('/secondhand', (req, res) => {
    handle.findSeckill().then(data => {
        res.json({
            code: 200,
            msg: '请求成功',
            data: data.res
        })
    })
});

router.get('/top10', (req, res) => {
    Promise.all([handle.findGoodthing() ,handle.findBrand()])
        .then(data => {
            res.json({
                code: 200,
                msg: '请求成功',
                data: {
                    good_thing: data[0],
                    brand: data[1]
                }
            })
        })
});

router.get('/detail', (req, res) => {
    const {query} = url.parse(req.url,true);
    const id = query['id'];
    if (!id) {
        res.json({
            code: 400,
            msg: 'id为必传参数，请重试',
        })
    }
    Promise.all([handle.findRecommend(1, 4), handle.findDetail(id)])
        .then(data => {
            res.json({
                code: 200,
                msg: '请求成功',
                data: {
                    ...data[1].res,
                    recommend: data[0]
                }
            })
        });
});

router.post('/login', (req, res) => {
    const {user, pwd} =  req.body;
    if (!user || !pwd) {
        res.json({
            code: 400,
            msg: '账号密码不能为空，请重试！',
        });
        return;
    }
    handle.userLogin(user, pwd).then(data => {
        if (data.res) {
            const token = jwt.sign({
                userId: data.res['_id'],
                username: user,
            }, secret_key, {
                expiresIn: "7d"
            });
            res.json({
                code: 200,
                msg: '登录成功',
                token
            });
        } else {
            res.json({
                code: 400,
                msg: '账号或密码错误，请重试！',
            });
        }
    });
});

router.post('/register', (req, res) => {
    const {user, pwd} =  req.body;
    if (!user || !pwd) {
        res.json({
            code: 400,
            msg: '账号密码不能为空，请重试！',
        });
        return;
    }
    handle.existUser(user).then(data => {
        if (data.res) {
            res.json({
                code: 400,
                msg: '该账户已存在，请重试！',
            });
        } else {
            handle.register(user, pwd)
                .then(data => {
                    return handle.addUserMsg(data.res['_id']);
                })
                .then(data => {
                    if (data.res) {
                        res.json({
                            code: 200,
                            msg: '注册成功！可以登录了~',
                        });
                    } else {
                        res.json({
                            code: 500,
                            msg: '注册失败！请稍后尝试',
                        });
                    }
                })
        }
    });
});

// 处理token
router.use(async (req, res, next)=>{
    // 取出token
    const auth = req.headers['authorization'];
    if (!auth) {
        res.json({
            code: 400,
            message: '登录过期，请重新登录'
        });
    }
    const token = auth.replace(/Bearer\ /, '');
    // 解开token
    const result = req.JWTtoken = jwt.verify(token, secret_key);

    if(result.iat - result.exp >= 0){
        res.json({
            code: 400,
            message: '登录过期，请重新登录'
        });
    }else{
        const user = await handle.existUser(result.username);
        if(!user.res){
            res.json({
                code: 400,
                message: '该用户不存在,或账号失效'
            });
        }else{
            next();
        }
    }
});

router.post('/existLogin', (req, res) => {
    const result = req.JWTtoken;

    const token = jwt.sign({
        username: result.username,
        userId: result.userId
    }, secret_key, {
        expiresIn: "7d"
    });
    console.log(result);
    handle.selectUserMsg(result.userId)
        .then(data => {
            res.json({
                code: 200,
                token,
                data: data.res
            });
        })
});

router.post('/getCartData', (req, res) => {
    const {username} = req.JWTtoken;
    handle.searchCart(username).then(data => {
        res.json({
            code: 200,
            data: data.res
        });
    })
});

router.post('/addCart', async (req, res) => {
    try {
        const {username} = req.JWTtoken;
        const {detailId} =  req.body;
        const cartData = await handle.searchCart(username);
        const {res: [recommend]} = await handle.searchRecommend(detailId);
        if (!cartData.res) {
            const result = await handle.addCart(username, [{
                num: 1,
                product: recommend
            }]);
            if (result) {
                res.json({
                    code: 200,
                    message: '成功添加心愿单~'
                });
                return;
            }
        }
        const { res: { data: userCart}} = cartData;
        const index = userCart.findIndex(item => {
            return item.product._id + '' === recommend._id + '';
        });
        if (index === -1) {
            userCart.push({
                num: 1,
                product: recommend
            });
            const result = handle.updateCart(username, userCart);
            if(result) {
                res.json({
                    code: 200,
                    message: '成功添加心愿单~'
                });
                return;
            }
        } else {
            userCart[index].num = userCart[index].num + 1;
            const result = handle.updateCart(username, userCart);
            if(result) {
                res.json({
                    code: 200,
                    message: '成功添加心愿单~'
                });
                return;
            }
            return;
        }
        res.json({
            code: 400,
            message: '添加心愿单失败！请重试！'
        });
    } catch (e) {
        console.log(e)
    }

});

router.post('/settlement', async (req, res) => {
    console.log(req);
});
module.exports = router;