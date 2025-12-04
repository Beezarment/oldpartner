<template>
  <v-row>
    <v-col
      v-for="type in types"
      :key="type.name"
      cols="12"
      sm="6"
      md="4"
    >
      <v-sheet
        :height="height"
        class="d-flex flex-column align-center justify-center bg-brown-lighten-5 rounded-xl product-type-sheet"
        elevation="2"
        @click="$emit('select', type)"
      >
        <v-img
          v-if="type.image"
          :src="type.image"
          max-height="80"
          max-width="80"
          contain
          class="mb-2"
        />
        <span class="text-brown-darken-4 font-weight-medium">{{ type.name }}</span>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  types: {
    type: Array,
    required: true
  },
  height: {
    type: [String, Number],
    default: 150
  }
})
</script>

<style scoped>
.product-type-sheet {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
}

.product-type-sheet:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #e5c9a1;
}
</style>
