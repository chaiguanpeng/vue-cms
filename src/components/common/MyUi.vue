<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
    export default {
        name: "my-ui"
    }
</script>

<style scoped>
  /*九宫格样式*/
 ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>
