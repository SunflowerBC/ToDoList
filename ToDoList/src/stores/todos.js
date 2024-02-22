import { defineStore } from "pinia";

export const useTodostore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "Убраться в комнате",
        isFinished: false,
      },
      {
        id: 2,
        text: "Погулять с собакой",
        isFinished: false,
      },
    ],
    filter: "all",
  }),
  persist: true,
  getters: {
    filteredTodos() {
      if (this.filter === "finished") {
        return this.todos.filter((todo) => todo.isFinished);
      } else if (this.filter === "unfinished") {
        return this.todos.filter((todo) => !todo.isFinished);
      }
      return this.todos;
    },
  },
  actions: {
    addTodo(text) {
      if (!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 1000000),
        text,
        isFinished: false,
      });
    },
    removeTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
    updateFilter(value) {
      this.filter = value;
    },
  },
});
