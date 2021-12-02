import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/Products.vue')
  },
  {
    path: '/product/new',
    name: 'ProductNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductsNew.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductsEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductsEdit.vue')
  },
  {
    path: '/product/show/:id',
    name: 'ProductsView',
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductsView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/Categories.vue')
  },
  {
    path: '/category/new',
    name: 'CategoriesNew',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoriesNew.vue')
  },
  {
    path: '/category/:id',
    name: 'CategoriesEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoriesEdit.vue')
  },
  {
    path: '/category/show/:id',
    name: 'CategoriesView',
    component: () => import(/* webpackChunkName: "about" */ '../views/categories/CategoriesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
