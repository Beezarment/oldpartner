<template>
  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
  >
    <v-card
      :elevation="elevation"
      class="rounded-xl overflow-hidden"
      :class="{ 'clickable-card': clickable }"
      @click="onClick"
    >
      <v-img
        :src="product.image"
        :height="height"
        cover
        class="product-image"
      />

      <v-card-title class="text-truncate">
        {{ product.name }}
      </v-card-title>

      <v-card-subtitle class="text-brown-darken-4 font-weight-bold">
        {{ product.price.toFixed(2) }} €
      </v-card-subtitle>
    </v-card>
  </v-col>
</template>

<script setup>
const emit = defineEmits(["click"])

defineProps({
  product: {
    type: Object,
    required: true
  },
  height: {
    type: [Number, String],
    default: 600
  },
  elevation: {
    type: Number,
    default: 3
  },
  clickable: {
    type: Boolean,
    default: false
  },
  cols: { type: Number, default: 12 },
  sm: { type: Number, default: 6 },
  md: { type: Number, default: 4 }
})

function onClick() {
  if (clickable) emit("click")
}
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
}

.clickable-card:hover {
  transform: translateY(-3px);
}
</style>
