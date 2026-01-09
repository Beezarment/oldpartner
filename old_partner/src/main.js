import { createApp } from 'vue'
import App from './App.vue'
import router from './index.js'
import vuetify from './vuetify'
import 'vuetify/styles'

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
