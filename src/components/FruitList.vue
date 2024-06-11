<template>
  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ol>
    <p>Number of fruits: {{ numFruits }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

const fruits = ref(["apple", "banana", "orange"])

const numFruits = computed(() => {
  return fruits.value.length
})
</script>