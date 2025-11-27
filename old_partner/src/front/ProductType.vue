<template>
  <div class="pa-6">
    <h1 class="mb-6">Types de produits</h1>

    <v-row dense justify="center">
      <v-col
        v-for="type in types"
        :key="type.name"
        cols="12" sm="6" md="4" lg="3"
        class="d-flex justify-center"
      >
        <CategoryCard
          :title="type.name"
          :image="type.logo"
          :redirectParam="type.slug"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import CategoryCard from '../components/CategoryCard.vue'

const types = [
  { name: "Figurines", logo: "/images/types/figurine.png", slug: "figurines" },
  { name: "Maquettes", logo: "/images/types/maquette.png", slug: "maquettes" },
  { name: "Comics", logo: "/images/types/comics.png", slug: "comics" },
  { name: "Accessoires", logo: "/images/types/accessoire.png", slug: "accessoires" },
]
</script>
