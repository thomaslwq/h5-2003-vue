/**
 * 配置连接项并暴露接口
 */
const connection={
    host:"175.24.122.212",
    user:"root",
    password:"root",
    database:"iHome"
}
const spell="Expecto Patronum";
/**
 * 设置ID
 * @param {String} table 表名
 */
function SetID(tablename){
    var num = 1000;
    var random = Math.floor(Math.random()*(1000-100))+100;
    switch(tablename){
        case "user":
            num = num+1;
        break;
        case "product":
            num = num+2;
        break;
        case "series":
            num = num+3;
        break;
        case "color":
            num = num+4;
        break;
        case "spacification":
            num = num+5;
        break;
        case "material":
            num = num+6;
        break;
        case "comment":
            num = num+7;
        break;
        case "cart":
            num = num+8;
        break;
        case "wishlist":
            num = num+9;
        break;
        case "sort":
            num = num+10;
        break;
    }
    var str = num.toString()+ random +Date.now();
    return Number(str);
}
module.exports={
    connection,
    spell,
    SetID
}