console.log('hello, vue')

const app = Vue.createApp({
  // data, functions 
  template: '<h2>I am the template</h2>'
}) 
//app.mount('#app')

const app2 = Vue.createApp({
  data() {
    return {
      showbooks: true,
      title: 'The final empire',
      author: "Brandon George",
      age: '12'
    }
  },

  //in the methods is where we define the functions
  methods: {
    //taking a variable and setting the title to be that input
    changeTitle(title) {
      console.log('you clicked change title')
      this.title=title
    },
    //setting title to a static value
    changeTitle2(){
      console.log('you clicked change title 2')
      this.title = "Ibrahim George book"
    },
    showhide(){
      /*
      if(this.showbooks == true){
        this.showbooks = false
      }else{
        this.showbooks = true
      }
      */
     this.showbooks = !this.showbooks

    }
  }
})
app2.mount('#app2')

//conditional rendering