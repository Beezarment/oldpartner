<template>
  <v-row dense justify="center">
    <v-col
      v-for="category in categories"
      :key="category.name"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      class="d-flex justify-center"
    >
      <CategoryCard
        :title="category.name"
        :image="category.logo"
        :redirectParam="category.slug"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue'

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})
</script>