<template>
  <div>
    <v-app-bar
      flat
      color="white"
      fixed
      height="70"
      elevation="1"
    >
      <v-container class="d-flex align-center justify-space-between px-2" fluid>
        <div class="d-flex align-center">
          <v-img
            src="/tab_logo.png"
            alt="Old Partner Logo"
            height="90"
            width="90"
          />
          <span class="text-h4 text-brown-darken-4 logo-text">
            OLD<br>PARTNER
          </span>
        </div>

        <v-text-field
          v-model="search"
          class="search-bar mx-4"
          variant="outlined"
          density="compact"
          placeholder="Rechercher des jouets, marques, catégories..."
          dense
          hide-details
          rounded
          clearable
          append-inner-icon="mdi-magnify"
        ></v-text-field>

        <div class="d-flex align-center">
          <v-btn icon variant="text">
            <v-img src="/langue.png" width="40" alt="Langue" />
          </v-btn>
          <v-btn icon variant="text">
            <v-img src="/wishlist.png" width="30" alt="Wishlist" />
          </v-btn>
          <v-btn icon variant="text">
            <v-img src="/account.png" width="40" alt="Compte" />
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-toolbar
      flat
      color="brown-darken-4"
      height="48"
      class="toolbar-menu d-none d-md-flex"
    >
      <v-container class="d-flex justify-center">
        <v-btn
          v-for="item in menuItems"
          :key="item.text"
          variant="text"
          class="text-white text-uppercase font-weight-medium mx-2"
          @click="goTo(item.link)"
        >
          {{ item.text }}
        </v-btn>
      </v-container>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
      width="220"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.text"
          @click="goTo(item.link)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div style="height: 118px;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const search = ref('')
const drawer = ref(false)
const router = useRouter()

const menuItems = [
  { text: 'Derniers arrivages', link: '/' },
  { text: 'Catégories', link: '/catalogue' },
  { text: 'Marques', link: '/marques' },
  { text: 'Types de produits', link: '/types' },
  { text: 'Vendre vos jouets', link: '/vendre' },
  { text: 'Contact', link: '/contact' },
]

const goTo = (link) => {
  router.push(link)
  drawer.value = false
}
</script>

<style scoped>
.search-bar {
  max-width: 600px;
  flex: 1;
}
.text-brown-darken-4 {
  color: #4e342e !important;
}

.logo-text {
  font-weight: 900;
  letter-spacing: 1px;
}

.toolbar-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 10;
}

</style>
