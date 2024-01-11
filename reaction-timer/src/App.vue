<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
  <h1> Ibrahim Reaction Timer</h1>
  <button @click="start" v-bind:disabled="isPlaying">Play</button>
  <block v-if="isPlaying" v-bind:delay="delay" @reactionTime="showtime"/>
  <P v-if="showReaction"> time taken {{ timereaction }} milliseconds</P>
  </div>
</template>

<script>

import block from './components/block.vue'

export default {
  name: 'App',
  components: {
    block
  },
  data() {
    return {
      isPlaying: false,
      showReaction: false,
      delay: null,
      timereaction: 0
    }
  },
  methods: {
    start() {
      //this is in milliseconds
      this.delay = 2000 + (Math.random() * 5000)
      this.isPlaying = true
      this.showReaction = false
      console.log(this.delay)
    },
    showtime(time) {
      this.timereaction = time
      this.showReaction = true
      this.isPlaying = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
