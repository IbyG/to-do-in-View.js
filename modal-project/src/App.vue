<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
<!--<HelloWorld msg="Welcome to Your Vue.js App"/> --> 
<div v-if="showModal">  
    <Modal  header="sign up for the giveaway" text="grab your ninja swag for half price!" @close="toggleModal"> 
      <template v-slot:links>
        <a href="">sign up not</a><br>
        <a href=""> more info</a>
      </template>
      <h1>Ninja Giveaway</h1>
      <p>Grab the ninja stuff</p>
    </Modal>   
  </div>


  <div v-if="showModal2">
    <Modal  @close="toggleModal2"> 
      <h1>This is modal 2</h1>
      <p>buy modal 2 stuff here</p>
    </Modal> 
  </div>
 
  <br><button @click="toggleModal">Open Modal</button>
  <br><button @click="toggleModal2">Open Modal2</button>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal
  },

  data(){
    return{
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
