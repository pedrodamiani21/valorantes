import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
    }
  },
  {
    path: '/blog/:id/:title',
    name: 'Post',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PostView.vue')
    }
  },
  {
    path: '/partidas',
    name: 'Partidas',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/MatchView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
