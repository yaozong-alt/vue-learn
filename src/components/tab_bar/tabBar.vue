<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // name:'tabBar',
}
</script>

<style>
 #tab_bar{
    display: flex;
    position: fixed;
    background-color: #f6f6f6;
    /* x轴偏移 y轴偏移 模糊度 背景颜色 */
    box-shadow: 0px -1px 1px rgba(100,100,100,.1); 
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 14px;
  }
  
</style>