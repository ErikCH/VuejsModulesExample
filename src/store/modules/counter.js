import {
  SET_COUNTER,
  GET_COUNTER,
  COUNTER2_M
} from "@/store/mutation-types.js";
//#1 individual const values

// export const state = {
//   counter: 0
// };

// export const mutations = {
//   [SET_COUNTER]: state => state.counter++
// };

// export const actions = {
//   [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER)
// };

// export const getters = {
//   [GET_COUNTER]: state => state.counter
// };

//#2 export default

// export default {
//   state: {
//     counter: 0
//   },

//   mutations: {
//     [SET_COUNTER]: state => state.counter++
//   },

//   actions: {
//     [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER)
//   },

//   getters: {
//     [GET_COUNTER]: state => state.counter
//   }
// };

//#3 export const all
export const counter = {
  namespaced: true,
  state: {
    counter: 0
  },

  mutations: {
    [SET_COUNTER]: state => state.counter++
  },

  actions: {
    [SET_COUNTER]: ({ commit, dispatch }) => {
      dispatch(`${COUNTER2_M}${SET_COUNTER}`, null, { root: true });

      commit(SET_COUNTER);
    }
  },

  getters: {
    [GET_COUNTER]: state => state.counter
  }
};
