<template>
  <SectionComponent>
    <template #header>Sub Rating Distribution and Recommendations</template>
    <template #content>
      <p>
        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley
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
