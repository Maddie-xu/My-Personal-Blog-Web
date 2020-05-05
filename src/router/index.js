import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import App from '../App.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      meta: {
        title: '博客首页'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '后台登录'
      }
    }
  ]
})

export default router
