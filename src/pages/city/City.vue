<template>
  <div class="city">
    <city-header></city-header>
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import Search from './components/Search'
import List from './components/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    Search,
    List
  }
}
</script>

<style scoped lang="stylus">

</style>
