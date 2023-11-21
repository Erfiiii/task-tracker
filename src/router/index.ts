import { createRouter, createWebHistory } from 'vue-router'
import TasksPage from '@/pages/tasks/TasksPage.vue'
import TaskPage from '@/pages/task/TaskPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: '/tasks'
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksPage
    },
    {
      path: '/tasks/:id',
      name: 'task',
      component: TaskPage
    }
  ]
})

export default router
