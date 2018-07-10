<template>
  <div class="recommend-box">
    <div class="recommend-title">周末去哪</div>
    <ul class="item-ul">
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <div class="item-img-box">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top: .1rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    margin-bottom: 0.1rem
    .item-img-wrapper
      flex: 1
      .item-img-box
        width: 100%
        float: left
        height: 0
        padding-bottom: 140px
        overflow: hidden
    .item-info
      float: left
      flex: 1
      padding: .14rem .2rem .2rem .2rem;
      .item-title
        line-height: 0.54rem
        font-size: 0.28rem
        color: #212121
      .item-desc
        line-height: .4rem
        color: #616161
        font-size: 0.24rem
        ellipsis-2()
      .item-button
        margin-top: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius:.1rem
        color: #fff

</style>
