const user = require('../model/user');
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