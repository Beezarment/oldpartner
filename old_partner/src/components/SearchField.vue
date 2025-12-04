<template>
  <v-text-field
    :label="label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    rounded
    :style="{ width: width ? width + 'px' : '100%' }"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  label: { type: String, default: 'Rechercher' },
  width: { type: [Number, String], default: null }
})
</script>
