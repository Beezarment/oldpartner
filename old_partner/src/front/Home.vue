<template>
  <v-container fluid class="pa-0">
    <v-sheet color="#f2d7b3" class="py-16 text-center ma-0">
      <h2 class="text-h5 font-weight-medium mb-2">
        Revivez votre enfance une nouvelle fois avec vos anciens partenaires de jeux.
      </h2>
    </v-sheet>

    <v-container class="mt-10">
      <h3 class="text-h6 mb-6 text-brown-darken-4">Produits en vedette</h3>
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

    <v-container class="mt-12">
      <h3 class="text-h6 mb-6 text-brown-darken-4">Dernières arrivées</h3>
      <v-row>
        <v-col
          v-for="product in latestArrivals"
          :key="product.id"
          cols="12" sm="6" md="4"
        >
          <v-card elevation="3" class="rounded-xl overflow-hidden">
            <v-img
              :src="product.image"
              height="600"
              class="product-image"
              cover
            ></v-img>

            <v-card-title class="text-truncate">{{ product.name }}</v-card-title>

            <v-card-subtitle class="text-brown-darken-4 font-weight-bold">
              {{ product.price.toFixed(2) }} €
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


    <v-container class="mt-12">
      <h3 class="text-h6 mb-6 text-brown-darken-4">Types de produits</h3>
      <v-row>
        <v-col
          v-for="type in productTypes"
          :key="type.name"
          cols="12" sm="6" md="4"
        >
          <v-sheet
            height="150"
            class="d-flex align-center justify-center bg-brown-lighten-5 rounded-xl"
          >
            <span class="text-brown-darken-4 font-weight-medium">{{ type.name }}</span>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-12 mb-10">
      <h3 class="text-h6 mb-6 text-brown-darken-4">Marques</h3>
      <v-row justify="center">
        <v-col
          v-for="brand in brands"
          :key="brand.id"
          cols="6" sm="3"
          class="d-flex justify-center"
        >
          <v-card
            height="160"
            width="160"
            class="overflow-hidden rounded-circle elevation-3 brand-card"
          >
            <v-img
              :src="brand.logo"
              alt="Logo marque"
              height="100%"
              width="100%"
              cover
              class="brand-image"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </v-container>
</template>

<script>

export default {
  name: "Home",
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
      latestArrivals: [
        {
          id: 5,
          name: "Maquette Ferrari 1980",
          price: 44.99,
          image: "ferrari.jpg",
        },
        {
          id: 6,
          name: "Jeu GameBoy Color",
          price: 69.9,
          image: "gameboy.jpg",
        },
        {
          id: 7,
          name: "Transformers édition 90s",
          price: 54.5,
          image: "transformer.jpg",
        },
      ],
      productTypes: [
        { name: "Figurines" },
        { name: "Maquettes" },
        { name: "Peluches" },
      ],
      brands: [
        { id: 1, logo: "logo-marvel.jpeg" },
        { id: 2, logo: "logo-lego.png" },
        { id: 3, logo: "logo-dc.png" },
        { id: 4, logo: "logo-bandai.png" },
      ],
    };
  },
};
</script>

<style scoped>
h2, h3 {
  color: #4a3a2a;
}

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

@media (max-width: 600px) {
  .product-image {
    height: 220px !important;
    object-fit: cover !important;
    object-position: center !important;
  }
}


.brand-card {
  border: 3px solid #e0d4c0; /* optionnel, petit contour rétro */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.brand-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.brand-image {
  object-fit: cover !important;
  object-position: center !important;
}

</style>
