import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    newTask: '',
    activeFilter: 'Todas',
    tasks: [
      {
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
      },
  ],
  }),
  actions: {
    addTask() {
      this.tasks.push({
        "id": this.tasks.length + 1,
        "title": this.newTask,
        "completed": false
      })
      this.newTask = ''
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }
  }
})