<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .header
    background: $bgColor
    display: flex
    height: $headerHeight
    color: #fff
    line-height: $headerHeight
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background: #fff
      height .64rem
      line-height: .64rem
      margin: 0.1rem 0.12rem
      padding-left: .2rem
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color:#fff
      .arrow-icon
        margin-left: .1rem
        font-size: .24rem

</style>
