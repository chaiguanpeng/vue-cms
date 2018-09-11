import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from "@/components/NewsDetail/NewsDetail"
import PhotoList from "@/components/Photo/PhotoList"
import PhotoDetail from "@/components/Photo/PhotoDetail"
import GoodsList from "@/components/Goods/GoodsList"
import GoodsDetail from "@/components/Goods/GoodsDetail"
import GoodsComment from "@/components/Goods/GoodsComment"
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
    },
    //图片详情
    {
      name:'photo.detail',
      path:'/photo/detail', //查询字符串不需要声明 /:id之类的
      component:PhotoDetail
    },
    //商品的列表
    {
      name:'goods.list',
      path:'/goods/list',
      component:GoodsList
    },
    //商品详情
    {
      name:'goods.detail',
      path:'/goods/detail/:id',
      component:GoodsDetail
    },
    //商品的图文介绍
    {
      name:'photo.info',
      path:'/goods/photo/info',
      component:NewsDetail
    },
    //商品评论组件
    {
      name:'goods.comment',
      path:'/goods/comment',
      component:GoodsComment
    }
  ]
})
