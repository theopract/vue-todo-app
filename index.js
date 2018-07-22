let nextTodoId = 1;

var app = new Vue ({
  el: "#app",
  data: {
    value: "",
    todos: [
      {
        id: nextTodoId++,
        text: 'Learn Vue'
      },
      {
        id: nextTodoId++,
        text: 'Learn about single-file components'
      },
      {
        id: nextTodoId++,
        text: 'Fall in love'
      }
    ]
  },
  methods: {
    addTodo () {
      const trimmedText = this.value.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        })
        this.value = '';
      }
    },
    removeTodo: function (idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      })
    }
  }
})