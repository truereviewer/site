<template>
  <header class="z-10 relative flex flex-col justify-center items-center min-h-svh">
    <div class="absolute right-8 top-4">
      <HeaderNav />
    </div>

    <div class="z-[80] absolute">
      <img class="opacity-10" src="/src/assets/img/bg-2.jpeg" alt="header background" />
    </div>

    <div
      class="z-[70] w-full min-h-svh bg-gradient-to-br from-green-400 to-green-700 absolute top-0 left-0"
    ></div>
    <div class="z-[80] mt-16 text-center boorder p-2">
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

      <div class="p-4 mt-6 bg-black text-white">
        <p class="!mb-2 text-2xl glitch-text !text-[#0bfb99] font-bold !mt-0">
          Special Offer for first 10 customers 🎁
        </p>
        <p class="!mb-4 !mt-0 text-xl">
          Remaining: <span class="font-bold !text-[#0bfb99]">{{ tweened.number.toFixed(0) }}</span>
        </p>

        <a class="hover:cursor-pointer" href="/#sponserware">
          <button class="btn neon-pulse">
            <span>Claim It</span>
          </button>
        </a>
      </div>
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
  'Modern Design',
  'Five Independent Components',
  'Advanced Filters',
  'AI Support ',
  'Lifetime Support',
  'Comprehensive Documentation',
  'Easy Theming'
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
  gsap.to(tweened, { duration: 3, number: 9 })
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

.glitch-text {
  font-weight: bold;
  position: relative;
  color: #fff;
  animation: glitch 2s infinite;
}

.glitch-text::before,
.glitch-text::after {
  position: absolute;
  top: 0;
  left: 0;
  color: #ff005e;
  background: transparent;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
  animation: glitch 2s infinite;
}

.glitch-text::after {
  color: #00d4ff;
  clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
}

@keyframes glitch {
  0%,
  100% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-1px, 1px);
  }
  80% {
    transform: translate(1px, -1px);
  }
}

.btn {
  position: relative;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  min-width: 200px;
  z-index: 1;
}

.neon-pulse {
  background: #000;
  border: 2px solid #0bfb99;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  overflow: visible;
}

.neon-pulse::before,
.neon-pulse::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid #0bfb99;
  border-radius: inherit;
  animation: pulseOut 2s ease-out infinite;
  opacity: 0;
}

.neon-pulse::after {
  animation-delay: 1s;
}

@keyframes pulseOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
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
