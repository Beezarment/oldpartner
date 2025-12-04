<template>
  <v-select
    :items="items"
    :label="label"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    variant="outlined"
    clearable
    rounded
    :style="{ width: width ? width + 'px' : '100%' }"
  />
</template>

<script setup>
defineProps({
  modelValue: [String, Number, null],
  label: { type: String, default: '' },
  items: { type: Array, default: () => [] },
  width: { type: [Number, String], default: null }
})
</script>
