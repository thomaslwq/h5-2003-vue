import Vue from 'vue'

import { Button, Input, Message, Form, FormItem } from 'element-ui'
// use注册全局便可使用
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message

