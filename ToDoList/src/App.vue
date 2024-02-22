<template>
  <main>
    <div class="container">
      <div class="content">
        <header class="header">
          <div class="logo">
            <img src="./assets/circle check.svg" alt="" />
            <h1>TO-DO List</h1>
          </div>
          <h3>Удобный и простой инструмент планирования всех ваших дел</h3>
        </header>
        <div class="task-manager">
          <div class="state-btn">
            <button @click="() => updateFilter('all')">Все задания</button>
            <button @click="() => updateFilter('finished')">Завершенные</button>
            <button @click="() => updateFilter('unfinished')">
              Незавершенные
            </button>
          </div>
          <input v-model="newTodo" type="text" />
          <button @click="() => addNewTodo(newTodo)">Добавить задачу</button>
        </div>
        <div v-for="todo in filteredTodos" class="task-list">
          <h4 :style="todo.isFinished && { textDecoration: 'line-through' }">
            {{ todo.text }}
          </h4>
          <button @click="() => toggleTodo(todo.id)">Отметить</button>
          <button @click="() => removeTodo(todo.id)">Удалить</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useTodostore } from "./stores/todos";
import { storeToRefs } from "pinia";

const newTodo = ref("");
const todoStore = useTodostore();

const { filteredTodos } = storeToRefs(todoStore);
const { addTodo, toggleTodo, removeTodo, updateFilter } = todoStore;

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};
</script>

<style scoped></style>
