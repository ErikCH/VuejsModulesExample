<template>
  <div>
    <div class="home">Hello World</div>
    <div>Counter: {{counter}}</div>
    <button @click="increment">Press Me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { GET_COUNTER, SET_COUNTER } from "@/store/mutation-types";
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapMutations({
      increment: SET_COUNTER
    })

  },
  computed: {
    ...mapGetters({
      counter: GET_COUNTER
    })
    
  }
}
</script>
