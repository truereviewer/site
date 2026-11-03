<template>
  <div>
    <v-icon
      @click="scrollToTop"
      icon="$arrowUp"
      :src="ScrollToTopImg"
      alt="scroll to top"
      :class="[
        'w-0 border rounded-full opacity-0 h-[2rem] z-[500] fixed bottom-4 right-4 transition-all cursor-pointer',
        { 'opacity-100 w-8': showTopNav }
      ]"
    />
    <v-icon
      class=""
      @click="scrollToBottom"
      icon="$arrowDown"
      :src="ScrollToTopImg"
      alt="scroll to bottom"
      :class="[
        'w-0 border rounded-full h-[2rem] opacity-0 z-[500] fixed top-4 right-4 transition-all cursor-pointer',
        { 'opacity-100 w-8': showBottomNav }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import ScrollToTopImg from '@/assets/icons/up-arrow.svg'

const showTopNav = ref(false)
const showBottomNav = ref(false)

const handleScrollBottom = () => {
  console.log('inside top')
  if (window.scrollY > 5000) {
    showTopNav.value = true
    showBottomNav.value = false
  } else if (window.scrollY < 5000) {
    showTopNav.value = false
  }

  if (window.scrollY > 1000 && window.scrollY < 5000) {
    showBottomNav.value = true
  } else if (window.scrollY < 1000) {
    showBottomNav.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScrollBottom)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollBottom)
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>
