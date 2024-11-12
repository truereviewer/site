<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Rating Distribution</template>
    <template #content>
      <p>This component provides detailed analytics about the ratings.</p>
      <picture class="border rounded p-4">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/1.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/lg/1.png" />
        <img src="/src/assets/img/reviewer/lg/1.png" alt="Rating distribution" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from '@/components/SectionComponent.vue'
</script>
