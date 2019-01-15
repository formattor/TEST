import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/haha',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Container
    },
    {
      path: '/',
      component: Login
    }
  ]
})
