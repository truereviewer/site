<template>
  <img
    @click="scrollToTop"
    :src="ScrollToTopImg"
    alt="scroll to top"
    :class="[
      'w-0 opacity-0 z-[500] fixed bottom-4 right-4 transition-all cursor-pointer',
      { 'opacity-100 w-8': show }
    ]"
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ScrollToTopImg from '@/assets/icons/up-arrow.svg'

const show = ref(false)

const handleScroll = () => {
  if (window.scrollY > 1000) {
    show.value = true
  } else {
    show.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
