import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

/**
 * Obviously overkill for this exercise, but in real life, feature routes should be lazy
 * Also, there would be a parent "services" route and these would be children
 */
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import('../views/catalog/Catalog.vue')
  },
  {
    path: '/new',
    name: 'New Service',
    component: () => import('../views/catalog/NewService.vue')
  },
  {
    path: '/:id',
    name: 'Service Detail',
    props: true,
    component: () => import('../views/catalog/ServiceDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
