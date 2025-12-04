<template>
  <v-container fluid>
    <h1 class="text-h7 mb-16">
      Catalogue de produits
    </h1>

    <v-row class="mb-6" align="center" justify="start" dense>
      <v-col cols="12" md="4">
        <SearchField v-model="search" label="Rechercher"/>
      </v-col>
      <v-col cols="12" md="4">
        <SelectField v-model="selectedCategory" :items="categories" label="Catégorie"/>
      </v-col>
      <v-col cols="12" md="4">
        <SelectField v-model="sortOption" :items="sortOptions.map(o => o.title)" label="Trier par"/>
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

    <v-alert v-if="filteredProducts.length === 0" type="info" class="mt-6 text-center">
      Aucun produit ne correspond à votre recherche.
    </v-alert>
  </v-container>
</template>

<script>
import SearchField from "../components/SearchField.vue";
import SelectField from "../components/SelectField.vue";
import ProductCard from "../components/FeaturedProduct.vue";

export default {
  components: { SearchField, SelectField, ProductCard },
  data() {
    return {
      search: "",
      selectedCategory: null,
      sortOption: null,
      sortOptions: [
        { title: "Prix croissant", value: "price-asc" },
        { title: "Prix décroissant", value: "price-desc" },
        { title: "Nom (A-Z)", value: "name-asc" },
        { title: "Nom (Z-A)", value: "name-desc" },
      ],
      products: [
        { id: 1, name: "Voiture miniature rouge", price: 12.99, category: "Voitures", image: "image1" },
        { id: 2, name: "Peluche ours brun", price: 18.5, category: "Peluches", image: "image2" },
        { id: 3, name: "Lego Space Set", price: 49.9, category: "Jeux de construction", image: "image3" },
        { id: 4, name: "Poupée rétro 80’s", price: 22.3, category: "Poupées", image: "image4" },
        { id: 5, name: "Camion de pompier ancien", price: 29.99, category: "Voitures", image: "images5" },
      ]
    };
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(p => p.category))];
    },
    filteredProducts() {
      let result = [...this.products];

      if (this.search) {
        result = result.filter(p =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory);
      }

      switch(this.sortOption) {
        case "Prix croissant": result.sort((a,b) => a.price-b.price); break;
        case "Prix décroissant": result.sort((a,b) => b.price-a.price); break;
        case "Nom (A-Z)": result.sort((a,b) => a.name.localeCompare(b.name)); break;
        case "Nom (Z-A)": result.sort((a,b) => b.name.localeCompare(a.name)); break;
      }

      return result;
    }
  }
};
</script>

<style scoped>
.v-row {
  row-gap: 16px;
}
</style>
