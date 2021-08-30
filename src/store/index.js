import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,//存储的位置
})
export default new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    setToken(state,arg){
      state.token=arg
    }
  },
  getters: {
    
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
