import { createRouter, createWebHistory } from 'vue-router'

import Home from '../front/Home.vue'
import Catalogue from '../front/Catalogue.vue'
import Product from '../front/Product.vue'
import Cart from '../front/Panier.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalogue', name: 'Catalogue', component: Catalogue },

  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true,
  },

  { path: '/cart', name: 'Cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
