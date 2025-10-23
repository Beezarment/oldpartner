<template>
  <v-container fluid>
    <h1 class="text-h4 font-weight-medium mb-16 bold">
      Catalogue de produits
    </h1>

    <v-row class="mb-6" align="center" justify="space-evenly">
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="search"
          label="Rechercher un produit"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          clearable
          rounded
        />
      </v-col>

      <v-col cols="12" sm="3">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Catégorie"
          variant="outlined"
          clearable
          rounded
        />
      </v-col>

      <v-col cols="12" sm="3">
        <v-select
          v-model="sortOption"
          :items="sortOptions"
          label="Trier par"
          variant="outlined"
          rounded
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <v-card elevation="3" class="rounded-xl">
          <v-img
            :src="product.image"
            height="200"
            cover
          ></v-img>

          <v-card-title class="text-truncate">{{ product.name }}</v-card-title>

          <v-card-subtitle class="text-brown-darken-4 font-weight-bold">
            {{ product.price.toFixed(2) }} €
          </v-card-subtitle>

          <v-card-text class="text-body-2 text-grey-darken-1">
            {{ product.category }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="brown-darken-3" variant="flat" block>
              Voir le produit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
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
export default {
  name: "Catalogue",
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
        {
          id: 1,
          name: "Voiture miniature rouge",
          price: 12.99,
          category: "Voitures",
          image: "image1",
        },
        {
          id: 2,
          name: "Peluche ours brun",
          price: 18.5,
          category: "Peluches",
          image: "image2",
        },
        {
          id: 3,
          name: "Lego Space Set",
          price: 49.9,
          category: "Jeux de construction",
          image: "image3",
        },
        {
          id: 4,
          name: "Poupée rétro 80’s",
          price: 22.3,
          category: "Poupées",
          image: "image4",
        },
        {
          id: 5,
          name: "Camion de pompier ancien",
          price: 29.99,
          category: "Voitures",
          image: "images5",
        },
      ],
    };
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(p => p.category))];
    },
    filteredProducts() {
      let result = this.products;

      if (this.search) {
        result = result.filter(p =>
          p.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory);
      }

      if (this.sortOption === "price-asc") result.sort((a, b) => a.price - b.price);
      if (this.sortOption === "price-desc") result.sort((a, b) => b.price - a.price);
      if (this.sortOption === "name-asc") result.sort((a, b) => a.name.localeCompare(b.name));
      if (this.sortOption === "name-desc") result.sort((a, b) => b.name.localeCompare(a.name));

      return result;
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
</style>
