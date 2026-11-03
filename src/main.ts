import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createHead } from '@unhead/vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdiInformation, mdiArrowDown, mdiArrowUp } from '@mdi/js'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'

import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

/* optional italic styles */
import '@fontsource/roboto/100-italic.css'
import '@fontsource/roboto/300-italic.css'
import '@fontsource/roboto/400-italic.css'
import '@fontsource/roboto/500-italic.css'
import '@fontsource/roboto/700-italic.css'
import '@fontsource/roboto/900-italic.css'

const app = createApp(App)

const head = createHead()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      information: mdiInformation,
      arrowDown: mdiArrowDown,
      arrowUp: mdiArrowUp
    },
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light'
  }
})

app.use(createPinia()).use(router).use(head).use(vuetify).mount('#app')
