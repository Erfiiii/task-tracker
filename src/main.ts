import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './locale'
import { localStorageClient, clientProvider } from './client'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(clientProvider, localStorageClient)

app.mount('#app')
