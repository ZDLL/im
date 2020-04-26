import Vue from 'vue'
// import ant from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style/css' //全部引入
// Vue.use(ant)
/**
 * antd按需求引入
 */
import 'ant-design-vue/dist/antd.css'
import { 
        Button,
        Layout,
        FormModel,
        Form,
        Input,
        Menu,
        Icon,
        Tag,
        Alert,
        Progress,
        Popconfirm,
        Spin,
        Divider,
        Drawer,
        Upload,
        TimePicker,
        Select,
        Radio,
        InputNumber,
        DatePicker,
        Table,
        message,
        notification
      
    } from "ant-design-vue";//按需引入

Vue.prototype.$message = message;//全局提示框
Vue.prototype.$notification = notification;//全局通知
Vue.use(Button)
Vue.use(FormModel)
Vue.use(Form)
Vue.use(Input)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Progress)
Vue.use(Popconfirm)
Vue.use(Spin)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(Upload)
Vue.use(TimePicker)
Vue.use(Select)
Vue.use(Radio)
Vue.use(Table)
Vue.use(InputNumber)
Vue.use(DatePicker)
//Select
//Radio
//InputNumber
// Vue.use(message)
