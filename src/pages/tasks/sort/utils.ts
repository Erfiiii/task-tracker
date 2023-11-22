import type { SortType } from '@/client/types'
import { i18n } from '@/locale'

export const sortDetails: Record<
  SortType,
  {
    value: SortType
    label: string
  }
> = {
  createdAt: {
    value: 'createdAt',
    label: i18n.global.t('task.created_at')
  },
  dueDate: {
    value: 'createdAt',
    label: i18n.global.t('task.due_date')
  },
  title: {
    value: 'title',
    label: i18n.global.t('task.title')
  }
}

export const sortValues = Object.values(sortDetails)
