<template>
  <div id="app">
    <mt-header fixed title="信息管理系统"></mt-header>
    <div class="content"><router-view /></div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
          <img slot="icon" src="./assets/img/index.png" @click="hashChange">
          首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/vip.png" @click="hashChange">
        vip
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/img/shopcart.png" @click="hashChange">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/search.png" @click="hashChange">
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
    //此方法不足
    // selected(newV,oldV){
    //   console.log(newV,oldV);
    //   this.$router.push({
    //     name:newV
    //   })
    // }
  },
  methods:{
    hashChange(){
      //在vue完成渲染任务以后的行为
      this.$nextTick(function () {
        console.log(this.selected);
        this.$router.push({
          name:this.selected
        })
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
    margin-top: 40px;
    margin-bottom: 55px;
  }
</style>
