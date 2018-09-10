<template>
  <!--上有轮播图，下有九宫格-->
    <div>
      <my-swipe url="getlunbo"></my-swipe>
      <div class="grid">
        <my-ui>
          <my-li v-for="(grid,index) in grids" :key="index">
            <router-link :to="grid.router">
              <p :class="grid.classname"></p>
              <div class="title">{{grid.title}}</div>
            </router-link>
          </my-li>
        </my-ui>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Home",
      data(){
          return{
            imgs:[], //轮播图数据
            grids:[
              {title:"新闻资讯",classname:'p-1',router:{name:'news.list'}},
              {title:"图文分享",classname:'p-2',router:{name:'photo.list',params:{categoryId:0}}},
              {title:"商品展示",classname:'p-3',router:{name:'goods.list',query:{id:1}}},
              {title:"留言反馈",classname:'p-4',router:{name:'news.list'}},
              {title:"搜索资讯",classname:'p-5',router:{name:'news.list'}},
              {title:"联系我们",classname:'p-6',router:{name:'news.list'}}
            ]
          }
      },
        created(){

        }
    }
</script>

<style scoped>
  .mint-swipe{
    height: 200px;
  }
  .mint-swipe img{
    width: 100%;
    height: auto;
  }
  .grid a{
    display: block;
    width: 100%;
    text-align: center;
  }
  .title{
    color: #333;
    margin-top: 8px;
  }
  .p-1{
    background: url("../../assets/img/logo1.png") no-repeat center center;
    background-size: 100% 100%;
    width: 40px;
    margin: 0 auto;
    height: 40px;
  }
  .p-2{
    background: url("../../assets/img/logo2.png");
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  .p-3{
    background: url("../../assets/img/logo3.png");
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  .p-4{
    background: url("../../assets/img/logo4.png");
    background-size: 100% 100%;
    width: 40px;
    margin: 0 auto;
    height: 40px;
  }
  .p-5{
    background: url("../../assets/img/logo5.png");
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
  .p-6{
    background: url("../../assets/img/logo1.png");
    background-size: 100% 100%;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }

</style>
