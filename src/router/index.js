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
    component: () => import('../views/product/Products.vue')
  },
  {
    path: '/product/new',
    name: 'ProductNew',
    component: () => import('../views/product/ProductsNew.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductsEdit',
    component: () => import('../views/product/ProductsEdit.vue')
  },
  {
    path: '/product/show/:id',
    name: 'ProductsView',
    component: () => import('../views/product/ProductsView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/categories/Categories.vue')
  },
  {
    path: '/category/new',
    name: 'CategoriesNew',
    component: () => import('../views/categories/CategoriesNew.vue')
  },
  {
    path: '/category/:id',
    name: 'CategoriesEdit',
    component: () => import('../views/categories/CategoriesEdit.vue')
  },
  {
    path: '/category/show/:id',
    name: 'CategoriesView',
    component: () => import('../views/categories/CategoriesView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
