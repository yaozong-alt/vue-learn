<template>
  <tabBar>
    <tabBarItem path='/home' activeStyle="blue">
      <img slot="item-icon" src="./../assets/img/tabBar/home.png" alt="" class="item_img">
      <img slot="item-icon-active" src="./../assets/img/tabBar/home_active.png" alt="" class="item_img">
      <div slot="item-text"> 首页 </div>
    </tabBarItem>
    <tabBarItem path='/category'>
      <img slot="item-icon" src="./../assets/img/tabBar/category.png" alt="" class="item_img">
      <img slot="item-icon-active" src="./../assets/img/tabBar/category_active.png" alt="" class="item_img">
      <div slot="item-text"> 分类 </div>
    </tabBarItem>
    <tabBarItem path='/shopcart'>
      <img slot="item-icon" src="./../assets/img/tabBar/cart.png" alt="" class="item_img">
      <img slot="item-icon-active" src="./../assets/img/tabBar/cart_active.png" alt="" class="item_img">
      <div slot="item-text"> 购物车 </div>
    </tabBarItem>
    <tabBarItem path='/profile'>
      <img slot="item-icon" src="./../assets/img/tabBar/profile.png" alt="" class="item_img">
      <img slot="item-icon-active" src="./../assets/img/tabBar/profile_active.png" alt="" class="item_img">
      <div slot="item-text"> 我的 </div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from './../components/tab_bar/tabBar'
import tabBarItem from './../components/tab_bar/tabBarItem'

export default {
  name:'',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>