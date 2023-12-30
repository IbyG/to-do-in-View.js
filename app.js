// app.js

new Vue({
    el: '#app',
    data: {
      newTask: '',
      tasks: [
        { text: 'Learn Vue.js', completed: false },
        { text: 'Build a to-do app', completed: true }
        // Add more tasks as needed
      ]
    },
    methods: {
      addTask: function() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      deleteTask: function(index) {
        this.tasks.splice(index, 1);
      }
    }
  });
