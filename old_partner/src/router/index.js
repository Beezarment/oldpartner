import { createRouter, createWebHistory } from 'vue-router'

import Home from '../front/Home.vue'
import Catalogue from '../front/Catalogue.vue'
import ProductPage from '../front/ProductPage.vue'
import Cart from '../front/Panier.vue'
import BrandPage from '../front/BrandPage.vue'
import ProductType from '../front/ProductType.vue'
import Contact from '../Legal/Contact.vue'
import Us from '../Legal/Us.vue'
import Engagement from '../Legal/Engagement.vue'
import Payment from '../Legal/Payment.vue'
import Shipping from '../Legal/Shipping.vue'
import Account from '../front/Account.vue'
import wishlist from '../front/Wishlist.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/catalogue', name: 'Catalogue', component: Catalogue },
  { path: '/product/:id', name: 'Product', component: ProductPage, props: true, },
  { path: '/marques', name: 'BrandPage', component: BrandPage, props: true, },
  { path: '/productType', name: 'ProductType', component: ProductType, props: true, },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/legal/us', name: 'Us', component: Us},
  { path: '/legal/engagements', name: 'Engagement', component: Engagement},
  { path: '/services/paiement', name: 'Payment', component:Payment},
  { path: '/services/livraison', name: 'Shipping', component: Shipping},
  { path: '/contact', name: 'Contact', component: Contact},
  { path: '/account', name: 'Account', component: Account},
  { path: '/wishlist', name: 'Wishlist', component: wishlist},
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
