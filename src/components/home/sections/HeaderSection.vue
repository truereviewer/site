<template>
  <header class="z-10 relative flex flex-col justify-center items-center min-h-svh">
    <div class="absolute right-8 top-4">
      <HeaderNav class="main-text-color" />
    </div>

    <div class="z-[80] absolute top-40 md:top-auto">
      <img class="opacity-10" src="/src/assets/img/bg-2.jpeg" alt="header background" />
    </div>

    <div class="z-[70] w-full min-h-svh absolute top-0 left-0"></div>
    <div class="z-[80] mt-16 text-center p-2">
      <div class="!mb-0 text-white">
        <h1 class="main-text-color bg-clip-text text-transparent !mb-4">TrueReviewer</h1>
        <h3 class="!my-0 secondary-text secondary-text-colo font-bold">
          #1 Product Review Package for Laravel
        </h3>
        <div class="!h-8 self-start !mt-4 !mb-2">
          <Transition name="fade">
            <p v-if="currentKeyWord" class="!m-0 font-bold italic secondary-text-color">
              {{ currentKeyWord }}
            </p>
          </Transition>
        </div>
      </div>
      <div class="flex justify-center">
        <transition appear enter-active-class="animate__animated animate__backInUp">
          <RatingStars />
        </transition>
      </div>
      <div class="flex justify-center mt-2">
        <a
          href="https://www.producthunt.com/products/truereviewer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-truereviewer"
          target="_blank"
          ><img
            class="!my-0"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=952622&theme=light&t=1759346100986"
            alt="TrueReviewer&#0032; - Sleek&#0032;and&#0032;Powerful&#0032;Review&#0032;&#0038;&#0032;Rating&#0032;System&#0032;for&#0032;Laravel | Product Hunt"
            style="width: 200px"
        /></a>
      </div>

      <!--      <div class="p-4 mt-6 bg-black text-white">
        <p class="!mb-2 text-2xl glitch-text !text-[#0bfb99] font-bold !mt-0">
          Special Offer for first 20 customers 🎁
        </p>
        <p class="!mb-4 !mt-0 text-xl">
          Remaining: <span class="font-bold !text-[#0bfb99]">{{ tweened.number.toFixed(0) }}</span>
        </p>

        <a class="hover:cursor-pointer" href="/#sponserware">
          <button class="btn neon-pulse">
            <span>Claim It</span>
          </button>
        </a>
      </div>-->
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import RatingStars from '@/components/RatingStars.vue'
import HeaderNav from './HeaderNav.vue'

import gsap from 'gsap'

const currentKeyWord = ref('')

const keyWords = [
  'Modern Design 🎨',
  'Five Independent Components 🧩',
  'Advanced Filters 🌪️',
  'AI Support 🤖',
  'Lifetime Support 🤝',
  'Comprehensive Documentation 🗂️',
  'Easy Theming 🎨'
]

const tweened = reactive({
  number: 0
})

onMounted(() => {
  let currentIndex = 0

  currentKeyWord.value = keyWords[currentIndex]

  setInterval(() => {
    currentKeyWord.value = ''
  }, 3000)

  setInterval(() => {
    if (currentIndex === keyWords.length - 1) {
      currentIndex = -1
    }
    currentKeyWord.value = keyWords[currentIndex + 1]

    currentIndex++
  }, 4000)
})

onMounted(() => {
  gsap.to(tweened, { duration: 4, number: 17 })
})
</script>

<style scoped>
@keyframes textHighlight {
  0%,
  65% {
    background-position: 100% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

.secondary-text {
  position: relative;
  display: inline-block;
  color: oklch(75% 0.183 55.934);
  background: linear-gradient(
    110deg,
    oklch(75% 0.183 55.934) 0%,
    oklch(75% 0.183 55.934) 40%,
    oklch(95% 0.08 55.934) 50%,
    oklch(75% 0.183 55.934) 60%,
    oklch(75% 0.183 55.934) 100%
  );
  background-size: 250% 100%;
  background-position: 100% 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: textHighlight 3.5s ease-in-out infinite;
}

@keyframes glow {
  0% {
    text-shadow:
      0 0 5px #fd8904,
      0 0 10px #fd8904,
      0 0 20px #fd8904,
      0 0 40px #fd8904,
      0 0 80px #fd8904;
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
