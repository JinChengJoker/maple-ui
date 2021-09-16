import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld,
    }
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
