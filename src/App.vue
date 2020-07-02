<template>
  <div>
    <md-toolbar class="md-transparent md-large md-dense">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title center">Vue Todo App_</h3>
        </div>
        <md-avatar class="md-avatar-icon">
          <img src="./assets/logo.png" alt="logo" />
        </md-avatar>
        <div class="md-toolbar-section-end">
          <a class="text-link" href="https://github.com/ianfleming464/Vue-Todo-App-" target="_blank">by Ian Fleming</a>
        </div>
      </div>
    </md-toolbar>

    <md-card>
      <md-card-content>
        <md-field>
          <md-input class="main-input" v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
        </md-field>

        <div class="todo-list">
          <ul class="todos">
            <li class="todo-item" v-for="todo in todos" :key="todo.id">
              <span>
                <input class="completed" type="checkbox" @change="isComplete" v-model="todo.completed" />
                <span
                  v-if="todo.editing === false"
                  class="todo-item-label"
                  :class="{ 'is-complete': todo.completed }"
                  @dblclick="editTodo(todo)"
                  >{{ todo.label }}</span
                >
              </span>

              <div v-if="todo.editing">
                <md-field>
                  <md-input
                    class="editing-input"
                    type="text"
                    v-model="todo.label"
                    @keyup.enter="stopEdit(todo)"
                    @keyup.esc="stopEdit(todo)"
                    @focusout="stopEdit(todo)"
                    placeholder="Edit"
                  />
                </md-field>
              </div>

              <span>
                <md-button class="md-mini md-plain" v-if="todo.editing === false" @click="editTodo(todo)">
                  <md-icon>edit</md-icon>
                </md-button>
                <md-button class="md-mini md-plain" v-if="todo.editing === false" @click="removeTodo(todo)">
                  <md-icon>delete</md-icon>
                </md-button>
              </span>
            </li>
          </ul>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: "",
      editedTodo: "",
    };
  },

  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false,
        editing: false,
      });
      this.currentTodo = "";
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    isComplete() {
      this.todo.completed = !this.todo.completed;
    },
    editTodo(todo) {
      todo.editing = true;
    },
    stopEdit(todo) {
      todo.editing = false;
    },
  },
  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("todos")) this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  watch: {
    todos: {
      handler() {
        console.log("Todos changed!");
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
  padding-top: 16px;
  min-height: 60px !important;
}

.md-toolbar.md-large.md-dense {
  min-height: 30px;
}

.md-field {
  padding: 1 0px;
}

.todos {
  list-style: none;
  padding: 10px;
}

.is-complete {
  text-decoration: line-through;
  color: lightgray;
}

.todo-item {
  list-style: none;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.todo-item-label,
input.completed {
  margin-left: 20px;
}

.md-card {
  max-width: 1000px;
  margin: 30px auto;
}

.md-card-content {
  padding: 10px;
}

.text-link {
  color: lightblue !important;
  text-decoration: underline !important;
}
</style>
