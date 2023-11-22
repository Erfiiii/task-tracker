import type { FilterType } from '@/client/types'
import { i18n } from '@/locale'

export const statusFilterDetails: Record<
  FilterType,
  {
    value: FilterType
    label: string
  }
> = {
  ALL: {
    value: 'ALL',
    label: i18n.global.t('filters.all')
  },
  COMPLETED: {
    value: 'COMPLETED',
    label: i18n.global.t('status.completed')
  },
  IN_PROGRESS: {
    value: 'IN_PROGRESS',
    label: i18n.global.t('status.in_progress')
  },
  PENDING: {
    value: 'PENDING',
    label: i18n.global.t('status.pending')
  }
}

export const stautsFilters = Object.values(statusFilterDetails)
