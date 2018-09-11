<template>
    <div>
      <nav-bar title="购物车"></nav-bar>
      <div class="pay-detail">
        <ul>
          <li class="p-list" v-for="(goods,index) in shopcart" :key="goods.id">
            <mt-switch v-model="goods.isSelected"></mt-switch>
            <img :src="goods.thumb_path" alt="">
            <div class="pay-calc">
              <p>{{goods.title}}</p>
              <div class="calc">
                <span>¥{{goods.sell_price}}</span>
                <span @click="substract(goods)">-</span>
                <span>{{goods.cou}}</span>
                <span @click="add(goods)">+</span>
                <a @click="del(index)">删除</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="show-price">
        <div class="show-1">
          <p>总计(不含运费)</p>
          <span>已经选择商品{{payment.count}}件，总价￥{{payment.price}}</span>
        </div>
        <div class="show-2">
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
</template>
<script>
  import GoodsTools from "@/GoodsTools"
    export default {
      beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        if(confirm("亲，要离开嘛?")){
          //保存当前的剩余购物车数据
          let obj = {};
          this.shopcart.forEach(goods=>{
            obj[goods.id] = goods.cou;
          });
          GoodsTools.saveGoods(obj);
          next();
        }else {
          next(false)
        }
      },
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
          //如果一定是在数据不完整的情况下添加属性，就需要手动通知vue完成响应式->即双向数据绑定
          this.shopcart = res.data.message;
          console.log(this.shopcart);
        }).catch(err=>{
          console.log("评论获取失败",err);
        });
      },
      methods:{
        add(goods){
          console.log("++被调用了");
          goods.cou++;
        },
        substract(goods){
          goods.cou--
        },
        del(index){
          this.shopcart.splice(index,1)
        }
      },
      computed:{
        payment(){
          let price = 0;
          let count = 0;
          this.shopcart.forEach(goods=>{
            count+=goods.cou;
            price+=goods.cou * goods.sell_price;
          });
          return{
            count,
            price
          }
        }
      }
    }
</script>

<style scoped lang="less">
.pay-detail{
  .p-list{
    border-bottom: 1px solid red;
    margin-bottom: 15px;
  }
  .pay-calc{
     >p{
       color: blue;
       border-bottom: 1px solid #ccc;
       margin: 20px 0;
     }
    .calc{
      span{
        margin-left: 15px;
      }
      span:nth-child(2n){
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
