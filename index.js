let nextTodoId = 1;

Vue.component('todo-list', {
  template: `
  <div>
    <input type="text" class="input" v-model="value" @keydown.enter="addTodo">
    <ul v-if="todos.length">
      <todo_list_item 
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo">
        </todo_list_item>
    </ul>
  </div>
  `,
  data: function () {
    return {
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
    }
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


Vue.component("todo_list_item", {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <li>
      {{ todo.text }}
      <button @click="$emit('remove', todo.id)">
        X
      </button>
    </li>
  `
})

var app = new Vue ({
  el: "#app",
})