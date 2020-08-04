const community = require('../model/user');

const Mock = require('mockjs');
const Random = Mock.Random;
const obj = Mock.mock({
    'recommend': {
        // imgUrl: String,
        // name: String,
        // autograph: String,
        // fans: Number,
        // follow: Number,
        // small_video: Object,
        // dynamic: Object,
        // like: Object
        'evaluate': {
            text: '推荐理由：@ctitle(15,25)',
            'score|5-10': 0
        },
        'buyer|1': [{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397214/v2_qa6ea8.png',
            'name:': 'POP MART '
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397235/v2_qa6edo.png',
            'name:': '乐高'
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397328/v2_qa6epm.png',
            'name:': '迪斯尼'
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397293/v2_qa6eks.png',
            'name:': '玩具反斗城 '
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397530/v2_qa6ff4.png',
            'name:': '万代'
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397442/v2_qa6f57.png',
            'name:': '澳贝'
        },{
            'buyer': 'https://modao.cc/uploads4/images/4839/48397511/v2_qa6fce.png',
            'name:': 'babycare'
        }],
        'buyer': [
            'https://modao.cc/uploads4/images/4839/48397699/v2_qa6gb4.png',
            'https://modao.cc/uploads4/images/4839/48397714/v2_qa6gdf.png'
        ]
    }
});
// obj.recommend.forEach(item => {
//     console.log(item);
//     new community(item).save();
// });
new community({
    name: 'admin',
    pwd: 'admin'
}).save();
