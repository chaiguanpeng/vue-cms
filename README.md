# cms-project
## 用到的插件
- mint-ui
- vue-preview 缩略图插件
- 
## 父子组件样式总结
- 父不管子
- 子管自己
- 爷爷(全局) 都管
- 建议: 组件负责自己的样式，全局都可以控制
## 严格模式下mint-ui中下拉刷新有Bug
- <!DOCTYPE html>  去掉
- auto-fill="false" 自动帮助发请求填充满父元素
- :bottom-method="loadBottom" 拉动函数
- :bottom-all-loaded="isAllLoaded" 为true时终结拉动函数的调用
- this.$refs.loadmore.onBottomLoaded(); 通知元素重新定位

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
