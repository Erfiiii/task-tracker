import type { Task, TaskStatus } from './types'

const getItemFromLocalStorage = async <T>(key: string, defaultValue: T) => {
  const item = localStorage.getItem(key)
  return item ? (JSON.parse(item) as T) : defaultValue
}

const addItemToLocalStorage = async <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getTasks = async () => {
  const tasks = await getItemFromLocalStorage<Task[]>('tasks', [])
  return tasks
}

const getTask = async (id: string) => {
  const tasks = await getItemFromLocalStorage<Task[]>('tasks', [])
  return tasks.find((item) => item.id === id)
}

const addTask = async (title: string, description: string, dueDate: Date) => {
  const newTask: Task = {
    id: 'id' + new Date().getTime(),
    title,
    description,
    status: 'PENDING',
    dueDate,
    createdAt: new Date()
  }
  const tasks = await getItemFromLocalStorage<Task[]>('tasks', [])
  const newTasks = tasks.concat(newTask)
  await addItemToLocalStorage<Task[]>('tasks', newTasks)
}

const deleteTask = async (id: string) => {
  const tasks = await getItemFromLocalStorage<Task[]>('tasks', [])
  const filteredTasks = tasks.filter((task) => task.id !== id)
  await addItemToLocalStorage('tasks', filteredTasks)
}

const changeTaskStatus = async (id: string, status: TaskStatus) => {
  const tasks = await getItemFromLocalStorage<Task[]>('tasks', [])
  const task = tasks.find((task) => task.id === id)
  if (!task) {
    throw new Error(`There is no task with id: ${id}`)
  }
  task.status = status

  await addItemToLocalStorage<Task[]>('tasks', tasks)
}


export const localStorageClient = {
    getTasks,
    getTask,
    addTask,
    changeTaskStatus,
    deleteTask,
}