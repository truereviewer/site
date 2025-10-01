<template>
  <header class="z-10 relative flex flex-col justify-center items-center min-h-svh">
    <div class="absolute right-8 top-4">
      <HeaderNav />
    </div>

    <div class="lg:hidden z-[60] absolute left-4 top-0">
      <img
        class="object-contain !opacity-10"
        src="/src/assets/img/reviewer/lg/4-2.png"
        alt="sub review distribution"
      />
    </div>

    <div class="z-[60] absolute right-4 bottom-0">
      <img
        class="object-contain opacity-10"
        src="/src/assets/img/reviewer/lg/4-2.png"
        alt="sub review distribution"
      />
    </div>
    <div
      class="z-20 w-full min-h-svh bg-gradient-to-br from-green-400 to-green-700 absolute top-0 left-0"
    ></div>
    <div
      class="z-50 text-center boorder p-2 slhadow-2xl bg/-gradient-to-r from-green-600/[.6] to-green-600/[.8]"
    >
      <div class="!mb-0 text-white">
        <h1 class="text-black !mb-4">TrueReviewer</h1>
        <h2 class="!my-0 !text-black neon-text">#1 Product Review Package for Laravel</h2>
        <div class="!h-8 self-start !mt-4 !mb-2">
          <Transition name="fade">
            <p v-if="currentKeyWord" class="!m-0">{{ currentKeyWord }}</p>
          </Transition>
        </div>
      </div>
      <div class="flex justify-center">
        <transition appear enter-active-class="animate__animated animate__backInUp">
          <RatingStars />
        </transition>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import RatingStars from '@/components/RatingStars.vue'
import HeaderNav from './HeaderNav.vue'

const currentKeyWord = ref('')

const keyWords = [
  'Modern design',
  'Five independent components',
  'Advanced filters',
  'AI support ',
  'Lifetime support',
  'Comprehensive documentation',
  'Easy theming'
]

onMounted(() => {
  let currentIndex = 0

  currentKeyWord.value = keyWords[currentIndex]

  setInterval(() => {
    currentKeyWord.value = ''
  }, 4000)

  setInterval(() => {
    if (currentIndex === keyWords.length - 1) {
      currentIndex = -1
    }
    currentKeyWord.value = keyWords[currentIndex + 1]

    currentIndex++
  }, 5000)
})
</script>

<style scoped>
.neon-text {
  text-shadow:
    0 0 5px #f7a03d,
    0 0 10px #f7a03d,
    0 0 20px #f7a03d,
    0 0 40px #f7a03d,
    0 0 80px #f7a03d;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  0% {
    text-shadow:
      0 0 5px #f7a03d,
      0 0 10px #f7a03d,
      0 0 20px #f7a03d,
      0 0 40px #f7a03d,
      0 0 80px #f7a03d;
  }
  100% {
    text-shadow:
      0 0 10px #f8fa6f,
      0 0 20px #f8fa6f,
      0 0 40px #f8fa6f,
      0 0 80px #f8fa6f,
      0 0 160px #f8fa6f;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
