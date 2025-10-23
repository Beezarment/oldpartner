<template>
  <v-container class="py-10">
    <h2 class="text-center mb-6">Produits en vedette</h2>
    <v-row justify="center" align="stretch" dense>
      <v-col cols="12" sm="4" v-for="product in featuredProducts" :key="product.id">
        <v-card>
          <v-img :src="product.image" height="200px"></v-img>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="secondary" text :to="`/produit/${product.id}`">Voir le produit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const featuredProducts = [
  { id: 1, name: 'Figurine Marvel', description: 'Collection exclusive', image: '/images/marvel-figurine.jpg' },
  { id: 2, name: 'Set LEGO Star Wars', description: 'Pour les fans de la saga', image: '/images/lego-sw.jpg' },
  { id: 3, name: 'Batman Collector', description: 'Édition limitée', image: '/images/dc-batman.jpg' }
]
</script>
