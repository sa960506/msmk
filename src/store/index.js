import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,//存储的位置
})
export default new Vuex.Store({
  state: {
    token:{},
    toke:""  //cun  token
  
  },
  mutations: {
    setToken(state,arg){
      state.token=arg
      console.log(arg,"1111")
      state.toke=arg.remember_token
      console.log(state.toke,"ooo")
        },
    zhe(state){
      state.token={}
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
