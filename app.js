// app.js

new Vue({
  el: '#app',
  data: {
    newTask: '',
    showDragHandle: false,
    tasks: [
      { id: 1, text: 'Learn Vue.js', completed: false, category: 'To Do' },
      { id: 2, text: 'Build a to-do app', completed: true, category: 'In Progress' },
      { id: 3, text: 'Implement Kanban view', completed: false, category: 'Done' },
      // Add more tasks as needed with different categories
    ],
    categories: ['To Do', 'In Progress', 'Done'], // Define the possible categories
  },
  methods: {
    addTask: function() {
      if (this.newTask.trim() !== '') {
        const newTask = {
          id: Date.now(),
          text: this.newTask,
          completed: false,
          category: 'To Do', // Default category
        };
        this.tasks.push(newTask);
        this.newTask = '';
      }
    },
    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    },
    dragStart: function(event, task) {
      event.dataTransfer.setData('text/plain', task.id.toString());
    },
    allowDrop: function(event) {
      event.preventDefault();
      this.showDragHandle = true;
    },
    drop: function(event) {
      event.preventDefault();
      this.showDragHandle = false;
      const taskId = parseInt(event.dataTransfer.getData('text/plain'), 10);
      const taskIndex = this.tasks.findIndex(task => task.id === taskId);
      const droppedTask = this.tasks.splice(taskIndex, 1)[0];
      const newIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
      this.tasks.splice(newIndex, 0, droppedTask);
    },
  },
});

