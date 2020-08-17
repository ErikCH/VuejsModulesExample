import Vue from "vue";
import Vuex from "vuex";
import { GET_COUNTER, SET_COUNTER } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    [SET_COUNTER]: state => state.counter++
  },
  actions: {},
  getters: {
    [GET_COUNTER]: state => state.counter
  },
  modules: {}
});
