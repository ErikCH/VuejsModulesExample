<template>
  <div>
    <div class="home">Hello World</div>
    <div>Counter: {{counter}}</div>
    <div>Counter2: {{counter2}}</div>
    <button @click="increment">Press Me</button>
    <button @click="increment2">Press Me Counter 2</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_COUNTER, SET_COUNTER, GET_COUNTER2, COUNTER2_M, COUNTER_M } from "@/store/mutation-types";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapActions({
      increment: `${COUNTER_M}${SET_COUNTER}`,
      increment2: `${COUNTER2_M}${SET_COUNTER}`
    })

  },
  computed: {
    ...mapGetters({
      counter: `${COUNTER_M}${GET_COUNTER}`,
      counter2: `${COUNTER2_M}${GET_COUNTER2}`
    })
    
  }
}
</script>
