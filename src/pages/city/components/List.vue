<template>
  <div class="list" ref="wrapper">
    <div class="scroll">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="hotCity of city.hotCities" :key="hotCity.id" @click="handleCityClick(hotCity.name)">
            <div class="button">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of city.cities" :key="item.id" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: ['city', 'letter'],
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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
