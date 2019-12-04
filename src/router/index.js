import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import item from '@/components/item'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
	  { path: '*', redirect: '/page-1' }, 
    {
      path: '/page-:page',
      name: 'index',
      component: index
    },
		{
      path: '/item-:id',
      name: 'item',
      component: item
    },

  ]
})
