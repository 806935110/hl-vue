import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Login= r => require.ensure([],()=>r(require('@/pages/Login.vue')),'login')
const User = r=>require.ensure([],()=>(require('@/pages/User.vue')),'user')

export default new Router({
	// mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
    	name:'Login',
    	component:Login
    },
    {
    	path:'/user',
    	name:'User',
    	component:User
    }
  ]
})
