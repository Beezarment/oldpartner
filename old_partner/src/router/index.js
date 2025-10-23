import { createRouter, createWebHistory } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Home from '../front/Home.vue'
import Catalogue from '../front/Catalogue.vue'
import Product from '../front/Product.vue'
import Cart from '../front/Panier.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalogue', component: Catalogue },
  { path: '/product/:id', component: Product },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
