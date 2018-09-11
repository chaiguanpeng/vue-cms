<template>
    <div>
      <nav-bar title="商品的评论"></nav-bar>
      <comment :cid="$route.query.id"></comment>
    </div>
</template>

<script>
    export default {
        name: "GoodsComment"
    }
</script>

<style scoped>

</style>
