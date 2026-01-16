<template>
  <v-container fluid class="pa-0">
  <v-sheet color="#f2d7b3" class="py-16 text-center ma-0" height="auto" style="margin-top: -118px;">
    <h2 class="text-h5 font-weight-medium mb-2">
      Revivez votre enfance avec vos anciens partenaires de jeux.
    </h2>
  </v-sheet>

    <v-container class="mt-10">
      <h1 class="text-h7 mb-6 text-brown-darken-4">Produits en vedette</h1>
        <v-row justify="center" align="stretch" dense>
          <ProductCard
            v-for="(product, index) in featuredProducts"
            :key="product.id"
            :product="product"
            :index="index"
            :showBadge="true"
          />
        </v-row>
    </v-container>

    <v-container class="mt-12">
      <h1 class="text-h7 mb-6 text-brown-darken-4">Dernières arrivées</h1>

      <v-row justify="center" align="stretch" class="g-4" dense>
        <ProductCard
          v-for="product in latestArrivals"
          :key="product.id"
          :product="product"
          :height="500"
          md="4"
          lg="4"
        />
      </v-row>
    </v-container>

    <v-container class="mt-12">
      <h1 class="text-h7 mb-6 text-brown-darken-4">Types de produits</h1>
      <ProductTypeGrid :types="productTypes" />
    </v-container>

    <v-container class="mt-12 mb-10">
      <h1 class="text-h7 mb-6 text-brown-darken-4">Marques</h1>
      <CircleBrand :brands="brands" />
    </v-container>

  </v-container>
</template>

<script>
import CircleBrand from '../components/CircleBrand.vue'
import ProductTypeGrid from '../components/RectangleType.vue'
import ProductCard from '../components/FeaturedProduct.vue'
import PromoProduct from '../components/PromoProduct.vue'

export default {
  components: { CircleBrand, ProductTypeGrid, ProductCard },
  data() {
    return {
      products: [],
      productTypes: [],
      brands: [],
    }
  },
  async mounted() {
    const [productsRes, typesRes, brandsRes] = await Promise.all([
      fetch('http://localhost:3000/api/products'),
      fetch('http://localhost:3000/api/product-types'),
      fetch('http://localhost:3000/api/brands'),
    ])

    this.products = await productsRes.json()
    this.productTypes = await typesRes.json()
    this.brands = await brandsRes.json()
  },
  computed: {
    featuredProducts() {
      return this.products.slice(0, 4)
    },
    latestArrivals() {
      return [...this.products]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 3)
    }
  }
};
</script>

<style scoped>
h2, h3 {
  color: #4a3a2a;
}
</style>
