<template>
    <div>
      <nav-bar title="图文分享"/>
      <div class="photo-header">
        <ul>
          <li v-for="c in categorys" :key="c.id">
            <a @click="loadImgByCategoryId(c.id)">
              {{c.title}}
            </a>
          </li>
        </ul>
      </div>
      <div class="photo-list">
        <ul>
          <li v-for="img in imgs" :key="img.id">
            <router-link :to="{name:'photo.detail',query:{id:img.id}}">
              <img v-lazy="img.img_url" alt="">
              <p>
                <span>{{img.title}}</span>
                <br>
                <span>{{img.zhaiyao}}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "photo-list",
      data(){
        return{
          imgs:[],
          categorys:[]
        }
      },
      created(){
        //1.获取路由参数 categoryId，然后发送请求获取图片
        let categoryId = this.$route.params.categoryId;
        this.loadImgById(categoryId);
        // 2.获取分类信息
        this.$axios.get("getimgcategory").then(res=>{
          this.categorys = res.data.message;
          // console.log(this.newsDetail);
          //想数组的第一个元素添加一个全部的
          this.categorys.unshift({
            id:0,
            title:'全部'
          })
        }).catch(err=>{
          console.log("分类信息错误",err);
        })
      },
      methods:{
        loadImgByCategoryId(categoryId){
          this.$router.push({
            name:'photo.list',
            params:{
              categoryId
            }
          })
        },
        loadImgById(id){
          this.$axios.get("getimages/"+id).then(res=>{
            this.imgs = res.data.message;
            // console.log(this.newsDetail);
            if(this.imgs.length  ==0){
              this.$toast("没有图片拉")
            }
          }).catch(err=>{
            console.log("新闻详情错误",err);
          })
        }
      },
      beforeRouteUpdate(to,from,next){
        //路由服用,但参数改变触发，参数指的是 query | params
        this.loadImgById(to.params.categoryId);
        next();
      }
    }
</script>

<style scoped lang="less">
  /*图片懒加载样式*/
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .photo-header{
    ul{
      height: 20px;
      width: 100%;
      li{
        float: left;
        margin-right: 8px;
      }
    }

  }
</style>
