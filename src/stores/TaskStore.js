import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    newTask: '',
    editedTask: {
      id: -1,
      title: '',
      completed: false,
    },
    defaultTask: {
      id: -1,
      title: '',
      completed: false,
    },
    editedId: -1,
    activeFilter: 'Todas',
    tasks: [
      {
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
      },
      {
          "id": 2,
          "title": "azarat metius zincus",
          "completed": true
      },
  ],
  }),
  actions: {
    addTask() {
      if(this.newTask) {
        this.tasks.push({
          "id": this.tasks.length + 1,
          "title": this.newTask,
          "completed": false
        })
        this.newTask = ''
      } else {
        return
      }
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    },
    editTask(task) {
      this.editedTask = Object.assign({}, task)
      console.log(this.editedTask)
    },
    saveEdit() {
      this.tasks = this.tasks.map(t => {
        if(t.id === this.editedTask.id) {
          Object.assign(t, this.editedTask)
        } else {
          return t
        }
      })
      this.editedTask = Object.assign({}, this.defaultTask)
    },
    cancelEdit() {
      this.editedTask = Object.assign({}, this.defaultTask)
    }
  }
})