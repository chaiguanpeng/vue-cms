// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
//配置公共URL
Axios.defaults.baseURL = "https://www.sinya.online/api/"
Vue.prototype.$axios = Axios
//配置mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入自己css
import './assets/css/global.css'
Vue.config.productionTip = false
//引入自己的ul和li组件，并注册全局组件
import MyUi from "@/components/common/MyUi";
import MyLi from "@/components/common/MyLi";
Vue.component(MyUi.name,MyUi);
Vue.component(MyLi.name,MyLi);
import NavBar from "@/components/common/NavBar";
Vue.component(NavBar.name,NavBar)








//定义moment全局日期过滤器 {{'xxx' | convertTime('yyyy-mm-dd')}}
import Moment from "moment"
Vue.filter("convertTime",function (data, formatStr) {
  // console.log("data",data);
  // console.log(formatStr);
  return Moment(data).format(formatStr)
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
