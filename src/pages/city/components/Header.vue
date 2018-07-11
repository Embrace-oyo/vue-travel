<template>
  <div class="city-header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.city-header
  width: 100%
  height: $headerHeight
  background:#00bcd4
  line-height: $headerHeight
  text-align:center
  color:#fff
  font-size:0.32rem
  position:relative
  .back-icon
    width:0.64rem
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .4rem
    position:absolute
    left:0
    top:0
    color:#fff
</style>
