// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import Axios from 'axios'
//配置公共URL
Axios.defaults.baseURL = "https://www.sinya.online/api"
Vue.prototype.$axios = Axios
//配置请求拦截器，显示loading图标
Axios.interceptors.request.use((config)=>{
  MintUI.Indicator.open({
    text: '拼命加载中',
    spinnerType: 'fading-circle'
  });
  return config
});
//配置响应拦截器，关闭loading图标
Axios.interceptors.response.use((response)=>{
  //response.config类似上面 config
  MintUI.Indicator.close();
  return response
});







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
  // 图片预览插件
  import VuePreview from 'vue-preview'
  // defalut install
  Vue.use(VuePreview);
  //评论组件
  import Comment from "@/components/common/Comment"
  Vue.component(Comment.name,Comment);
  //注册全局轮播组件
  import MySwipe from "@/components/common/MySwipe"
  Vue.component(MySwipe.name,MySwipe)
//全局组件结束




//定义moment全局日期过滤器 {{'xxx' | convertTime('yyyy-mm-dd')}}
import Moment from "moment"
Moment.locale('zh-cn');
//绝对时间
Vue.filter("convertTime",function (data, formatStr) {
  // console.log("data",data);
  // console.log(formatStr);
  return Moment(data).format(formatStr)
});
  //相对时间
Vue.filter("relativeTime",function (data, previousTime) {
  // console.log("data",data);
  // console.log(formatStr);
  return Moment(previousTime).fromNow();
});
//处理字符串过长的过滤器
Vue.filter('convertStr',function (str, count) {
  return str.substring(0,count) + '...'
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
