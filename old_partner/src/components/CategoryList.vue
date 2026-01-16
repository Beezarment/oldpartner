<template>
  <v-row dense>
    <v-col
      v-for="c in categories"
      :key="c.title"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <CategoryCard
        :title="c.title"
        :image="c.image"
        :redirectParam="c.redirectParam"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import CategoryCard from './CategoryCard.vue'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})
</script>
