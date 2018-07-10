<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length>0">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true
      }
    }
  },
  props: {
    swiperList: Array
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrapper >>> .swiper-container-horizontal > .swiper-pagination-bullets
  bottom: 20px
.wrapper
  width: 100%
  height: 26.6vw
  overflow: hidden
  .swiper-img
   width: 100%
</style>
