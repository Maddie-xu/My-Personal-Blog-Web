import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '../App.vue'
import Login from '../views/Login'
import Home from '../views/Home'
import Backstage from '../views/Backstage'
import BlogList from '../components/Mains/BlogList'
import Blog from '../components/Mains/Blog'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: '/Home',
      children: [
        {
          path: 'Home',
          component: BlogList,
          meta: {
            title: '博客首页'
          }
        },
        {
          path: 'Blog',
          component: Blog,
          meta: {
            title: '博客详情'
          }
        }
      ]
    },
    {
      path: '/Login',
      component: Login,
      meta: {
        title: '后台登录'
      }
    },
    {
      path: '/Backstage',
      component: Backstage,
      name: Backstage,
      meta: {
        title: '博客后台'
      }
    },
    {
      path: '*',
      redirect: '/Home'
    }
  ]
})

export default router
