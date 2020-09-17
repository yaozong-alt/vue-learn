<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot> 
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path:{
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} :{}
    }
  },
  methods: {
    itemClick() {
      console.log('this.path', this.path)
      this.$router.push(this.path)
    }
  }
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
  .tab_bar_item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .item_img{
    width: 24px;
    vertical-align: middle;
  }
</style>