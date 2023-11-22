import type { TaskStatus } from '@/client/types'

export interface StatusDetail {
  value: TaskStatus
  label: string
  color: string
  backgroundColor: string
}
