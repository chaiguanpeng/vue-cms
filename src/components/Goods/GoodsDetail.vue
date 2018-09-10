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
            购买数量: <span class="s-1">-</span>1 <span class="s-2">+</span>
          </li>
          <li>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger">加入购物车</mt-button>
          </li>
        </ul>
      </div>
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
            <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          </li>
          <li>
            <mt-button type="primary" size="large" plain>商品评论</mt-button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsDetail",
      data(){
        return{
          goodsInfo:''  //商品详情信息
        }
      },
      created(){
        let imgId = this.$route.params.id;
        this.$axios.get(`goods/getinfo/${imgId}`).then(res=>{
          this.goodsInfo = res.data.message[0];
        }).catch(err=>{
          console.log("评论获取失败",err);
        });
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
</style>
