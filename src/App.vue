<template>
  <div id="app">
    <mainTabBar/>  
    <router-view></router-view>
  </div>
</template>

<script>

import mainTabBar from './layout/mainTabBar'
export default {
  name: 'App',
  components:{
    mainTabBar,
  }
  
}
</script>

<style>
  /* 样式初始化 */
  @import './assets/css/base.css';
  
</style>
