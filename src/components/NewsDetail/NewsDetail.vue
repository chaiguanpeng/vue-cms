<template>
    <div>
      <nav-bar title="新闻详情"/>
      <div class="news-title">
        <p>{{newsDetail.title}}</p>
        <div>
          <span>{{newsDetail.click}}次点击</span>
          <span>分类:民生经济</span>
          <span>添加时间:{{newsDetail.add_time | convertTime("YYYY年MM月DD日")}}</span>
        </div>
      </div>
      <div class="news-content" v-html="newsDetail.content">新闻明细</div>
    </div>
</template>

<script>
    export default {
      name: "NewsDetail",
      data(){
        return{
          newsDetail:""  //新闻详情
        }
      },
      created(){
        //获取路由查询字符串参数id
        let id = this.$route.query.id;
        this.$axios.get("getnew/"+id).then(res=>{

          this.newsDetail = res.data.message[0];
          // console.log(this.newsDetail);
        }).catch(err=>{
          console.log("新闻详情错误",err);
        })

      }

    }
</script>

<style scoped lang="less">
  .news-title{
      p{
        font-size: 20px;
        color: red;
      }
    >div{
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      font-size: 16px;
    }
  }
  .news-content{
    margin-top: 8px;
    border-top:1px solid #ccc;
    font-size: 16px;
  }
</style>
