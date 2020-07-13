import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import info from '@/components/info'
import contribution from '@/components/contribution'
import city from '@/components/city'
import region from '@/components/region'
import map1 from '@/components/map1'
import organization from '@/components/organization'
import login from '@/components/login'
import people from '@/components/people'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'organization',
      component: organization
    }, {
      path: '/info',
      name: 'info',
      component: info
    }, {
      path: '/contribution',
      name: 'contribution',
      component: contribution
    }, {
      path: '/city',
      name: 'city',
      component: city
    }, {
      path: '/region',
      name: 'region',
      component: region
    }, {
      path: '/map1',
      name: 'map1',
      component: map1
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/people',
      name: 'people',
      component: people
    },
  ]
})
