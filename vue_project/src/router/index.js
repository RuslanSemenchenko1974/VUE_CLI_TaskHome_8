import { createRouter, createWebHistory } from 'vue-router'
import page1 from '@/pages/page1'
import page2 from '@/pages/page2'
import page3 from '@/pages/page3'
import page4 from '@/pages/page4'
import page5 from '@/pages/page5'
import notFound from '@/pages/notFound'

const routes = [
  {
    path:'/',
    name: 'page1',
    component: page1
  },
   {
    path:'/page2',
    name: 'page2',
    component: page2
  },
  {
    path:'/page3',
    name: 'page3',
    component: page3
  }, {
    path:'/page4',
    name: 'page4',
    component: page4
  }, {
    path:'/page5',
    name: 'page5',
    component: page5
  },
  {
    path:'/:CatchAll(.*)',
    name: 'notFound',
    component: notFound
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
