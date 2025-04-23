<template>
  <DocumentationSection id="requirements">
    <template #header><a href="#requirements">Requirements</a></template>
    <template #content>
      <ul class="sm:max-w-[28rem]">
        <li class="flex justify-between items-center">
          <span>PHP</span>
          <span class="w-[22rem]">^8.1 (without AI features) | ^8.2</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Laravel</span>
          <span class="w-[22rem]">^10.0 (without AI features) | ^11.0 | ^12.0</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Vue.js</span>
          <span class="w-[22rem]">^3.5 (Only for seperated front-end | API)</span>
        </li>
      </ul>
    </template>
  </DocumentationSection>
</template>

<script lang="ts" setup>
import DocumentationSection from './DocumentationSection.vue'
</script>
