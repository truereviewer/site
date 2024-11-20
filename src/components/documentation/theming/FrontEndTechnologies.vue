<template>
  <DocumentatonSection id="theming@frontendtech">
    <template #header><a href="#theming@frontendtech">Frontend Technologies</a></template>
    <template #content>
      <div class="space-y-2">
        <p>
          Reviewer frontend is made of
          <span class="text-pink-500"> &nbsp; vue.js + typescript.</span>
        </p>
        <p>
          Reviewer also leverages the
          <a
            class="no-underline text-pink-500 inline-block pb-1"
            href="https://primevue.org/"
            target="_blank"
            >PrimeVue</a
          >
          UI Components library, allowing you to utilize any of its available features.
        </p>

        <p>
          If you're familiar with the mentioned technologies (especially Vue.js), you can take full
          control over the frontend.
        </p>
      </div>
    </template>
  </DocumentatonSection>
</template>

<script lang="ts" setup>
import DocumentatonSection from '@/components/documentation/DocumentatonSection.vue'
</script>
