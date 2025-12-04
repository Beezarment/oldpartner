<template>
  <v-col :cols="cols" :sm="sm" :md="md" :lg="lg">
    <v-card :elevation="elevation" class="product-card rounded-xl">
      <div class="image-wrapper">
        <div v-if="showBadge && index !== undefined" class="number-badge">
          {{ index + 1 }}
        </div>

        <v-img
          :src="product.image"
          class="product-image"
          cover
        />
      </div>

      <v-card-title class="text-truncate">
        {{ product.name }}
      </v-card-title>

      <v-card-subtitle class="text-brown-darken-4 font-weight-bold">
        {{ product.price.toFixed(2) }} €
      </v-card-subtitle>

      <v-card-text v-if="product.description" class="text-grey-darken-1 text-body-2">
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
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
  index: { type: Number, default: undefined },
  showBadge: { type: Boolean, default: false },
  cols: { type: Number, default: 12 },
  sm: { type: Number, default: 6 },
  md: { type: Number, default: 4 },
  lg: { type: Number, default: 3 },
  elevation: { type: Number, default: 4 }
});
</script>

<style scoped>
.product-card {
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1.2;
}

.product-image {
  width: 100%;
  height: 100%;
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
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  font-size: 14px;
  z-index: 5;
}
</style>
