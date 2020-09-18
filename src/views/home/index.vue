<template>
  <div>
    <navBar class="home_nav">
      <div slot="center">
        购物街
      </div>
    </navBar>
  </div>
</template>

<script>
import navBar from './../../components/nav_bar/navBar'
// import navBarItem from './../../components/nav_bar/navBarItem'
export default {
  components: {
    navBar,
    
  }
}
</script>

<style scoped>
  .home_nav {
    background-color: salmon;
    color: seashell;
  }
</style>