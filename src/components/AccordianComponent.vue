<template>
  <div class="w-full">
    <div v-if="!expand" @click="expand = true" class="cursor-pointer flex justify-end p-2 border">
      <span class="text-4xl">+</span>
    </div>
    <div v-else @click="expand = false" class="cursor-pointer flex justify-end p-2 border">
      <span class="text-4xl">-</span>
    </div>
    <p
      :class="[
        'transition-all ease-in-out duration-1000 border !mt-0 p-8',
        { 'overflow-hidden !h-0 !p-0': !expand, ' h-full': expand }
      ]"
    >
      ban
    </p>
  </div>
</template>

<script setup lang="ts">
import AccordianComponent from '@/components/AccordianComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import { ref } from 'vue'

const expand = ref<boolean>(false)
</script>
