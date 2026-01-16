<template>
  <v-container class="py-10">
    <h1 class="text-h4 font-weight-bold mb-6">Mon Compte</h1>

    <v-row>
      <!-- Menu latéral -->
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

      <v-col cols="12" md="4" offset-md="1">
        <div v-if="selected === 'profile'">
          <h2 class="text-h5 font-weight-bold mb-4">Informations personnelles</h2>
          <div class="profile-info mb-4">
            <h3 class="text-subtitle-1 font-weight-medium mb-1">Email :</h3>
            <p class="text-body-1 text-brown-darken-3">{{ user?.email }}</p>
          </div>
          <v-btn
            color="brown-darken-1"
            class="text-white"
            rounded
            @click="handleLogout"
          >
            Déconnexion
          </v-btn>
        </div>

        <div v-if="selected === 'orders'">
          <h2 class="text-h5 font-weight-bold mb-4">Mes commandes</h2>
          <v-alert color="#4e342e">Aucune commande pour le moment.</v-alert>
        </div>

        <div v-if="selected === 'favorites'">
          <h2 class="text-h5 font-weight-bold mb-4">Mes favoris</h2>
          <v-alert color="#4e342e">Aucun article favori.</v-alert>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuthHeaders, logout as logoutService } from '../../services/api.js'

const router = useRouter()
const selected = ref('profile')
const user = ref(null)

const menu = [
  { text: 'Profil', key: 'profile' },
  { text: 'Mes commandes', key: 'orders' },
  { text: 'Mes favoris', key: 'favorites' },
]

async function fetchUser() {
  try {
    const res = await fetch('http://localhost:3000/api/users/me', {
      headers: getAuthHeaders()
    })
    if (!res.ok) throw new Error('Impossible de récupérer les infos utilisateur')
    user.value = await res.json()
  } catch (err) {
    console.error(err)
    logoutService()
  }
}

function handleLogout() {
  logoutService()
}

onMounted(() => {
  fetchUser()
})
</script>

<style scoped>
.profile-info {
  background-color: #efebe9;
  padding: 16px;
  border-radius: 12px;
}
.profile-info h3 {
  margin: 0;
  font-weight: 500;
}
.profile-info p {
  margin: 0;
  word-break: break-all;
}


</style>