<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn color="primary" @click="clic">Hello world</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    clic() {
      alert('Bouton cliqué !')
    }
  }
}
</script>
