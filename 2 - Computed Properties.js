new Vue({
  el: "#tasks",

  data: {
    tasks: [
      { description: "Go to the store", completed: false },
      { description: "Finish screencast", completed: false },
      { description: "Go to Continente", completed: false },
      { description: "Go to Pingo Doce", completed: false },
    ],
  },

  methods: {
    done(task) {
      task.completed = true;
    },
  },
  
  //Computation before rendering to the page
  computed: {
    incompleteTasks() {
      return this.tasks.filter((task) => !task.completed);
    },

    completeTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
});