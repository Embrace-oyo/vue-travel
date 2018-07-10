<template>
  <div class="recommend-box">
    <div class="recommend-title">热销推荐</div>
    <ul class="item-ul">
      <li class="item border-bottom" v-for="item of recommendsList" :key="item.id">
        <div class="item-img-wrapper">
          <div class="item-img-box">
            <img class="item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendsList: Array
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
  .item-ul
    margin-left: 0.24rem
    .item::before
      border-bottom: 1px solid #e0e0e0;
    .item:last-child
      border-bottom: none;
    .item
      overflow: hidden
      display: flex
      height: 2rem
      padding: 0.2rem 0
      .item-img-wrapper
        flex: 1
        .item-img-box
          float: left
          .item-img
            width: 2rem
            height: 2rem
      .item-info
        width: 5rem
        float: left
        padding-left: 0.2rem
        .item-title
          line-height: 0.54rem
          font-size: 0.32rem
          color: #212121
        .item-desc
          line-height: .4rem
          color: #ccc
          ellipsis-2()
        .item-button
          margin-top: .2rem
          background: #ff9300
          padding: 0 .2rem
          border-radius:.1rem
          color: #fff

</style>
