<template>
  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ol>
    <p>Number of fruits: {{ numFruits }}</p>  

    <input id="input" v-model="newFruit" placeholder="Add fruit" />
    <button @click="addFruitToList(newFruit)">Add fruit</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

const fruits = ref(["apple", "banana", "orange"])
const newFruit = ref("")

const numFruits = computed(() => {
  return fruits.value.length
})

const addFruitToList = (fruit) => {
  fruits.value.push(fruit)
}
</script>