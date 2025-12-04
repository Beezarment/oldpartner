<template>
  <div class="pa-6">
    <h1 class="mb-6">Types de produits</h1>
    <CategoryList :categories="types" />
  </div>
</template>

<script>
import CategoryList from '../components/PresentationCard.vue'

export default {
  name: "BrandPage",
  components: {
    CategoryList
  },
  data() {
    const types = [
      { name: "Figurines", logo: "/images/types/figurine.png", slug: "figurines" },
      { name: "Maquettes", logo: "/images/types/maquette.png", slug: "maquettes" },
      { name: "Comics", logo: "/images/types/comics.png", slug: "comics" },
      { name: "Accessoires", logo: "/images/types/accessoire.png", slug: "accessoires" },
    ]
    return {
      types
    }
  }
}
</script>
