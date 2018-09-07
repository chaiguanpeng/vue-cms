<template>
    <div>
      <nav-bar title="图文详情"/>
      <div class="photo-title">
        <p>{{info.title}}</p>
        <p class="photo-time">
          <span>发起日期: {{info.add_time | convertTime('YYYY-MM-DD')}}</span>
          <span>{{info.click}}次浏览</span>
          <span>分类:民生经济</span>
        </p>
      </div>
      <div class="photo-pic">
        <vue-preview :slides="imgs" ></vue-preview>
        <!--<li v-for="(img,index) in imgs" :key="index"><img :src="img.src" alt=""></li>-->
      </div>
      <div class="photo-desc">
        <p v-html="info.content"></p>
      </div>

      <!--使用评论组件-->
      <comment :cid="$route.query.id"></comment>


    </div>
</template>

<script>
    export default {
      name: "photo-detail",
      data(){
        return{
          info:"", //图文详情
          imgs:[]   //缩略图
        }
      },
      created(){
          let id = this.$route.query.id;
        //发起请求 获取详情
          this.$axios.get("getimageInfo/"+id).then(res=>{
              this.info = res.data.message[0];
            }).catch(err=>{
              console.log("图文详情获取失败",err);
            });
          //获取缩略图
          this.$axios.get("getthumimages/"+id).then(res=>{
            this.imgs = res.data.message;
            this.imgs.forEach(img=>{
              img.msrc=img.src;
              img.m = 100;
              img.h = 100;
            })
          }).catch(err=>{
            console.log("分类信息错误",err);
          })
      }
    }

</script>

<style scoped lang="less">
.photo-title{
  p{
    font-size: 18px;
    color: aqua;
  }
  .photo-time{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #333;
    margin: 15px 0;
  }
}

</style>
