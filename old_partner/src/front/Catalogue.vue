<template>
  <v-container fluid>
    <h1 class="text-h7 mb-16">
      Catalogue de produits
    </h1>

    <v-row class="mb-6" align="center" justify="start" dense>
      <v-col cols="12" md="4">
        <SearchField
          v-model="search"
          label="Rechercher"
        />
      </v-col>

      <v-col cols="12" md="4">
        <SelectField
          v-model="selectedCategory"
          :items="categories"
          label="Catégorie"
        />
      </v-col>

      <v-col cols="12" md="4">
        <SelectField
          v-model="sortOption"
          :items="sortOptions.map(o => o.title)"
          label="Trier par"
        />
      </v-col>
    </v-row>

    <v-row justify="start" dense>
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="product.id"
        :product="product"
        :index="index"
        :showBadge="false"
      />
    </v-row>

    <v-alert
      v-if="filteredProducts.length === 0"
      type="info"
      class="mt-6 text-center"
    >
      Aucun produit ne correspond à votre recherche.
    </v-alert>
  </v-container>
</template>

<script>
import SearchField from "../components/SearchField.vue"
import SelectField from "../components/SelectField.vue"
import ProductCard from "../components/FeaturedProduct.vue"

export default {
  components: {
    SearchField,
    SelectField,
    ProductCard
  },

  data() {
    return {
      products: [],
      search: "",
      selectedCategory: null,
      sortOption: null,
      sortOptions: [
        { title: "Prix croissant", value: "price-asc" },
        { title: "Prix décroissant", value: "price-desc" },
        { title: "Nom (A-Z)", value: "name-asc" },
        { title: "Nom (Z-A)", value: "name-desc" },
      ],
    }
  },

  async mounted() {
    try {
      const res = await fetch("http://localhost:3000/api/products")
      this.products = await res.json()

      const filterParam = this.$route.query.filter
      if (filterParam) {
        this.selectedCategory = filterParam
      }
    } catch (err) {
      console.error("Erreur chargement produits", err)
    }
  },

  computed: {
    categories() {
      return [
        ...new Set(
          this.products
            .filter(p => p.type && p.type.name)
            .map(p => p.type.name)
        )
      ]
    },

    filteredProducts() {
      let result = [...this.products]

      if (this.search) {
        const q = this.search.toLowerCase()
        result = result.filter(p =>
          p.name.toLowerCase().includes(q)
        )
      }

      if (this.selectedCategory) {
        result = result.filter(
          p => p.type?.name === this.selectedCategory
        )
      }

      switch (this.sortOption) {
        case "Prix croissant":
          result.sort((a, b) => a.price - b.price)
          break
        case "Prix décroissant":
          result.sort((a, b) => b.price - a.price)
          break
        case "Nom (A-Z)":
          result.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "Nom (Z-A)":
          result.sort((a, b) => b.name.localeCompare(a.name))
          break
      }

      return result
    }
  }
}
</script>

<style scoped>
.v-row {
  row-gap: 16px;
}
</style>
