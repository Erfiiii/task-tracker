import { inject } from 'vue'
import type { ClientType } from './types'

export const useClient = () => {
  return inject<ClientType>('client') as ClientType
}
