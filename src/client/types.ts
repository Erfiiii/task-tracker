export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED'

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  createdAt: Date
  dueDate: Date
}

export type FilterType = 'ALL' | TaskStatus

export type SortType = 'createdAt' | 'dueDate' | 'title' 

export interface ClientType {
  getTasks: (filter?: FilterType, sort?: SortType) => Promise<Task[]>
  getTask: (id: string) => Promise<Task | undefined>
  addTask: (title: string, description: string, dueDate: Date) => Promise<void>
  changeTaskStatus: (id: string, status: TaskStatus) => Promise<void>
  deleteTask: (is: string) => Promise<void>
}
