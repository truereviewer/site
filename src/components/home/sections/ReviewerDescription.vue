<template>
  <SectionComponent class="flex flex-col items-start justify-center">
    <template #header>Full Review System - Five Isolated Componenets</template>
    <template #content>
      <p class="!mb-0">
        This review system is thoughtfully crafted to capture users' attention while maintaining a
        simple, intuitive design. Each component is styled to stand out without overwhelming,
        creating a smooth user experience. Plus, you have the flexibility to integrate and use each
        component independently, tailoring the setup to fit seamlessly with your application’s
        requirements.
      </p>
      <!-- <p class="!my-0">Each component has follwoing constraints</p> -->

      <ul class="text-gray-500 lg:grid gap-x-8 lg:grid-cols-2 list-inside dark:text-gray-400">
        <li v-for="point in list" :key="point" class="flex items-center">
          <svg
            class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
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
