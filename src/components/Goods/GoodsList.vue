<template>
  <div>
    <nav-bar title="商品展示"></nav-bar>
    <mt-loadmore :auto-fill="false" :bottom-method="loadBottom"  :bottom-all-loaded="isAllLoaded" ref="loadmore">
      <ul class="goods">
        <li v-for="goods in goodsList" :key="goods.id">
          <router-link :to="{name:'goods.detail',params:{id:goods.id}}">
            <img :src="goods.img_url" alt="">
            <div class="title">{{goods.title | convertStr(30)}}</div>
            <div class="desc">
              <div class="sell">
                <span class="s-1">¥{{goods.sell_price}}</span>
                <span class="s-2">¥{{goods.market_price}}</span>
              </div>
              <div class="remain">
                <i>热卖中</i>
                <i>剩{{goods.stock_quantity}}件</i>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
    export default {
      name: "GoodsList",
      data(){
        return{
          goodsList:[],
          page:1,   //页码，默认为1
          isAllLoaded:false //全部数据是否加载完成
        }
      },
      created(){
        this.page = this.$route.query.id || 1;
        this.loadByPage(this.page);
      },
      methods:{
        loadByPage(page){
          this.$axios.get(`getgoods?pageindex=${page}`).then(res=>{
            this.goodsList = res.data.message;
            this.page++;
          }).catch(err=>{
            console.log("评论获取失败",err);
          });
        },
        concatByPage(page){
          this.$axios.get(`getgoods?pageindex=${page}`).then(res=>{
            //判断是否还有数据  当绑定isAllLoaded为true时,loadBottom就不会触发
            if(res.data.message.length === 0){
              this.$toast = "没有更多数据啦";
              this.isAllLoaded = true;
            }
            this.goodsList =this.goodsList.concat(res.data.message);
            this.page++;
          }).catch(err=>{
            console.log("评论获取失败",err);
          });
        },
        loadBottom(){
          console.log("下拉");
          this.concatByPage(this.page);
          this.$refs.loadmore.onBottomLoaded(); //通知元素重新定位
        }
      }
    }
</script>

<style scoped lang="less">
  .goods{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li{
      width: 45%;
      border: 1px solid #ccc;
      margin-bottom: 10px;
    }
    .desc{
      background: #ccc;
    }
  }
</style>
