import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    newTask: '',
    tasks: [
      {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
      },
      {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": true
      },
      {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
      },
      {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
      },
      {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
      }
  ],
  }),
  actions: {
    addTask() {
      this.tasks.push({
        "userId": 1,
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