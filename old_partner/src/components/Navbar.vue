<template>
  <div>
    <!-- NAVBAR -->
    <v-app-bar flat color="white" fixed height="70" elevation="1">
      <v-container class="d-flex align-center justify-space-between px-2" fluid>

        <!-- LOGO (desktop only) -->
        <div class="logo-desktop">
          <v-img src="/tab_logo.png" alt="Old Partner Logo" height="90" width="90" />
          <span class="text-h4 text-brown-darken-4 logo-text">
            OLD<br>PARTNER
          </span>
        </div>

        <!-- BURGER MENU (mobile only) -->
        <v-btn
          icon
          variant="text"
          class="d-flex d-md-none burger-mobile"
          @click="drawerRight = true"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>


        <!-- SEARCH BAR -->
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

        <!-- DESKTOP ACTION BUTTONS -->
        <div class="d-none d-md-flex align-center">
          <v-btn icon variant="text">
            <v-img src="/langue.png" width="40" alt="Langue" />
          </v-btn>
          <v-btn icon variant="text" @click="goTo('/wishlist')">
            <v-img src="/wishlist.png" width="30" alt="Panier" />
          </v-btn>
          <v-btn icon variant="text" @click="goTo('/account')">
            <v-img src="/account.png" width="40" alt="Compte" />
          </v-btn>
        </div>

      </v-container>
    </v-app-bar>

    <!-- TOOLBAR DESKTOP -->
    <v-toolbar flat color="brown-darken-4" height="48" class="toolbar-menu d-none d-md-flex">
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

    <!-- MOBILE DRAWER -->
    <v-navigation-drawer
      v-model="drawerRight"
      location="right"
      temporary
      width="220"
    >
      <v-list>
        <!-- Mobile action buttons -->
        <v-list-item>
          <v-btn icon variant="text">
            <v-img src="/langue.png" width="40" alt="Langue" />
          </v-btn>
          <v-btn icon variant="text" @click="goTo('/wishlist')">
            <v-img src="/wishlist.png" width="30" alt="Panier" />
          </v-btn>
          <v-btn icon variant="text" @click="goTo('/account')">
            <v-img src="/account.png" width="40" alt="Compte" />
          </v-btn>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <!-- MENU ITEMS -->
        <v-list-item
          v-for="item in menuItems"
          :key="item.text"
          @click="goTo(item.link)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Spacer -->
    <div style="height: 118px;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const search = ref('')
const drawerRight = ref(false)
const router = useRouter()

const menuItems = [
  { text: 'Derniers arrivages', link: '/' },
  { text: 'Catégories', link: '/catalogue' },
  { text: 'Marques', link: '/marques' },
  { text: 'Types de produits', link: '/productType' },
]

const goTo = (link) => {
  router.push(link)
  drawerRight.value = false
}
</script>

<style>
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

@media (max-width: 650px) {
  .logo-desktop {
    display: none !important;
  }
}
</style>
