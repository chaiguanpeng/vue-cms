<template>
  <div id="app">
    <mt-header fixed title="fixed top">信息管理系统</mt-header>
    <div class="content"><router-view /></div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/vip.png">
        vip
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/img/shopcart.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/search.png">
        搜索
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:""
    }
  },
  watch:{
    selected(newV,oldV){
      console.log(newV,oldV);
      this.$router.push({
        name:newV
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
  #app .content{
    margin-top: 50px;
  }
</style>
