<template>
  <div class="list" ref="wrapper">
    <div class="scroll">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before,&after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list
    position: absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    z-index:0
    overflow:hidden
    .title
      line-height:0.54rem
      background: #eee
      padding-left:0.2rem
      color: #666666
      font-size:0.26rem
    .button-list
      padding:0.1rem 0.6rem 0.1rem 0.1rem
      overflow:hidden
      .button-wrapper
        float:left
        width:33.33%
        .button
          margin:0.1rem
          text-align:center
          border:0.02rem solid #ccc
          border-radius:0.06rem
          padding:0.1rem 0
    .item-list
      .item
        line-height:0.76rem
        padding-left:0.2rem
</style>
