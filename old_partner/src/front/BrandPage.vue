<template>
  <div class="pa-6">
    <h1 class="mb-6">Marques</h1>
    <CategoryList
      :categories="marques.map(b => ({
        title: b.name,
        image: b.image,
        redirectParam: b.name
      }))"
    />
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList.vue'

export default {
  name: "BrandPage",
  components: { CategoryList },
  data() {
    return { brands: [] }
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/api/brands')
    this.brands = await res.json()
  },
  computed: {
    marques() { return this.brands }
  }
}
</script>
