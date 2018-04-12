import Vue from 'vue'
import Router from 'vue-router'
import indexTheBack from '@/components/indexTheBack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexTheBack',
      component: indexTheBack
    }
  ]
})
