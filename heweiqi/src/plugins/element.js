

import { Menu, Submenu, MenuItem } from 'element-ui'
// use注册全局便可使用
// Vue.prototype.$message = Message




import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Aside,
  Breadcrumb, BreadcrumbItem,Card, MessageBox ,Option,Select,
  Main, Header,Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog
} from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Card)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Option)
Vue.use(Select)

Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)



