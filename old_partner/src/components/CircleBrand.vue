<template>
  <v-row justify="center">
    <v-col
      v-for="brand in brands"
      :key="brand.id"
      cols="6"
      sm="3"
      class="d-flex justify-center"
    >
      <v-card
        height="160"
        width="160"
        class="overflow-hidden rounded-circle elevation-3 brand-card"
      >
        <v-img
          :src="brand.logo"
          :alt="brand.name || 'Logo marque'"
          height="100%"
          width="100%"
          cover
          class="brand-image"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  brands: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.brand-card {
  transition: transform 0.3s ease;
}
.brand-card:hover {
  transform: scale(1.05);
}
.brand-image {
  object-fit: cover;
}
</style>