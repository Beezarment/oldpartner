<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Mon Compte</h1>

    <v-row>
      <v-col cols="12" md="2">
        <v-list nav class="pa-0">
          <v-list-item
            v-for="item in menu"
            :key="item.text"
            @click="selected = item.key"
            :class="selected === item.key ? 'bg-brown-darken-1 text-white' : ''"
            class="rounded-lg mb-2"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
        <div v-if="selected === 'profile'">
          <h2 class="text-h5 font-weight-bold mb-4">Informations personnelles</h2>
          <v-text-field label="Nom" variant="outlined" density="comfortable" class="mb-4" />
          <v-text-field label="Email" variant="outlined" density="comfortable" class="mb-4" />
          <v-text-field label="Mot de passe" type="password" variant="outlined" density="comfortable" class="mb-4" />
          <v-btn color="brown-darken-1" class="text-white" rounded>Enregistrer</v-btn>
        </div>

        <div v-if="selected === 'orders'">
          <h2 class="text-h5 font-weight-bold mb-4">Mes commandes</h2>
          <v-alert color="#4e342e">Aucune commande pour le moment.</v-alert>
        </div>

        <div v-if="selected === 'favorites'">
          <h2 class="text-h5 font-weight-bold mb-4">Mes favoris</h2>
          <v-alert color="#4e342e">Aucun article favori.</v-alert>
        </div>

        <div v-if="selected === 'settings'">
          <h2 class="text-h5 font-weight-bold mb-4">Paramètres du compte</h2>
          <v-switch label="Recevoir les notifications" class="mb-4" />
          <v-switch label="Thème sombre" class="mb-4" />
          <v-btn color="brown-darken-1" class="text-white" rounded>Mettre à jour</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref('profile')

const menu = [
  { text: 'Profil', key: 'profile' },
  { text: 'Mes commandes', key: 'orders' },
  { text: 'Mes favoris', key: 'favorites' },
  { text: 'Paramètres', key: 'settings' }
]
</script>

<style scoped>
</style>
