<template>
    <div>
      <nav-bar title="商品详情"></nav-bar>
      <div class="outer-swiper">
        <div class="swiper">
          <my-swipe url="getthumimages/87"></my-swipe>
        </div>
      </div>
      <div class="product-desc">
        <ul>
          <li>
            <span class="product-desc-span">{{goodsInfo.title}}</span>
          </li>
          <li class="price-li">
            <s>¥{{goodsInfo.market_price}}</s>销售价: <span>¥{{goodsInfo.sell_price}}</span>
          </li>
          <li class="number-li">
            购买数量: <span class="s-1" @click="substract">-</span>{{pickNum}} <span class="s-2" @click="add">+</span>
          </li>
          <li>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="insertBall">加入购物车</mt-button>
          </li>
        </ul>
      </div>
      <transition  v-on:after-enter="afterEnter" name="ball">
        <div class="ball" v-if="isExist"></div>
      </transition>
      <div class="product-props">
        <ul>
          <li>商品参数</li>
          <li>商品货号:{{goodsInfo.goods_no}}</li>
          <li>库存情况:{{goodsInfo.stock_quantity}}件</li>
          <li>上架时间:{{goodsInfo.add_time | convertTime('YYYY-MM-DD')}}</li>
        </ul>
      </div>
      <div class="product-info">
        <ul>
          <li>
            <mt-button type="primary" size="large" plain @click="showPhotoInfo">图文介绍</mt-button>
          </li>
          <li>
            <mt-button type="primary" size="large" plain @click="goodsComment">商品评论</mt-button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import EventBus from "@/EventBus";
  import GoodsTools from "@/GoodsTools";
    export default {
      name: "GoodsDetail",
      data(){
        return{
          goodsInfo:'',  //商品详情信息
          isExist:false,
          pickNum:1     //加入购物车数量
        }
      },
      created(){
        let imgId = this.$route.params.id;
        this.$axios.get(`goods/getinfo/${imgId}`).then(res=>{
          this.goodsInfo = res.data.message[0];
        }).catch(err=>{
          console.log("评论获取失败",err);
        });
      },
      methods:{
        //加入购物车逻辑
        insertBall(){
          this.isExist = true;

        },
        afterEnter(){
          this.isExist = false; //移除元素
          //添加到本地存储
          GoodsTools.add({
            id:this.goodsInfo.id,
            num:this.pickNum
          });
          // 发射数量给app.vue 也可以写在 inserBall,但是用动画钩子合理
          let pickNum = GoodsTools.getTolCount();
          EventBus.$emit('addShopcart',pickNum);
        },
        add(){
          this.pickNum ++
        },
        substract(){
          if(this.pickNum<=1) return;
          this.pickNum--;
        },
        //图文介绍
        showPhotoInfo(){
          //编程导航
          this.$router.push({
            name:'photo.info',
            query:{
              id:this.$route.params.id
            }
          })
        },
        //商品评论
        goodsComment(){
          //编程导航 goods.comment ->使用评论子组件，需要传递商品id
          this.$router.push({
            name:'goods.comment',
            query:{
              id:this.$route.params.id
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">

  .outer-swiper{
    .swiper{
      height: 250px;

    }
  }
  .product-desc{
    margin-bottom: 50px;
    ul li{
      margin-top: 15px;
      .product-desc-span{
        font-size: 22px;
        color: blue;
      }
      s{
        font-size: 16px;
        color: #ccc;
        margin-left: 15px;
      }
      span{
        font-size: 16px;
        color: #ccc;
        margin-left: 15px;
      }
    }
    .number-li{
      font-size: 16px;
      span{
        font-size: 16px;
        margin:0 15px;
      }
    }
  }
  .product-props{
    margin-top: 50px;
    li{
      margin-top: 10px;
      color: #333;
    }
  }
  .product-info{
    li{
      margin-top: 8px;
      font-size: 16px;
    }
  }
  .ball{
    width: 30px;
    margin: 0 auto;
    height: 30px;
    border-radius: 15px;
    background: red;
  }
  .ball-enter-active{
    animation: bounce-in 1s;
  }
  .ball-leave{
    opacity: 0;
  }
  @keyframes bounce-in {
    0%{
      transform: translate3d(0,0,0);
    }
    50%{
      transform: translate3d(140px,-50px,0);
    }
    75%{
      transform: translate3d(160px,0px,0);
    }
    100%{
      transform: translate3d(140px,300px,0);
    }
  }
</style>
