<template>
  <div class="cms-s-header">
    <h1 @click="goback"><&nbsp </h1>
    <h1 class="page-title">{{title}}</h1>
  </div>
</template>

<script>
    export default {
      name: "nav-bar",
      props:["title"],
      methods:{
          goback(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  .cms-s-header{
    height: 40px;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
