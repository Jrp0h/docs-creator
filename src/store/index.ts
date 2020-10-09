import Vue from 'vue'
import Vuex from 'vuex'
import Namespace from '@/classes/Namespace'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    namespaces: new Array<Namespace>()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allNamespaces(state) {
      return state.namespaces;
    }
  }
})
