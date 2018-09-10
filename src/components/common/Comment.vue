<template>
  <div class="photo-bottom">
    <ul>
      <li class="photo-comment">
        <div>
          <span>提交评论</span>
          <span><a>返回</a></span>
        </div>
      </li>
      <li class="txt-comment">
        <textarea name="" id="" v-model="newComment"></textarea>
      </li>
      <li>
        <mt-button size="large" type="primary" @click="sendMsg">提交评论</mt-button>
      </li>
      <li class="photo-comment">
        <div>
          <span>评论列表</span>
          <span>44条评论</span>
        </div>
      </li>
    </ul>
    <ul class="comment-list">
      <li v-for="(msg,index) in msgs" :key="index">{{msg.user_name}}:{{msg.content}} {{msg.add_time | relativeTime}}</li>
    </ul>
    <mt-button size="large" type="danger" plain @click="loadMore(page)">加载更多</mt-button>
  </div>
</template>

<script>
  //组件内向服务器发送请求,评论生成的cid可以从路由中获取,也可以从父组件获取，在此我们从父组件接受
    export default {
      name: "comment",
      props:["cid"], //评论需要的id
      data(){
        return{
          msgs:[],
          page:1,  //组件内控制页码
          newComment:''
        }
      },
      created(){
        //使用我这个组件时候默认页码为1
        // console.log(this.$route);
        this.page= this.$route.query.page || '1';
        this.loadMore();
      },
      methods:{
        //该函数传参，表示页面点击按钮,这个时候数据是追加,否则不传参数，就是赋值，一般来讲是针对第一次或者刷新第n页数据的时候
        loadMore(page){ //点击按钮的调用
          this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then(res=>{
            if(res.data.message.length===0){
              this.$toast("没有数据了")
            }
            if(page){
              this.msgs = this.msgs.concat(res.data.message);
            }else {
              this.msgs = res.data.message;
              console.log(this.msgs);
            }
            this.page++;
          }).catch(err=>{
            console.log("评论获取失败",err);
          });
        },
        //发表评论
        sendMsg(){
          //发表之前判断是否为空
          if(this.newComment.trim() === ""){
            return this.$toast('评论信息不能为空');
          }
          //获取评论信息 this.newComment
          this.$axios.post('postcomment/' + this.cid,'content='+this.newComment)
            .then(res=>{
              //发表之后，清空评论框
              this.newComment = "";
              //加载第一页数据
              this.page = 1;
              this.loadMore();
            }).catch(err=>{
            console.log("发表评论失败",err);
          })

        }


        //根据页码发送请求
        // firstLoad(){
        //   this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then(res=>{
        //     if(res.data.message.length===0){
        //       this.$toast("没有数据了")
        //     }
        //     this.msgs = res.data.message;
        //     this.page++;
        //   }).catch(err=>{
        //     console.log("评论获取失败",err);
        //   });
        // },
        // loadMore(){ //点击按钮的调用
        //   this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then(res=>{
        //     if(res.data.message.length===0){
        //       this.$toast("没有数据了")
        //     }
        //     this.msgs = this.msgs.concat(res.data.message);
        //     this.page++;
        //   }).catch(err=>{
        //     console.log("评论获取失败",err);
        //   });
        // }
      }
    }


</script>

<style scoped>
  .photo-comment>div{
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
  .txt-comment textarea{
    width: 100%;
    height: 50px;
    margin: 20px 0;
  }
</style>
