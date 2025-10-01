<template>
  <SectionComponent
    class="flex flex-col items-start justify-center bg-gradient-to-br from-green-600 to-green-700"
  >
    <template #content>
      <h3 class="!mt-4 !text-black italic">Add Review Functionality in Minutes</h3>
      <div class="w-full">
        <iframe
          class="w-full lg:w-2/3 aspect-video p-1"
          src="https://www.youtube.com/embed/-NJszz8lnuA?si=Sl8HGlVcG3zYDgsl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
</script>
