<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <recommend :recommendsList="recommendsList"></recommend>
      <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data () {
    return {
      lastCity: '',
      city: '',
      swiperList: [],
      iconList: [],
      recommendsList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('./static/api/index.json?city=' + this.$store.state.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const data = res.data.data
      this.city = data.city
      this.swiperList = data.swiperList
      this.iconList = data.iconList
      this.recommendsList = data.recommendList
      this.weekendList = data.weekendList
    }
  },
  mounted () {
    this.lastCity = this.$store.state.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.$store.state.city) {
      this.getHomeInfo()
      this.lastCity = this.$store.state.city
    }
  }
}
</script>

<style scoped>

</style>
