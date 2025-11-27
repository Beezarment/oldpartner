<template>
  <div class="pa-6">
    <h1 class="mb-6">Marques</h1>

    <v-row dense justify="center">
      <v-col
        v-for="marque in marques"
        :key="marque.name"
        cols="12" sm="6" md="4" lg="3"
        class="d-flex justify-center"
      >
        <CategoryCard
          :title="marque.name"
          :image="marque.logo"
          :redirectParam="marque.slug"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import CategoryCard from '../components/CategoryCard.vue'

const marques = [
  { name: "Lego", logo: "/images/marques/lego.png", slug: "lego" },
  { name: "Hasbro", logo: "/images/marques/hasbro.png", slug: "hasbro" },
  { name: "Mattel", logo: "/images/marques/mattel.png", slug: "mattel" },
  { name: "Bandai", logo: "/images/marques/bandai.png", slug: "bandai" },
]
</script>
