import { createRouter, createWebHistory } from 'vue-router'

import Home from './front/Home.vue'
import Catalogue from './front/Catalogue.vue'
import ProductPage from './front/ProductPage.vue'
import BrandPage from './front/BrandPage.vue'
import ProductType from './front/ProductType.vue'
import Contact from './Legal/Contact.vue'
import Us from './Legal/Us.vue'
import Engagement from './Legal/Engagement.vue'
import Payment from './Legal/Payment.vue'
import Shipping from './Legal/Shipping.vue'
import Account from './front/Account.vue'
import Wishlist from './front/Wishlist.vue'
import Login from './front/Login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalogue', name: 'Catalogue', component: Catalogue },
  { path: '/product/:id', name: 'Product', component: ProductPage, props: true },
  { path: '/marques', name: 'BrandPage', component: BrandPage },
  { path: '/productType', name: 'ProductType', component: ProductType },
  { path: '/legal/us', name: 'Us', component: Us },
  { path: '/legal/engagements', name: 'Engagement', component: Engagement },
  { path: '/services/paiement', name: 'Payment', component: Payment },
  { path: '/services/livraison', name: 'Shipping', component: Shipping },
  { path: '/contact', name: 'Contact', component: Contact },

  { path: '/login', name: 'Login', component: Login },

  { path: '/account', name: 'Account', component: Account, meta: { requiresAuth: true } },
  { path: '/wishlist', name: 'Wishlist', component: Wishlist, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (!token) return next('/login')
  }
  next()
})

export default router
