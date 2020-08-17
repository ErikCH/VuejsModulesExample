import Vue from "vue";
import Vuex from "vuex";
// import { GET_COUNTER, SET_COUNTER } from "./mutation-types";
// import * as counter from "./modules/counter";
import { counter as COUNTER } from "./modules/counter";
import { counter2 as COUNTER2 } from "./modules/counter2";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    COUNTER,
    COUNTER2
  }
});
