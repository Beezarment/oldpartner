<template>
  <v-container fluid class="pa-0">

    <v-sheet color="#f2d7b3" class="py-16 text-center ma-0">
      <h2 class="text-h5 font-weight-medium mb-2">
        Revivez votre enfance une nouvelle fois avec vos anciens partenaires de jeux.
      </h2>
    </v-sheet>

    <v-container class="mt-6">
      <h3 class="text-h6 mb-4">Jouets les plus populaires</h3>
      <v-row justify="space-between">
        <v-col
          v-for="n in 5"
          :key="'popular-' + n"
          cols="12" sm="2"
          class="d-flex justify-center"
        >
          <v-sheet
            width="100%"
            height="100"
            class="d-flex align-center justify-center bg-grey-lighten-3"
          >
            {{ n }}
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-10">
      <h3 class="text-h6 mb-4">Dernières arrivées</h3>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="'arriv-' + n"
          cols="12" sm="4"
        >
          <v-sheet height="150" class="bg-grey-lighten-3"></v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-10">
      <h3 class="text-h6 mb-4">Types de produits</h3>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="'type-' + n"
          cols="12" sm="4"
        >
          <v-sheet height="150" class="bg-grey-lighten-3"></v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-10">
      <h3 class="text-h6 mb-4">Marques</h3>
      <v-row justify="center">
        <v-col
          v-for="n in 4"
          :key="'brand-' + n"
          cols="6" sm="3"
          class="d-flex justify-center"
        >
          <v-sheet
            class="bg-grey-lighten-3 d-flex align-center justify-center"
            height="200"
            width="60%"
          >
            Logo {{ n }}
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style scoped>
h2, h3 {
  color: #4a3a2a;
}
</style>
