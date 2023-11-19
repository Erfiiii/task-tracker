import type { App } from 'vue'
import type { ClientType } from './types'

export const clientProvider = {
  install: (app: App, options: ClientType) => {
    app.provide('client', options)
  }
}

export { client } from './local-storage-client'
