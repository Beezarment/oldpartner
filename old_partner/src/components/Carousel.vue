<template>
  <v-carousel
    :height="height"
    cycle
    :show-arrows="showArrows"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    >
      <v-img
        :src="image"
        cover
        class="product-image"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  },
  height: {
    type: [Number, String],
    default: 400
  },
  showArrows: {
    type: [Boolean, String],
    default: "hover"
  }
})
</script>

<style scoped>
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
