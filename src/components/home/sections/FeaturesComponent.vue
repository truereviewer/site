<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Features </template>
    <template #content>
      <ul
        class=" !pl-0 lg:grid gap-x-12 lg:grid-cols-2 list-inside "
      >
        <li v-for="point in list" :key="point" class="flex items-center">
          <svg
            class="w-3.5 h-3.5 me-2 text-green-500  flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          {{ point }}
        </li>
      </ul>
    </template>
  </SectionComponent>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'

const list = [
  'Modern, responsive design.',
  'Theming with free presets and customizable colors.',
  'Highly customizable to suit your preferences.',
  'Packed with all the essential features.',
  'Designed to cater to diverse user needs.',
  'High performance powered by Vue.js.',
  'API-agnostic for seamless integration.',
  'Widget to summarize product reviews effectively.',
  'Interactive statistics for deeper insights.',
  'Dynamic sub-ratings for detailed product evaluation.',
  'Advanced media gallery for an immersive visual experience.',
  'Comprehensive review list with pagination.',
  'Robust filtering options for quick navigation.',
  'Elegant, user-friendly forms with built-in validation.',
  'Enhanced security features for peace of mind.',
  'Product recommendation capabilities.',
  'React to reviews with helpfulness ratings.',
  'Ability to report inappropriate reviews.',
  'And much more to elevate the review experience!'
]
</script>
