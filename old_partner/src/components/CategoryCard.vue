<template>
  <v-card
    class="pa-4 d-flex flex-column align-center justify-center category-card"
    @click="goToCategory"
    elevation="4"
    rounded="xl"
  >
    <v-img
      :src="image"
      max-width="120"
      max-height="120"
      contain
      class="mb-3"
    ></v-img>

    <h3 class="text-center">{{ title }}</h3>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: String,
  image: String,
  redirectParam: String,
})

const goToCategory = () => {
  router.push({
    name: 'Catalogue',
    query: { filter: props.redirectParam }
  })
}
</script>

<style scoped>
.category-card {
  width: 90%;
  height: 460px;
  cursor: pointer;
  transition: 0.25s;
}

.category-card:hover {
  transform: scale(1.05);
}
</style>
