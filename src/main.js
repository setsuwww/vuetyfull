import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/app.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar, faHeart, faTag } from '@fortawesome/free-solid-svg-icons'
library.add(faStar, faHeart, faTag)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  AOS.init({
    duration: 600,
    once: true,
  })

  router.afterEach(() => {
    AOS.refresh()
  })

  app.mount('#app')
})
