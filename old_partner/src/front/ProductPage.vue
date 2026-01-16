<template>
  <v-container v-if="product" class="py-10">
    <v-row>
      <v-col cols="12" md="6">
        <ImageCarousel :images="product.images" :height="500" show-arrows="always" />
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div>
          <v-img
            :src="product.brandLogo"
            height="60"
            contain
            class="mb-3"
          />

          <h2 class="text-h5 font-weight-bold mb-2">{{ product.name }}</h2>

          <p class="text-success font-weight-medium mb-1">EN STOCK</p>
          <p class="text-subtitle-1 font-weight-bold mb-4">
            PRIX : {{ product.price.toFixed(2) }} €
          </p>

          <v-btn color="brown-darken-3" block rounded>
            AJOUTER À LA WISHLIST
          </v-btn>

          <p class="mt-4 text-grey-darken-2">
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

  <v-container v-else class="text-center py-10">
    <v-progress-circular indeterminate />
  </v-container>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: null,
      reviews: [
        {
          id: 1,
          name: "Alice",
          title: "Super produit !",
          comment: "Très satisfait de mon achat, la qualité est top !"
        },
        {
          id: 2,
          name: "Bob",
          title: "Bon rapport qualité-prix",
          comment: "Le produit correspond parfaitement à la description."
        },
        {
          id: 3,
          name: "Charlie",
          title: "Livraison rapide",
          comment: "Reçu en 2 jours, emballage impeccable."
        }
      ]
    }
  },
  async created() {
    const id = this.$route.params.id

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`)
      if (!res.ok) throw new Error()
      this.product = await res.json()
    } catch {
      this.$router.push({ name: "Catalogue" })
    }
  }
}
</script>
