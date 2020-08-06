



## 接口文档

```js
const HOST='http://175.24.122.212:10500/'  //写了参数的就是必填项
```

1用户-注册

```javascript
@url HOST+"api/user/regist";
@method post
@params { 
	username 用户名
	password 密码
	telephone 手机号
	email 邮箱
	sex 性别 //0表示男 1表示女
}
@return {code,content}  //code:200 成功 400错误
```

2用户登陆

```javascript
@url HOST+"api/user/login";
@method post
@params { 
	username
	password
}
@return {code,content}
```

3用户登出

```javascript
@url HOST+"api/user/logout";
@method GET
@params { 
}
@return {code,content}
```

4用户-根据用户ID获取用户信息

```js
@url HOST+"api/user/getUserInfoByID";
@method POST
@params { 
    userID
}
@return {code,content}
```

5用户-用户评论

```js
@url HOST+"api/user/comment"
@method POST
@params { 
}
@return {code,content}
```

6管理员-修改用户信息

```javascript
@url HOST+"api/user/updateUser";
@method POST
@params { 
    userID
    userModel{
        修改的字段:属性值,
        修改的字段:属性值, 
    }
}
@return {code,content}
```

7管理员-查看所有用户信息

```js
@url HOST+"api/admin/getAllUsers";
@method GET
@params { 	
}
@return {code,content}
```

8管理员-删除用户信息

```javascript
@url HOST+"api/admin/deleteUser";
@method POST
@params { 
	userID
}
@return {code,content}
```

9管理员-批量删除

```js
@url HOST+"api/admin/deleteAllUsers";
@method POST
@params { 
	userIDs
}
@return {code,content}
```

10管理员-新增商品

```javascript
@url HOST+"api/admin/addProduct";
@method post
@params { 
	productModel{
        添加的字段1：值1,
        添加的字段2：值2,
        ...
    }
}
@return {code,content} //todo
```

11.管理员-修改商品

```javascript
@url HOST+"api/admin/updateProduct";
@method post
@params { 
	productID
	productModel{
        修改的字段1：值1,
        修改的字段2：值2,
        ...
    }
}
@return {code,content} //todo
```

12.管理员-查看全部商品

```js
@url HOST+"api/admin/getAllProduct";
@method GET
@params { 
}
@return {code,content}
```

13.管理员-删除商品

```js
@url HOST+"api/admin/deleteProduct";
@method post
@params { 
	productID
}
@return {code,content}
```

14.管理员-批量删除商品

```js
@url HOST+"api/admin/deleteAllProducts";
@method post
@params { 
	productIDs
}
@return {code,content}
```

15.管理员-上传商品图片

```js
@url HOST+"api/admin/uploadProductPicture";
@method post
@params { 
	
}
@return {code,content}
```

16.商品-获取销量前8商品

```js
@url HOST+"api/product/getTopProduct";
@method GET
@params { 
	
}
@return {code,content}
```

17.商品-根据分类获取销量前4的商品

```js
@url HOST+"api/product/getTopProductBySeries";
@method post
@params { 
	seriesID
}
@return {code,content}
```

18.商品-获取前8新设计商品

```js
@url HOST+"api/product/getNewDesignProduct";
@method GET
@params { 
	
}
@return {code,content}
```

19.商品-获取分类前4新设计商品

```js
@url HOST+"api/product/getNewDesignProductBySeries";
@method post
@params { 
	
}
@return {code,content}
```

20.商品-通过商品id显示商品详情

```js
@url HOST+"api/product/getProductInfoByID";
@method post
@params { 
	productID
}
@return {code,content}
```

21.商品-按分类展示商品信息

```js
@url HOST+"api/product/getProductInfoBySeriesID";
@method post
@params { 
	seriesID
}
@return {code,content}
```

22.商品-加入心愿单

```js
@url HOST+"api/product/addToWishList";
@method post
@params { 
	userID
    productID
}
@return {code,content}
```

23.商品-删除心愿单

```js
@url HOST+"api/product/deleteWish";
@method post
@params { 
	wishID
}
@return {code,content}
```

24.商品-查看心愿单

```js
@url HOST+"api/product/getWishList";
@method post
@params { 
	userID
}
@return {code,content}
```

25.商品-添加购物车

```js
@url HOST+"api/product/addToCart";
@method post
@params { 
	userID
    productID
    count
}
@return {code,content}
```

26.商品-购物车更改

```js
@url HOST+"api/product/updateCart";
@method post
@params { 
	cartID
    count
}
@return {code,content}
```

27.商品-删除购物车

```js
@url HOST+"api/product/deleteCart";
@method post
@params { 
	cartID
}
@return {code,content}
```

28.商品-批量删除购物车

```js
@url HOST+"api/product/deleteAllCart";
@method post
@params { 
	cartIDs
}
@return {code,content}
```

29.商品-查看购物车

```js
@url HOST+"api/product/getAllCartByUserID";
@method post
@params { 
	userID
}
@return {code,content}
```

30.颜色管理-添加颜色

```javascript
@url HOST+"api/admin/addColor";
@method post
@params { 
	colorValue
	colorName
}
@return {code,content}
```

31.颜色管理-修改颜色

```javascript
@url HOST+"api/admin/updateColor";
@method post
@params {
	colorID
	colorValue
	colorName
}
@return {code,content}
```

32.颜色管理-删除颜色

```javascript
@url HOST+"api/admin/deleteColor";
@method post
@params {
	colorID
}
@return {code,content}
```

33.颜色管理-删除全部颜色

```js
@url HOST+"api/admin/deleteAllColors";
@method post
@params {
	colorIDs
}
@return {code,content}
```

34.颜色管理-查看颜色

```javascript
@url HOST+"api/admin/getAllColor";
@method get
@params {
}
@return {code,content}
```

35.分类管理-增加分类

```javascript
@url HOST+"api/admin/addSort";
@method post
@params {
    sortName
    fitnum 适用人群
    shape 形状
}
@return {code,content}
```

36.分类管理-修改分类

```javascript
@url HOST+"api/admin/updateSort";
@method post
@params {
    sortName
    fitnum 适用人数
    shape 形状
    sortID
}
@return {code,content}
```

37.分类管理-删除分类

```javascript
@url HOST+"api/admin/deleteSort";
@method post
@params {
    sortID
}
@return {code,content}
```

38.分类管理-删除全部分类

```js
@url HOST+"api/admin/deleteAllSorts";
@method post
@params {
    sortIDs
}
@return {code,content}
```

39.分类管理-查看分类

```javascript
@url HOST+"api/admin/getAllSort";
@method get
@params {
}
@return {code,content}
```

40.规格管理-增加规格

```javascript
@url HOST+"api/admin/addSpecification";
@method post
@params {
    specificationValue 规格值
}
@return {code,content}
```

41.规格管理-修改规格

```javascript
@url HOST+"api/admin/updateSpecification";
@method post
@params {
    specificationValue 规格值
    specificationID
}
@return {code,content}
```

42.规格管理-删除规格

```javascript
@url HOST+"api/admin/deleteSpecification";
@method post
@params {
    specificationID
}
@return {code,content}
```

43.规格管理-批量删除规格

```js
@url HOST+"api/admin/deleteAllSpecifications";
@method post
@params {
    specificationIDs
}
@return {code,content}
```

44.规格管理-查看规格

```javascript
@url HOST+"api/admin/getAllSpecification";
@method get
@params {
}
@return {code,content}
```

45.系列管理-增加系列

```javascript
@url HOST+"api/admin/addSeries";
@method post
@params {
    seriesName 系列名
    bandName 品牌名
    style 风格
}
@return {code,content}
```

46.系列管理-修改系列

```javascript
@url HOST+"api/admin/updateSeries";
@method post
@params {
    seriesName 系列名
    bandName 品牌名
    style 风格
    seriesID
}
@return {code,content}
```

47.系列管理-删除系列

```javascript
@url HOST+"api/admin/deleteSeries";
@method post
@params {
    seriesID
}
@return {code,content}
```

48.系列管理-批量删除系列

```js
@url HOST+"api/admin/deleteAllSeries";
@method post
@params {
    seriesIDs
}
@return {code,content}
```

49.系列管理-查看系列

```javascript
@url HOST+"api/admin/getAllSeries";
@method get
@params {
}
@return {code,content}
```

50.材质管理-增加材质

```javascript
@url HOST+"api/admin/addMaterial";
@method post
@params {
    materialName 材质名称
    materialInstructions 材质描述
}
@return {code,content}
```

51.材质管理-修改材质

```javascript
@url HOST+"api/admin/updateMaterial";
@method get
@params {
    materialName 材质名称
    materialInstructions 材质描述
    materialID
}
@return {code,content}
```

52.材质管理-删除材质

```javascript
@url HOST+"api/admin/deleteMaterial";
@method post
@params {
    materialID
}
@return {code,content}
```

53.材质管理-批量删除材质

```js
@url HOST+"api/admin/deleteAllMaterials";
@method post
@params {
    materialIDs
}
@return {code,content}
```

54.材质管理-查看材质

```javascript
@url HOST+"api/admin/getAllMaterial";
@method get
@params {
}
@return {code,content}
```

