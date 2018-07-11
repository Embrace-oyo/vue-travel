<template>
  <div class="list" ref="list">
    <div :ref="key" @click="handelLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" class="item" v-for="(item, key) of city.cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: ['city'],
  data () {
    return {
      touchStatus: false,
      startY: 0,
      listY: 0,
      signHeight: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    this.listY = this.$refs.list.offsetTop
    this.signHeight = this.$refs['A'][0].offsetHeight
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.city.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handelLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus === true) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          const touchY = e.touches[0].clientY - this.startY - this.listY
          const index = Math.floor(touchY / this.signHeight)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 20)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .list
    position:absolute
    right:0
    top:1.58rem
    bottom:0
    width:0.4rem
    display:flex
    flex-direction:column
    justify-content:center
    .item
      line-height:.4rem
      text-align:center
      color:$bgColor
</style>
