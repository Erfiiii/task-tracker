import type { TaskStatus } from '@/client/types'
import { i18n } from '@/locale'
import type { StatusDetail } from './types'

export const statusDetails: Record<TaskStatus, StatusDetail> = {
  COMPLETED: {
    color: '#81290E',
    value: 'COMPLETED',
    label: i18n.global.t('status.completed'),
    backgroundColor: '#FAD0C6'
  },
  IN_PROGRESS: {
    color: '#8F4F00',
    value: 'IN_PROGRESS',
    label: i18n.global.t('status.in_progress'),
    backgroundColor: '#FFE4C2'
  },
  PENDING: {
    color: '#14367B',
    value: 'PENDING',
    label: i18n.global.t('status.pending'),
    backgroundColor: '#CAD9F6'
  }
}
