<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ props }">
      <v-icon icon v-bind="props">mdi-pencil</v-icon>
    </template>
    <v-card v-slot:default class="pa-4">
      <v-card-title>Editar Tarefa</v-card-title>
      <v-textarea v-model="taskStore.taskToEdit.title"></v-textarea>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore.js'

const dialog = ref(false)

const taskStore = useTaskStore()
</script>
