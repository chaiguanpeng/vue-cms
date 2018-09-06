<template>
    <li>
      <slot></slot>
    </li>
</template>

<script>
    export default {
        name: "my-li"
    }
</script>

<style scoped>
 li{
    text-align: center;
    width: 33.33%;
    margin-top: 15px;
  }
</style>
