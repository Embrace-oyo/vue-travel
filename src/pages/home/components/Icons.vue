<template>
  <div class="icons">
    <swiper :options="options">
      <swiper-slide v-for="items of iconsList" :key="items.id">
        <div class="icon" v-for="item of items" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      options: {
        autoplay: false
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    iconsList () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top: 0.1rem
  .icon
    position: relative
    overflow hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      width: 1.1rem
      height: 1.1rem
      overflow: hidden
      margin: 0.1rem auto
      .icon-img-content
        height: 100%
        width: 100%
    .icon-text
      text-align: center
      color: $darkTextColor
      height: .44rem
      line-height: .44rem
      ellipsis()

</style>
