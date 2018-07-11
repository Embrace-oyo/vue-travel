<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .search
    height:0.72rem
    background: $bgColor
    padding: 0 0.1rem
    .search-input
      box-sizing:border-box
      height:0.62rem
      linn-height:0.62rem
      width:100%
      text-align:center
      border-radius:0.06rem
</style>
