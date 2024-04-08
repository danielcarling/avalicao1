<template>
  <div class="list">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <div class="list-item"
        v-if="taskStore.activeFilter === 'Todas' || taskStore.activeFilter === ''">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
      </div>
      <div class="list-item"
        v-if="taskStore.activeFilter === 'Completas' && task.completed">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
      </div>
      <div class="list-item"
        v-else-if="taskStore.activeFilter === 'Pendentes' && !task.completed">
        <v-checkbox :label="task.title" v-model="task.completed" />
        <v-icon class="delete-icon mb-5"
          @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore.js'

const taskStore = useTaskStore()

</script>

<style>
.list {
  list-style: none;
  background-color: #fff;
  padding: 1.4rem 1rem 0;
  border-radius: 0.5rem;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ccc;
}

.delete-icon {
  color: rgba(253, 0, 0, 0.926);
  cursor: pointer;
  transition: 0.2s;
}

.delete-icon:hover {
  color: darkred;
}
</style>