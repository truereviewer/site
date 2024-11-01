<template>
  <div class="star-container">
    <div
      v-for="(star, index) in stars"
      :key="index"
      class="star animate-all p-1"
      :class="{ filled: star }"
    >
      <StarIcon class="size-12 shadow-2xl shadow-green-600" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { StarIcon } from '@heroicons/vue/16/solid'

const stars = ref<boolean[]>([false, false, false, false, false]) // Initially empty stars

const fillStars = () => {
  stars.value.forEach((_, index) => {
    setTimeout(
      () => {
        stars.value[index] = true // Fill the star after a delay
      },
      (index + 1) * 1000
    ) // 500ms delay for each star
  })
}

onMounted(() => {
  fillStars() // Start filling stars after the component is mounted
})
</script>

<style scoped>
.star-container {
  display: flex;
  justify-content: space-between;
}

.star {
  font-size: 60px;
  color: lightgray;
  transition: color 0.5s ease; /* Smooth transition when filling the star */
}

.star.filled {
  color: rgb(247, 127, 15) !important; /* Filled stars will be gold */
}
</style>
