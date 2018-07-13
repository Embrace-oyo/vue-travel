<template>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">成都海昌极地海洋公园(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>33</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped lang="stylus">
  .banner
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 55%
    position:relative
    .banner-img
      width:100%
    .banner-info
      display:flex
      position: absolute
      bottom:0
      left:0
      right:0
      color:#fff
      line-height:0.6rem
      background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
      .banner-title
        flex:1
        padding:0 0.2rem
        font-size:0.32rem
      .banner-number
        margin-top:0.14rem
        padding:0 0.4rem
        line-height:0.32rem
        height:0.32rem
        border-radius:0.2rem
        background:rgba(0, 0, 0, .8)
        font-size:0.24rem
        .banner-icon
          font-size:0.24rem

</style>
