url：`http://localhost:3000/api/product`

### 获取商品列表

GET `/list`
请求参数：
    `_page`：页数，
    `_limit`：每页多少数据



### 改变商品状态

POST `/changeStatus`
请求参数：
    `product_num`：产品编号
    `status`：状态



### 修改产品信息

POST `/modifiedProduct`
请求参数：
    `product_num`：产品编号
    `product_name`：产品名称
    `original_price`：原价格
    `present_price`：现价



### 删除商品

POST `/deleteProduct`
请求参数：
    `product_num`：产品编号