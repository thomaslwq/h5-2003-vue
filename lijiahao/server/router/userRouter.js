const { Router } = require('express');
const router = Router();
const handle = require('../handle/user_handle');
const jwt = require('jsonwebtoken');
const secret_key = '123456';

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
module.exports = router;