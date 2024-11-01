<template>
  <header
    class="z-10 relative flex flex-col justify-center items-center min-h-svh bgs-[url('../assets/img/bg-3.webp')]"
  >
    <div
      class="z-20 w-full min-h-svh bg-gradient-to-b from-green-600 via-yellow-700/40 via-[50%] to-green-600 absolute top-0 left-0"
    ></div>
    <div
      class="z-30 text-center boorder p-2 slhadow-2xl pprimary-border-color slhadow-[var(--primary-shadow-color)] bg/-gradient-to-r from-green-600/[.6] to-green-600/[.8]"
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
</script>
