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
  name: "Home",
  components: {
    CircleBrand,
    ProductTypeGrid,
    ProductCard
  },
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: "Figurine Marvel",
          description: "Collection exclusive limitée.",
          price: 39.99,
          image: "/images/marvel-figurine.jpg",
        },
        {
          id: 2,
          name: "Set LEGO Star Wars",
          description: "Pour les fans de la saga galactique.",
          price: 59.9,
          image: "/images/lego-sw.jpg",
        },
        {
          id: 3,
          name: "Batman Collector",
          description: "Édition spéciale vintage.",
          price: 79.5,
          image: "/images/dc-batman.jpg",
        },
        {
          id: 4,
          name: "Peluche rétro 90's",
          description: "Douce et nostalgique.",
          price: 24.99,
          image: "/images/old-teddy.jpg",
        },
      ],
      latestArrivals: [
        {
          id: 5,
          name: "Maquette Ferrari 1980",
          price: 44.99,
          image: "ferrari.jpg",
        },
        {
          id: 6,
          name: "Jeu GameBoy Color",
          price: 69.9,
          image: "gameboy.jpg",
        },
        {
          id: 7,
          name: "Transformers édition 90s",
          price: 54.5,
          image: "transformer.jpg",
        },
      ],
      productTypes: [
        { name: "Figurines" },
        { name: "Maquettes" },
        { name: "Peluches" },
      ],
      brands: [
        { id: 1, logo: "logo-marvel.jpeg" },
        { id: 2, logo: "logo-lego.png" },
        { id: 3, logo: "logo-dc.png" },
        { id: 4, logo: "logo-bandai.png" },
      ],
    };
  },
};
</script>

<style scoped>
h2, h3 {
  color: #4a3a2a;
}
</style>
