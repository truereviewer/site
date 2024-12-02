<template>
  <header class="z-10 relative flex flex-col justify-center items-center min-h-svh">
    <div class="absolute right-8 top-4">
      <HeaderNav />
    </div>

    <!-- <div class="hidden z-40 opacity-10 absolute left-4 top-0">
      <img
        class="object-contain"
        src="/src/assets/img/reviewer/lg/1.png"
        alt="review distribution"
      />
    </div>
    <div class="hidden z-40 absolute opacity-10 right-4 bottom-0">
      <img
        class="object-contain"
        src="/src/assets/img/reviewer/lg/2.png"
        alt="sub review distribution"
      />
    </div> -->
    <div class="lg:hidden z-10 absolute left-4 top-0">
      <img
        class="object-contain"
        src="/src/assets/img/reviewer/lg/4-2.png"
        alt="sub review distribution"
      />
    </div>

    <div class="z-10 absolute right-4 bottom-0">
      <img
        class="object-contain"
        src="/src/assets/img/reviewer/lg/4-2.png"
        alt="sub review distribution"
      />
    </div>
    <div
      class="z-20 w-full min-h-svh bg-gradient-to-b from-green-600 via-yellow-700/40 via-[50%] to-green-600 absolute top-0 left-0"
    ></div>
    <div
      class="z-50 text-center boorder p-2 slhadow-2xl bg/-gradient-to-r from-green-600/[.6] to-green-600/[.8]"
    >
      <div class="!mb-0">
        <transition appear enter-active-class="animate__animated animate__backInDown">
          <img class="!m-0" src="/src/assets/img/h2.png" alt="Fantastic Review System" />
        </transition>
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
import RatingStars from '@/components/RatingStars.vue'
import HeaderNav from './HeaderNav.vue'
</script>
