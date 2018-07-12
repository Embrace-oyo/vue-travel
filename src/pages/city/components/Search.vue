<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item, key) of list" :key="key">{{item.name}}</li>
        <li class="search-item border-bottom center" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  props: ['cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) !== -1 || value.name.indexOf(this.keyword) !== -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
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
  .search-content
    overflow: hidden
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    z-index:1
    background:#fff
    .search-item
      line-height:0.62rem
      padding-left:0.2rem
      background:#fff
      color:#666
      &:before
        border-color:#e0d5d5
    .center
      text-align:center
      padding-left:0
      line-height:1.2rem

</style>
