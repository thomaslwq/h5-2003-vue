import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'
import axios from './common/myaxios'

// element-ui
import {
  Button, 
  Select,
  Menu,
  MenuItem,
  MenuItemGroup,
  Header,
  Aside,
  Main,
  Submenu,
  Container,
  Collapse,
  Tag,
  Divider,
  Card,
  Row,
  Col,
  CollapseItem,
  Timeline,
  TimelineItem,
  Input,
  Radio,
  RadioButton,
  RadioGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Calendar,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Option,
  OptionGroup,
  Upload,
  Dialog,
  DatePicker
} from 'element-ui';

Vue
  .use(Input)
  .use(Button)
  .use(Select)
  .use(Menu)
  .use(MenuItem)
  .use(MenuItemGroup)
  .use(Main)
  .use(Aside)
  .use(Header)
  .use(Submenu)
  .use(Container)
  .use(Collapse)
  .use(Tag)
  .use(Divider)
  .use(Card)
  .use(Row)
  .use(Col)
  .use(CollapseItem)
  .use(Timeline)
  .use(TimelineItem)
  .use(Input)
  .use(Radio)
  .use(RadioButton)
  .use(RadioGroup)
  .use(Dropdown)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Calendar)
  .use(Tabs)
  .use(TabPane)
  .use(Table)
  .use(TableColumn)
  .use(Option)
  .use(OptionGroup)
  .use(Upload)
  .use(Dialog)
  .use(DatePicker)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
