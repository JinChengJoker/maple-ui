import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Default from './docs/Default.vue'
import Switch from './docs/Switch.vue'
import Button from './docs/Button.vue'
import Dialog from './docs/Dialog.vue'
import Tabs from './docs/Tabs.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: Default,
        },
        {
          path: 'switch',
          component: Switch,
        },
        {
          path: 'button',
          component: Button,
        },
        {
          path: 'dialog',
          component: Dialog,
        },
        {
          path: 'tabs',
          component: Tabs,
        }
      ]
    },
  ]
})

export default router;