<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Widget</template>
    <template #content>
      <p>
        The widget provides users with an overall idea about your product. Statistics appear as a
        popup when hovered over.
      </p>
      <picture class="border rounded p-4 inline-block">
        <source media="(min-width:1024px)" srcset="/src/assets/img/reviewer/full-widget.png" />
        <source media="(min-width:768px)" srcset="/src/assets/img/reviewer/full-widget.png" />
        <img src="/src/assets/img/reviewer/full-widget.png" alt="Full Widget" />
      </picture>
    </template>
  </SectionComponent>
</template>

<script setup>
import SectionComponent from '@/components/SectionComponent.vue'
</script>
