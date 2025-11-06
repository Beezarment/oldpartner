<template>
  <v-container class="py-10">
    <h2 class="text-h5 font-weight-medium mb-6 text-center text-brown-darken-4">
      Produits en vedette
    </h2>

    <v-row justify="center" align="stretch" dense>
      <v-col
        v-for="(product, index) in featuredProducts"
        :key="product.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <v-card elevation="4" class="rounded-xl position-relative">
          <div class="number-badge">
            {{ index + 1 }}
          </div>

          <v-img
            :src="product.image"
            height="200"
            cover
          ></v-img>

          <v-card-title class="text-truncate">
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle class="text-brown-darken-4 font-weight-bold">
            {{ product.price.toFixed(2) }} €
          </v-card-subtitle>

          <v-card-text class="text-grey-darken-1 text-body-2">
            {{ product.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="brown-darken-3"
              variant="flat"
              block
              rounded
              :to="`/product/${product.id}`"
            >
              Voir le produit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FeaturedProducts",
  data() {
    return {
      featuredProducts: [
        {
          id: 1,
          name: "Figurine Marvel",
          description: "Collection exclusive limitée.",
          price: 39.99,
          image: "/images/marvel-figurine.jpg",
        },
        {
          id: 2,
          name: "Set LEGO Star Wars",
          description: "Pour les fans de la saga galactique.",
          price: 59.9,
          image: "/images/lego-sw.jpg",
        },
        {
          id: 3,
          name: "Batman Collector",
          description: "Édition spéciale vintage.",
          price: 79.5,
          image: "/images/dc-batman.jpg",
        },
        {
          id: 4,
          name: "Peluche rétro 90's",
          description: "Douce et nostalgique.",
          price: 24.99,
          image: "/images/old-teddy.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.number-badge {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #ff7043;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 14px;
}
</style>

