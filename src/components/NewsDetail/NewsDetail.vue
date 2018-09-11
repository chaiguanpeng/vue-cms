<template>
    <div>
      <nav-bar :title="title"/>
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
          newsDetail:"" , //新闻详情
          title:""        //变化的标题
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
      },
      beforeRouteEnter (to, from, next) {  //路由导航守卫：
        //1、判断from 万一from的name是空，说明是粘贴地址栏
        //     1.1继续判断，根据to来设置title
        //2、如果from 是新闻列表 就给title为新闻详情
        //3、如果from 是商品详情,就给title为商品图文介绍

        // console.log("to",to);
        // console.log("from",from);
        let title = '';
        if(from.name==null){
          if(to.name ==='news.detail'){
            title = "新闻详情";
          }else if(to.name==='photo.info'){
            title = '商品图文介绍';
          }
        }else if(from.name ==="news.list"){
          title='新闻详情';
        }else if(from.name==='goods.detail'){
          title = '商品图文介绍'
        }
        //最终都放行
        next(vm => {
          // 通过 `vm` 访问组件实例
          vm.title=title;
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
