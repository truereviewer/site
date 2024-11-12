<template>
  <SectionComponent>
    <template #header>Sub Rating Distribution and Recommendations</template>
    <template #content>
      <p>Recommendations are an accurate way to get an idea about the overall product quality.</p>
      <p class="!mt-0">
        Sub-ratings provide additional value to users. These are dynamic, allowing you to add any
        characteristics to your product, such as quality, value for money, durability, etc.
      </p>

      <picture class="border rounded p-4">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/lg/2.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/lg/2.png" />
        <img src="/src/assets/img/reviewer/lg/2.png" alt="Sub ratng distribution" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>
