<template>
  <v-container class="py-10">
    <v-row>

      <v-col cols="12" md="6">
        <v-carousel
          hide-delimiter-background
          height="400"
          cycle
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="(image, i) in product.images"
            :key="i"
          >
            <v-img
              :src="image"
              class="product-image"
              cover
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div>
          <v-img
            :src="product.brandLogo"
            alt="Logo marque"
            height="60"
            contain
            class="mb-3"
          />
          <h2 class="text-h5 font-weight-bold mb-2">{{ product.name }}</h2>

          <p class="text-success font-weight-medium mb-1">EN STOCK</p>
          <p class="text-subtitle-1 font-weight-bold mb-4">
            PRIX : {{ product.price.toFixed(2) }} €
          </p>

          <v-btn
            color="brown-darken-3"
            class="mb-6"
            rounded
            block
            size="large"
          >
            AJOUTER AU PANIER
          </v-btn>

          <p class="text-body-2 text-grey-darken-2">
            {{ product.description }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-10"></v-divider>

    <h3 class="text-h6 text-brown-darken-4 mb-4">Avis :</h3>

    <v-row>
      <v-col
        v-for="review in reviews"
        :key="review.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="pa-4 rounded-xl elevation-2">
          <div class="d-flex align-center mb-2">
            <v-avatar color="brown-lighten-4" size="40">
              <v-icon color="brown-darken-4">mdi-account</v-icon>
            </v-avatar>
            <div class="ml-3">
              <p class="text-subtitle-2 font-weight-bold mb-0">{{ review.name }}</p>
            </div>
          </div>
          <p class="text-body-2 text-grey-darken-1">
            <strong>{{ review.title }}</strong><br />
            {{ review.comment }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "Product",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Figurine Marvel Collector",
          price: 79.99,
          brandLogo: "/images/logo-marvel.png",
          description: "Figurine Marvel édition spéciale.",
          images: ["/images/marvel-figurine.jpg"],
        },
        {
          id: 2,
          name: "Set LEGO Star Wars",
          price: 59.9,
          brandLogo: "/images/logo-lego.png",
          description: "Pour les fans de la saga galactique.",
          images: ["gameboy.jpg"],
        },
      ],
      product: null,
    };
  },
  created() {
    const route = useRoute();
    const id = parseInt(route.params.id);
    this.product = this.products.find((p) => p.id === id) || this.products[0];
  },
};

</script>

<style scoped>
.product-image {
  object-fit: cover !important;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .v-carousel {
    height: 250px !important;
  }
}
</style>
