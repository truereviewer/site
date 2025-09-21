<template>
  <SectionComponent
    class="flex flex-col items-start justify-center bg-gradient-to-b from-green-600 via-yellow-700/40 via-[50%] to-green-600"
  >
    <template #content>
      <h3 class="!mt-0 !text-emerald-950 italic">Add Review Functionality in Minutes</h3>
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
