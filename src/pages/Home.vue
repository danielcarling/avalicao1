<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="">
        <h1>Home</h1>
        <v-text-field clearable label="Adicionar Tarefa" prepend-icon="mdi-plus"
            variant="underlined" v-model="taskStore.newTask"
            @keydown.enter="taskStore.addTask(newTask)" />
        <v-select label="Filtrar Tarefas" :items='taskFilter'
            v-model="activeFilter"></v-select>
        <div class="list">
            <div v-for="task in taskStore.tasks" :key="task.id">
                <div class="list-item"
                    v-if="activeFilter === 'Todas' || activeFilter === ''">
                    <v-checkbox :label="task.title" v-model="task.completed" />
                    <v-icon class="delete-icon mb-5"
                        @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
                </div>
                <div class="list-item"
                    v-if="activeFilter === 'Completas' && task.completed">
                    <v-checkbox :label="task.title" v-model="task.completed" />
                    <v-icon class="delete-icon mb-5"
                        @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
                </div>
                <div class="list-item"
                    v-else-if="activeFilter === 'Pendentes' && !task.completed">
                    <v-checkbox :label="task.title" v-model="task.completed" />
                    <v-icon class="delete-icon mb-5"
                        @click="taskStore.deleteTask(task)">mdi-trash-can-outline</v-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore.js'

const newTask = ref('')
const taskStore = useTaskStore()
const tasks = taskStore.tasks

const taskFilter = ref(['Todas', 'Completas', 'Pendentes'])

const activeFilter = ref('Todas')

const deleteTask = (task) => {
    tasks.value = tasks.value.filter(t => t.id !== task.id)
}


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