<template>
  <SectionComponent id="technologies">
    <template #header>Technologies</template>
    <template #content>
      <p class="!mt-0">A combination of Laravel and Vue.js with PrimeVue UI components.</p>
      <div
        class="inline-flex bg-gradient-to-r from-green-300/10 to-green-400/10 p-4 gap-x-4 justify-start items-center rounded"
      >
        <a class="flex space-x-4 items-center" href="www.laravel.com">
          <img class="max-w-16 !my-0" src="/src/assets/img/laravel.png" alt="Laravel" />
          <span class="inline-block primary-bg-color h-8 w-[2px]"></span>
        </a>
        <a class="flex space-x-4 items-center" href="https://vuejs.org/">
          <img class="max-w-16 !my-0" src="/src/assets/img/vue.png" alt="Vue.js" />
          <span class="inline-block primary-bg-color h-8 w-[2px]"></span>
        </a>
        <a class="flex space-x-4 items-center" href="https://primevue.org/">
          <img class="max-w-16 !my-0" src="/src/assets/img/primevue.webp" alt="Primevue" />
        </a>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>
