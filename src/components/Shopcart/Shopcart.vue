<template>
    <div>
      <nav-bar title="购物车"></nav-bar>
      <div class="pay-detail">
        <ul>
          <!--<li class="p-list" v-for="goods in shopcart" :key="goods.id">-->
            <mt-switch ></mt-switch>
            <!--<img src="" alt="">-->
            <div class="pay-calc">
              <p>商品标题</p>
              <div class="calc">
                <span>¥777</span>
                <span>-</span>
                <span>1</span>
                <span>+</span>
                <a>删除</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import GoodsTools from "@/GoodsTools"
    export default {
      name: "Shopcart",
      data(){
        return{
          shopcart:[]  //购物车数据
        }
      },
      created(){
        let goodsList = GoodsTools.getGoodsList();
        let ids = Object.keys(goodsList).join(',');
        this.$axios.get(`goods/getshopcarlist/${ids}`).then(res=>{
          this.shopcart = res.data.message;
          console.log(this.shopcart);
        }).catch(err=>{
          console.log("评论获取失败",err);
        });
      }
    }
</script>

<style scoped>

</style>
