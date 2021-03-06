import Vue from 'vue'
import { 
  Message,
  Form,
  FormItem,
  Input,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Col,
  Row,
  Table,
  TableColumn,
  Tag,
  Pagination,
  Dialog,
  Cascader,
  Timeline,
  TimelineItem,
  Switch,
  Tooltip,
  MessageBox
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Cascader)
Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.use(Switch)
Vue.use(Tooltip)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
