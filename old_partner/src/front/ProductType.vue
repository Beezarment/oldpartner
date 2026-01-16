<template>
  <div class="pa-6">
    <h1 class="mb-6">Types de produits</h1>
    <CategoryList
      :categories="types.map(t => ({
        title: t.name,
        image: t.image,
        redirectParam: t.name
      }))"
    />
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList.vue'

export default {
  name: "ProductTypePage",
  components: { CategoryList },
  data() {
    return { productTypes: [] }
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/api/product-types')
    this.productTypes = await res.json()
  },
  computed: {
    types() { return this.productTypes }
  }
}
</script>
