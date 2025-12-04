<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Ma Wishlist</h1>

    <v-row v-if="items.length > 0" dense>
      <v-col
        v-for="item in items"
        :key="item.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <v-card class="rounded-xl pa-3" elevation="3">
          <v-img :src="item.image" height="180" class="rounded-lg" />

          <div class="mt-3">
            <h3 class="text-subtitle-1 font-weight-bold">{{ item.name }}</h3>
            <p class="text-body-2 text-grey-darken-1">{{ item.brand }}</p>
            <p class="text-h6 font-weight-bold mt-2">{{ item.price }}€</p>
          </div>

          <v-btn
            color="red"
            variant="tonal"
            block
            rounded
            class="mt-3"
            @click="removeFromWishlist(item.id)"
          >
            Retirer
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-alert v-else type="info" color="#4a3a2a" class="mt-6">Aucun article dans ta wishlist pour le moment.</v-alert>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    name: 'Figurine Samouraï Vintage',
    brand: 'Old Partner',
    price: 49.99,
    image: '/example1.jpg'
  },
  {
    id: 2,
    name: 'Katana Miniature 1980',
    brand: 'Retro Steel',
    price: 89.99,
    image: '/example2.jpg'
  }
])

const removeFromWishlist = (id) => {
  items.value = items.value.filter((item) => item.id !== id)
}
</script>

<style scoped>
</style>