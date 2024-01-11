<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <signupform />
</div>
</template>

<script>

import signupform from './components/signupForm.vue'

export default {
  name: 'App',
  components: {
    signupform
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;

}
</style>
