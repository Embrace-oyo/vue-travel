import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '成都'
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changCity2', city)
    }
  },
  mutations: {
    changCity2 (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
