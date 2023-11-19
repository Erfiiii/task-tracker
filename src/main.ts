import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './locale'
import { client, clientProvider } from './client'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(clientProvider, client)

app.mount('#app')
