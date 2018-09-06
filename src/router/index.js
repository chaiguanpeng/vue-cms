import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from "@/components/NewsDetail/NewsDetail"
import PhotoList from "@/components/Photo/PhotoList"
Vue.use(Router); //注册全局组件 router-view route-link

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    // 新闻详情
    {
      name:'news.detail',
      path:'/news/detail',
      component:NewsDetail
    },
    // 图文列表
    {
      name:'photo.list',
      path:'/photo/list/:categoryId',
      component:PhotoList
    }
  ]
})
