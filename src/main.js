import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// ** Iconos MDI **
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Pinia
import { createPinia } from 'pinia'

// Router
import router from './router'

// Axios (opcional)
import axios from 'axios'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// inyectar axios en globalProperties `this.$api`
app.config.globalProperties.$api = axios.create({
  baseURL: 'https://tu-api.com',
  timeout: 10000,
})

app
  .use(vuetify)
  .use(createPinia())
  .use(router)
  .mount('#app')

