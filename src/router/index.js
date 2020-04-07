import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    return to.hash ? { selector: to.hash } : { x: 0, y: 0 }
  },
  routes
})

export default router
