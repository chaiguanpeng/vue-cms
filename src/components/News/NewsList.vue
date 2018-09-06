<template>
    <div>
      <nav-bar title="新闻列表"/>
      <ul class="list">
        <li v-for="news in newsList" :key="news.id">
          <a href="">
            <img :src="news.img_url" alt="">
            <div>
              <span>{{news.title}}</span>
              <div class="news-desc">
                <p>点击数:{{news.click}}</p>
                <p>发表时间{{news.add_time | convertTime('YYYY-MM-DD')}}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>
<script>
    export default {
        name: "NewsList",
      data(){
        return{
          newsList:[]
        }
      },
        created(){
          this.$axios.get("getnewslist").then(res=>{
              this.newsList = res.data.message;
          }).catch(err=>{
            console.log("新闻列表错误",err);
          })
        }
    }
</script>

<style scoped>
.list a{
  display: flex;
  width: 95%;
  margin: 0 auto;
  align-items: center;
}
.list li{
  padding: 8px;
  border-bottom: 1px solid #ccc;
}
.list li img{
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .news-desc{
    display: flex;
    justify-content: space-between;
  }

</style>
