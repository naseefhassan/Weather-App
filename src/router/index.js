import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import LogIn from '../components/SignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUp
    },
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:LogIn
    }
  ]
})

export default router