import Vue from 'vue'
import Router from 'vue-router'
import home from './views/Home.vue'
import workapply from './views/Workapply.vue'
import activity from './views/Activity.vue'
import setup from './views/Setup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home

    },
    {
      path: '/workapply',
      name: 'workapply',
      component: workapply

    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/setup',
      name: 'setup',
      component: setup
    }
  ]
})
