<template>
  <mt-swipe :auto="2000">
    <mt-swipe-item v-for="(img,index) in imgs"  :key="index"><img :src="img.img || img.src" alt=""></mt-swipe-item>
  </mt-swipe>
</template>

<script>
    export default {
      name: "my-swipe",
      props:['url'],
      data(){
        return{
          imgs:[]
        }
      },
      created(){
        this.$axios.get(this.url).then(res=>{
          this.imgs = res.data.message;
          // console.log(this.imgs);
        }).catch(err=>console.log("首页或者商品详情轮播图异常",err))
      }
    }
</script>

<style scoped>

</style>
