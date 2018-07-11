<template>
  <div class="city">
    <city-header></city-header>
    <Search></Search>
    <List :city="city" :letter="letter"></List>
    <Alphabet :city="city" @change="handleLetterChange"></Alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      city: '',
      letter: ''
    }
  },
  components: {
    CityHeader,
    Search,
    List,
    Alphabet
  },
  mounted () {
    this.returnCityData()
  },
  methods: {
    returnCityData () {
      axios.get('./static/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      if (res.data.data !== undefined && res.status === 200) {
        this.city = res.data.data
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
