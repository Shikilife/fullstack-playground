<template>
  <div style="max-width: 500px; margin: 2rem auto;">
    <h2>Todo List（串接 Node.js RESTful API）</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newText" placeholder="新增待辦事項..." />
      <button type="submit">新增</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" @change="toggleDone(todo)" />
        <span :style="{textDecoration: todo.done ? 'line-through' : 'none'}">
          {{ todo.text }}
        </span>
        <button @click="deleteTodo(todo.id)">刪除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 你的 API 位址
const API_URL = 'http://localhost:3000/api/todos'

// 待辦資料
const todos = ref([])
const newText = ref('')

// 查詢全部
const fetchTodos = async () => {
  const res = await axios.get(API_URL)
  todos.value = res.data
}

// 新增
const addTodo = async () => {
  if (!newText.value.trim()) return
  const res = await axios.post(API_URL, { text: newText.value })
  todos.value.push(res.data)
  newText.value = ''
}

// 刪除
const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
  todos.value = todos.value.filter(t => t.id !== id)
}

// 切換完成狀態
const toggleDone = async (todo) => {
  await axios.put(`${API_URL}/${todo.id}`, { ...todo, done: !todo.done })
  todo.done = !todo.done
}

// 初次載入時查詢
onMounted(fetchTodos)
</script>
