const community = require('../model/community');
const recommend = require('../model/recommend');
const seckill = require('../model/seckill');
const goodthing = require('../model/goodthing');
const brand = require('../model/brand');
const detail = require('../model/detail');
const user = require('../model/user');
const usermsg = require('../model/usermsg');
const cart = require('../model/cart');

const Mock = require('mockjs');
const Random = Mock.Random;


module.exports.findCommunity = async (page, limit) => {
    limit = Number(limit);
    const count = await community.countDocuments();
    const res = await community.find().skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};
module.exports.findRecommend = async (page, limit) => {
    limit = Number(limit);
    const count = await recommend.countDocuments();
    const res = await recommend.find().skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};
module.exports.findSeckill = async (page, limit) => {
    limit = Number(limit);
    const count = await seckill.countDocuments();
    const res = await seckill.find().skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};
module.exports.findGoodthing = async (page, limit) => {
    limit = Number(limit);
    const count = await goodthing.countDocuments();
    const res = await goodthing.find().sort({sold: -1}).skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};
module.exports.findBrand = async (page, limit) => {
    limit = Number(limit);
    const count = await brand.countDocuments();
    const res = await brand.find().sort({likeNum: -1}).skip((page - 1) * limit).limit(limit);
    return {
        count,
        res
    };
};
module.exports.findDetail = async (id) => {
    const res = await detail.where({recommendId: id}).find().populate(['recommendId']);
    return {
        res
    };
};
module.exports.userLogin = async (name, pwd) => {
    const res = await user.where({name, pwd}).findOne();
    return {
        res
    };
};
module.exports.existUser = async (name) => {
    const res = await user.where({name}).findOne();
    return {
        res
    };
};
module.exports.register = async (name, pwd) => {
    const res = await new user({
        name,
        pwd
    }).save();
    return {
        res
    };
};
module.exports.addUserMsg = async (id) => {
    const res = await new usermsg({
        usetId: id,
        imgUrl: 'http://tachiya.top/images/recommend/v2_qa81rg.png',
        name: Random.title(3, 4),
        autograph: '简单玩乐  童心未泯',
        fans: Random.integer(60,200),
        follow: Random.integer(20,200),
        small_video: {
            count: 3,
            data: [
                {
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa81zr.jpg',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa820t.jpg',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa82dw.jpg',
                    likeCount: Random.integer(10000,20000)
                },
            ]
        },
        dynamic: {
            count: 4,
            data: [
                {
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa678n.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa67bt.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa67ba.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa81zr.jpg',
                    likeCount: Random.integer(10000,20000)
                },
            ]
        },
        like: {
            count: 7,
            data: [
                {
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa678n.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa67bt.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa67ba.png',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa81zr.jpg',
                    likeCount: Random.integer(10000,20000)
                }, {
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa81zr.jpg',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa820t.jpg',
                    likeCount: Random.integer(10000,20000)
                },{
                    imgUrl: 'http://tachiya.top/images/recommend/v2_qa82dw.jpg',
                    likeCount: Random.integer(10000,20000)
                },
            ]
        }
    }).save();
    return {
        res
    };
};

module.exports.selectUserMsg = async (id) => {
    const res = await usermsg.where({usetId: id}).findOne();
    return {
        res
    };
};

module.exports.searchRecommend = async (id) => {
    const res = await recommend.where({_id: id}).find();
    return {
        res
    }
};

module.exports.searchCart = async (username) => {
    const res = await cart.where({user: username}).findOne();
    return {
        res
    }
};

module.exports.addCart = async (user, data) => {
    const res = await new cart({
        user,
        data
    }).save();
    return {
        res
    }
};

module.exports.updateCart = async (user, data) => {
    const res = await cart.update({user: user}, {data: data});
    return {
        res
    }
};