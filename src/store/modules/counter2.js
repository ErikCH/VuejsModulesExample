import { SET_COUNTER, GET_COUNTER2 } from "@/store/mutation-types.js";
export const counter2 = {
  namespaced: true,
  state: {
    counter2: 0
  },

  mutations: {
    [SET_COUNTER]: state => state.counter2++
  },

  actions: {
    [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER)
  },

  getters: {
    [GET_COUNTER2]: state => state.counter2
  }
};
