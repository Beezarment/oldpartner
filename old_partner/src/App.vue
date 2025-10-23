<template>
  <v-app>
    <Navbar />
    <v-main class="d-flex flex-column min-h-screen">
      <router-view class="flex-grow-1" />

      <Footer class="mt-auto" />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Navbar, Footer }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

v-main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.mt-auto {
  margin-top: auto;
}
</style>

