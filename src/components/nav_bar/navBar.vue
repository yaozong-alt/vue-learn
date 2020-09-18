<template>
  <div class="nav_bar">
    <div class='left'><slot name="left"></slot></div>
    <div class='center'><slot name="center"></slot></div>
    <div class='right'><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav_bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .left,.right {
    width: 80px;
    /* background-color: red; */
  }
  .center {
    flex: 1;
    /* background-color: royalblue; */
  }
</style>