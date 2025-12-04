<template>
  <div class="pa-6">
    <h1 class="mb-6">Marques</h1>
    <CategoryList :categories="marques" />
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
    const marques = [
      { name: "Lego", logo: "/images/marques/lego.png", slug: "lego" },
      { name: "Hasbro", logo: "/images/marques/hasbro.png", slug: "hasbro" },
      { name: "Mattel", logo: "/images/marques/mattel.png", slug: "mattel" },
      { name: "Bandai", logo: "/images/marques/bandai.png", slug: "bandai" },
    ]
    return {
      marques
    }
  }
}
</script>

