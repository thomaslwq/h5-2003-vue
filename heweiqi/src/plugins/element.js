import Vue from 'vue'

import { Button, Input, Message, Form, FormItem, Container, Header, Aside, Main, Menu, Submenu, MenuItem } from 'element-ui'
// use注册全局便可使用
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)



